// 1.1
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 1.2
const divP = document.createElement('div')
const p = document.createElement('p')

divP.appendChild(p)
document.body.appendChild(divP)

// 1.3
const divLoop = document.createElement('div')

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divLoop.appendChild(p)
}
document.body.appendChild(divLoop)

// 1.4
const dinamicP = document.createElement('p')

dinamicP.textContent = '¡Soy dinámico!'
document.body.appendChild(dinamicP)

// 1.5
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}

// 1.7
let nodosToRemove = document.querySelectorAll('.fn-remove-me')

for (const nodo of nodosToRemove) {
  nodo.remove()
}

// 1.8
const divsTogether = document.querySelectorAll('div')
const pBetween = document.createElement('p')
pBetween.textContent = '¡Voy en medio!'

document.body.insertBefore(pBetween, divsTogether[1])

// 1.9
const divsDentro = document.querySelectorAll('.fn-insert-here')

for (const div of divsDentro) {
  const divP = document.createElement('p')
  divP.textContent = '¡Voy dentro!'
  div.appendChild(divP)
}
