let removeElement = document.querySelector("main#main")
  removeElement.remove()

let newHeader = document.createElement('H1')
  document.body.appendChild(newHeader)
  newHeader.setAttribute("id", "victory") 
  newHeader.innerHTML = "This person is the champion"
