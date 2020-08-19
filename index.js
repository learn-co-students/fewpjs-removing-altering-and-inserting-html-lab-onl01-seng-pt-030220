// Write your code here!
let element = document.querySelector("main#main")
element.remove()

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = "victory"

// let newHeader = document.querySelector("h1#victory");
newHeader.innerHTML = 'YOUR-NAME is the champion'