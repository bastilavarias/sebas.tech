/** Pure 2048 rules. No React/browser dependency; every move returns a new board. */
export const GRID_SIDE = 4;
export const GRID_CELLS = GRID_SIDE * GRID_SIDE;
export const GOAL = 2048;
export type Direction = "left" | "right" | "up" | "down";
export type Board = number[];

export function emptyBoard(): Board {
  return Array<number>(GRID_CELLS).fill(0);
}

function lineIndexes(line: number, direction: Direction): number[] {
  return Array.from({length: GRID_SIDE}, (_, step) => {
    switch(direction) {
      case "left": return line * GRID_SIDE + step;
      case "right": return line * GRID_SIDE + (GRID_SIDE - 1 - step);
      case "up": return step * GRID_SIDE + line;
      case "down": return (GRID_SIDE - 1 - step) * GRID_SIDE + line;
    }
  });
}

export type SlideResult = {
  board: Board;
  changed: boolean;
  gained: number;
  merged: number[];
};

export function slideBoard(board: readonly number[], direction: Direction): SlideResult {
  if (board.length !== GRID_CELLS) throw new Error("2048 expects a 4×4 board");
  const next = [...board];
  let gained = 0;
  const merged: number[] = [];

  for (let line = 0; line < GRID_SIDE; line++) {
    const indexes = lineIndexes(line, direction);
    const values = indexes.map(index => board[index]).filter(value => value !== 0);
    const packed: number[] = [];
    for (let i = 0; i < values.length; i++) {
      if (i + 1 < values.length && values[i] === values[i + 1]) {
        const combined = values[i] * 2;
        packed.push(combined);
        gained += combined;
        merged.push(indexes[packed.length - 1]);
        i++;
      } else {
        packed.push(values[i]);
      }
    }
    indexes.forEach((index, pos) => {next[index] = packed[pos] ?? 0});
  }
  const changed = next.some((value, index) => value !== board[index]);
  return {board: next, changed, gained, merged};
}

export function addRandomTile(board: readonly number[], rng: () => number = Math.random): {board: Board; spawned: number | null} {
  const available = board.flatMap((value, index) => value === 0 ? [index] : []);
  if (available.length === 0) return {board: [...board], spawned: null};
  const chosen = available[Math.min(available.length - 1, Math.floor(rng() * available.length))];
  const next = [...board];
  next[chosen] = rng() < 0.9 ? 2 : 4;
  return {board: next, spawned: chosen};
}

export function createGameBoard(rng: () => number = Math.random): Board {
  return addRandomTile(addRandomTile(emptyBoard(), rng).board, rng).board;
}

export function hasMoves(board: readonly number[]): boolean {
  if (board.some(value => value === 0)) return true;
  for (let index = 0; index < GRID_CELLS; index++) {
    const row = Math.floor(index / GRID_SIDE);
    const col = index % GRID_SIDE;
    if (col < GRID_SIDE - 1 && board[index] === board[index + 1]) return true;
    if (row < GRID_SIDE - 1 && board[index] === board[index + GRID_SIDE]) return true;
  }
  return false;
}

export function reachedGoal(board: readonly number[]): boolean {
  return board.some(value => value >= GOAL);
}

export function validBoard(value: unknown): value is Board {
  return Array.isArray(value) && value.length === GRID_CELLS &&
    value.every(tile => typeof tile === "number" &&
      Number.isSafeInteger(tile) &&
      (tile === 0 || (tile >= 2 && tile <= 131072 && (Math.log2(tile) % 1) === 0)));
}
