// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')

for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}
document.body.appendChild(ul)

// 1.2
const removeMe = document.querySelector('.fn-remove-me')
removeMe.remove()

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const secondUl = document.createElement('ul')

for (const car of cars) {
  const secondLi = document.createElement('li')
  secondLi.textContent = car
  secondLi.setAttribute('data-function', 'printHere')
  secondUl.appendChild(secondLi)
}
document.body.appendChild(secondUl)

// 1.4
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countries2) {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')

  h4.textContent = country.title
  img.src = country.imgUrl

  document.body.appendChild(div)
  div.appendChild(h4)
  div.appendChild(img)
}

// 1.5
const button = document.createElement('button')
button.textContent = 'Eliminar el último'

const deleteButton = () => {
  const eachCountry = document.querySelectorAll('div')
  eachCountry[eachCountry.length - 1].remove()
}

button.addEventListener('click', deleteButton)
document.body.appendChild(button)

// 1.6
const allDivs = document.querySelectorAll('div')

for (const element of allDivs) {
  const buttonDiv = document.createElement('button')
  buttonDiv.textContent = 'Elimina solo este'

  buttonDiv.addEventListener('click', () => element.remove())

  element.appendChild(buttonDiv)

  console.log(buttonDiv)
}
