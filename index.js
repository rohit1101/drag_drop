const lists = document.querySelectorAll(".list")
const listItem = document.querySelectorAll(".list-item ")

let dragItem

for (let i = 0; i < listItem.length; i++) {
  const item = listItem[i]

  item.addEventListener("dragstart", () => {
    dragItem = item
    setTimeout(() => {
      dragItem.style.display = "none"
    }, 0)
  })

  item.addEventListener("dragend", () => {
    setTimeout(() => {
      dragItem.style.display = "block"
    }, 0)
  })
}

for (let j = 0; j < lists.length; j++) {
  let list = lists[j]

  list.addEventListener("dragover", (e) => {
    e.preventDefault()
    list.style.background = `rgba(0, 0, 0, .5)`
  })

  list.addEventListener("dragleave", (e) => {
    e.preventDefault()
    list.style.background = ""
  })

  list.addEventListener("drop", function (e) {
    list.append(dragItem)
    list.style.background = "rgba(0,0,0,0.1)"
  })
}
