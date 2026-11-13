export type PuzzleSize = 3 | 4;

/** Zero is the empty space. Tiles increase left-to-right, then top-to-bottom. */
export function solvedTiles(size: PuzzleSize): number[] {
  return Array.from({length: size * size}, (_, index) => (index + 1) % (size * size));
}

export function isSolved(tiles: readonly number[]): boolean {
  return tiles.every((tile, index) => tile === (index + 1) % tiles.length);
}

export function neighbors(blankIndex: number, size: PuzzleSize): number[] {
  const row = Math.floor(blankIndex / size);
  const col = blankIndex % size;
  const options: number[] = [];
  if (row > 0) options.push(blankIndex - size);
  if (row < size - 1) options.push(blankIndex + size);
  if (col > 0) options.push(blankIndex - 1);
  if (col < size - 1) options.push(blankIndex + 1);
  return options;
}

export function slideTile(tiles: readonly number[], index: number, size: PuzzleSize): number[] | null {
  const blank = tiles.indexOf(0);
  if (!neighbors(blank, size).includes(index)) return null;
  const updated = [...tiles];
  [updated[blank], updated[index]] = [updated[index], updated[blank]];
  return updated;
}

/** Always solvable: shuffle from a completed board using legal moves, not a random permutation. */
export function shuffleTiles(size: PuzzleSize, random: () => number = Math.random): number[] {
  const tiles = solvedTiles(size);
  let blank = tiles.length - 1;
  let previousBlank = -1;
  const steps = size === 3 ? 110 : 240;
  for (let step = 0; step < steps; step++) {
    const options = neighbors(blank, size).filter(index => index !== previousBlank);
    const choice = options[Math.min(options.length - 1, Math.floor(random() * options.length))];
    [tiles[blank], tiles[choice]] = [tiles[choice], tiles[blank]];
    previousBlank = blank;
    blank = choice;
  }
  if (isSolved(tiles)) {
    const choice = neighbors(blank, size)[0];
    [tiles[blank], tiles[choice]] = [tiles[choice], tiles[blank]];
  }
  return tiles;
}
