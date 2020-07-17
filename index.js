const dragEl = document.querySelector(".drag");
const emptyEl = document.querySelectorAll(".empty");

// drag & drop apis..
dragEl.addEventListener("dragstart", dragStart);
dragEl.addEventListener("dragend", dragEnd);

emptyEl.forEach((item) => {
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", dragDrop);
});

// Drag event listeners..

function dragStart(e) {
  //   e.preventDefault();
  console.log(e);
  dragEl.classList.add("hold");
  setTimeout(() => dragEl.classList.add("none"), 0);
}

function dragEnd() {
  dragEl.className = "drag";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("hover");
  console.log("enter");
}

function dragLeave(e) {
  console.log("leave");
  e.target.classList.remove("hover");
  e.target.className = "empty";
}

function dragDrop(e) {
  console.log("drop");
  e.target.classList.remove("hover");
  e.target.append(dragEl);
}
