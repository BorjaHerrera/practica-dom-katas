/*


1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

// 1.1
const button = document.createElement('button')
button.id = 'btnToClic'
button.textContent = 'Estoy aquí'

button.addEventListener('click', (e) => console.log(e))
document.body.appendChild(button)

// 1.2
const input = document.querySelector('.focus')
input.addEventListener('focus', (e) => console.log(e.target.value))

// 1.3
const newInput = document.querySelector('.value')
newInput.addEventListener('input', (e) => console.log(e.target.value))
