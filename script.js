const board = document.querySelector(".board");
const blockHeight = 40;
const blockWidth = 40;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

// for (let i = 0; i < rows * cols; i++) {
//   const block = document.createElement("div");
//   block.classList.add("block");

//   // add block inside board
//   board.appendChild(block);
//   block.innerText = `${rows} - ${cols}`
// }

const blocks = [];
const snake = [
  { x: 1, y: 3 },
];
let direction = "right";

//
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");

    // add block inside board
    board.appendChild(block);
    // block.innerText = `${row} - ${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

// function for render snake
function render() {
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

//
setInterval(() => {
  // snake head
  let head = null;

  if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  render();
}, 300);
