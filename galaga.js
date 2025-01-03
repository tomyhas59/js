// 게임 설정
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 플레이어
const playerWidth = 50;
const playerHeight = 50;
const playerSpeed = 10;

// 총알
const bulletWidth = 5;
const bulletHeight = 15;
const bulletSpeed = 15;

// 적군
const enemyWidth = 50;
const enemyHeight = 50;
const enemySpeed = 0.11;
const enemyRowCount = 3;
const enemyColCount = 8;

// 게임 상태
let playerX = canvas.width / 2 - playerWidth / 2;
let playerY = canvas.height - playerHeight - 20;
let playerDirection = 0;
let bullets = [];
let enemies = [];
let gameOver = false;
let score = 0;

// 키보드 입력
let keys = { left: false, right: false, space: false };

// 플레이어 객체 그리기
function drawPlayer() {
  ctx.fillStyle = "white";
  ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

// 총알 객체 그리기
function drawBullets() {
  ctx.fillStyle = "red";
  for (let i = 0; i < bullets.length; i++) {
    let bullet = bullets[i];
    ctx.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight);
  }
}

// 적군 객체 그리기
function drawEnemies() {
  ctx.fillStyle = "green";
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    ctx.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight);
  }
}

// 총알 이동
function moveBullets() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].y -= bulletSpeed;
    if (bullets[i].y < 0) {
      bullets.splice(i, 1);
      i--;
    }
  }
}

// 적군 이동
function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += enemySpeed;
    if (enemies[i].y > canvas.height) {
      gameOver = true;
    }
  }
}

// 플레이어 이동
function movePlayer() {
  if (keys.left && playerX > 0) {
    playerX -= playerSpeed;
  }
  if (keys.right && playerX < canvas.width - playerWidth) {
    playerX += playerSpeed;
  }
}

// 총알과 적군 충돌 체크
function checkCollisions() {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < enemies.length; j++) {
      let bullet = bullets[i];
      let enemy = enemies[j];
      if (
        bullet.x < enemy.x + enemyWidth &&
        bullet.x + bulletWidth > enemy.x &&
        bullet.y < enemy.y + enemyHeight &&
        bullet.y + bulletHeight > enemy.y
      ) {
        // 충돌 발생 시 적군과 총알 제거
        bullets.splice(i, 1);
        enemies.splice(j, 1);
        score += 10;
        i--;
        break;
      }
    }
  }
}

// 적군 생성
function generateEnemies() {
  for (let row = 0; row < enemyRowCount; row++) {
    for (let col = 0; col < enemyColCount; col++) {
      enemies.push({
        x: col * (enemyWidth + 10) + 50,
        y: row * (enemyHeight + 10) + 30,
      });
    }
  }
}

// 키 입력 처리
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") keys.left = true;
  if (e.key === "ArrowRight" || e.key === "d") keys.right = true;
  if (e.key === " " || e.key === "Enter") keys.space = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") keys.left = false;
  if (e.key === "ArrowRight" || e.key === "d") keys.right = false;
  if (e.key === " " || e.key === "Enter") keys.space = false;
});

// 총알 발사
function shootBullet() {
  if (keys.space) {
    bullets.push({
      x: playerX + playerWidth / 2 - bulletWidth / 2,
      y: playerY,
    });
    keys.space = false;
  }
}

// 게임 종료 처리
function gameEnd() {
  ctx.fillStyle = "white";
  ctx.font = "40px Arial";
  ctx.fillText("Game Over!", canvas.width / 2 - 100, canvas.height / 2);
  ctx.font = "20px Arial";
  ctx.fillText(
    `Score: ${score}`,
    canvas.width / 2 - 50,
    canvas.height / 2 + 40
  );
}

// 게임 루프
function gameLoop() {
  if (gameOver) {
    gameEnd();
    return;
  }

  // 화면 초기화
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어, 총알, 적군 그리기
  drawPlayer();
  drawBullets();
  drawEnemies();

  // 게임 동작
  movePlayer();
  moveBullets();
  moveEnemies();
  shootBullet();
  checkCollisions();

  // 점수 표시
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 10, 20);

  // 루프 실행
  requestAnimationFrame(gameLoop);
}

// 게임 시작
generateEnemies();
gameLoop();
