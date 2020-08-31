// Write your code here! 
//document.querySelector('main#main').remove();
// const newHeader = document.createElement('newHeader')
// let victory = document.createElement('h1');
// newHeader.appendChild(victory);
// body.appendChild(newHeader);
main.remove()
let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = `#{Christian} is the champion`