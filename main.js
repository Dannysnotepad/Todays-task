/*
*Today's task(todolist)
*from
*Dannysnotepad
*/


const input = document.getElementById('todo')
const button = document.getElementById('submit')
const ulEl = document.querySelector('ul')
let todoArray = []
let todo = ''
let id = 0

function createTodo() {
  
  if (input.value == ''){
    return false
  }
  
  let value = input.value
  todoArray.push(value)
  for (let i = 0; i < todoArray.length;i++){
    todo = `
    <li> ${todoArray[i]} </li>
    <hr>
    `
    input.value = ''
  }
  
  ulEl.innerHTML += todo
  console.log(todoArray)
  
}

button.addEventListener('click', () => {
  createTodo()
})
