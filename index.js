const lists = document.querySelectorAll(".list")
const listItem = document.querySelectorAll(".list-item ")

for (let i = 0; i < listItem.length; i++) {
  const lItem = listItem[i]

  lItem.addEventListener("dragstart", () => {
    console.log("dragstart")
    setTimeout(() => {
      lItem.style.display = "none"
    }, 0)
  })

  lItem.addEventListener("dragend", () => {
    console.log("dragend")

    setTimeout(() => {
      lItem.style.display = "block"
    }, 0)
  })

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j]

    list.addEventListener("dragover", (e) => {
      e.preventDefault()
    })

    list.addEventListener("dragenter", (e) => {
      e.preventDefault()
    })

    list.addEventListener("dragover", (e) => {
      e.preventDefault()
    })

    list.addEventListener("drop", (e) => {
      console.log("dropped", list, e)
      list.append(lItem)
      //   lItem.style.display = "block"
    })
  }
}
