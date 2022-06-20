// Your Code Here
function start() {
  let firstAnswer = window.prompt("Do you head left, or right?");
  if (firstAnswer === "left") {
    goLeft();
  } else if (firstAnswer === "right") {
    goRight();
  }
}
