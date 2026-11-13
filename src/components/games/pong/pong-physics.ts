/** Pure deterministic Pong movement/collision logic, shared by the canvas and tests. */
export const PONG_WIDTH = 360;
export const PONG_HEIGHT = 240;
export const PADDLE_WIDTH = 9;
export const PADDLE_HEIGHT = 48;
export const LEFT_X = 15;
export const RIGHT_X = PONG_WIDTH - LEFT_X - PADDLE_WIDTH;
export const BALL_RADIUS = 5;
export const WIN_SCORE = 7;

export type Ball = {x:number; y:number; vx:number; vy:number; speed:number};
export type PointResult = "player" | "cpu" | null;

export const clamp = (value:number, low:number, high:number) =>
  Math.min(high, Math.max(low, value));

export function serveBall(towards:"player"|"cpu", random:()=>number=Math.random):Ball {
  const angle = (random() * 2 - 1) * .48;
  const speed = 214;
  const direction = towards === "cpu" ? 1 : -1;
  return {
    x:PONG_WIDTH/2, y:PONG_HEIGHT/2,
    vx:Math.cos(angle)*speed*direction,
    vy:Math.sin(angle)*speed,
    speed
  };
}

export function advanceBall(
  original:Ball,
  playerY:number,
  cpuY:number,
  dt:number
):{ball:Ball;point:PointResult;hit:boolean} {
  const ball = {...original};
  const time = clamp(dt,0,1/30);
  ball.x += ball.vx*time;
  ball.y += ball.vy*time;
  let hit = false;
  if(ball.y - BALL_RADIUS <= 0 && ball.vy < 0){
    ball.y = BALL_RADIUS; ball.vy = -ball.vy;hit=true;
  } else if(ball.y + BALL_RADIUS >= PONG_HEIGHT && ball.vy > 0){
    ball.y = PONG_HEIGHT - BALL_RADIUS;ball.vy = -ball.vy;hit=true;
  }
  const collision = (paddleX:number,paddleY:number,direction:number) => {
    const center = paddleY + PADDLE_HEIGHT/2;
    const offset = clamp((ball.y-center)/(PADDLE_HEIGHT/2),-1,1);
    const angle = offset * 0.90;
    ball.speed = Math.min(398,ball.speed + 14);
    ball.vx = Math.cos(angle)*ball.speed*direction;
    ball.vy = Math.sin(angle)*ball.speed;
    ball.x = direction===1 ? paddleX+PADDLE_WIDTH+BALL_RADIUS : paddleX-BALL_RADIUS;
    hit=true;
  };
  if(ball.vx<0 && ball.x-BALL_RADIUS<=LEFT_X+PADDLE_WIDTH &&
    ball.x+BALL_RADIUS>=LEFT_X &&
    ball.y+BALL_RADIUS>=playerY && ball.y-BALL_RADIUS<=playerY+PADDLE_HEIGHT){
    collision(LEFT_X,playerY,1);
  } else if(ball.vx>0 && ball.x+BALL_RADIUS>=RIGHT_X &&
    ball.x-BALL_RADIUS<=RIGHT_X+PADDLE_WIDTH &&
    ball.y+BALL_RADIUS>=cpuY && ball.y-BALL_RADIUS<=cpuY+PADDLE_HEIGHT){
    collision(RIGHT_X,cpuY,-1);
  }
  const point:PointResult=ball.x < -BALL_RADIUS ? "cpu" :
    ball.x > PONG_WIDTH+BALL_RADIUS ? "player" : null;
  return {ball,point,hit};
}
