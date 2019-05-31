const datas = document.querySelectorAll('.data')
const infoButton = document.querySelectorAll('.infos__button')

datas.forEach(data => {
  data.addEventListener('click', e => {
    const stat = e.target.getAttribute('data-stats')
    const active = document.querySelector('.infos__item--active')
    active != null && active.classList.remove('infos__item--active')
    const toDisplay = document.querySelector(
      `.infos__item[data-info="${stat}"]`
    )
    toDisplay.classList.add('infos__item--active')
  })
})

infoButton.forEach(button => {
  button.addEventListener('click', e => {
    e.target.parentElement.classList.remove('infos__item--active')
  })
})

// const dataOne = document.querySelector('.data[data-stats="2050"')
// const dataTwo = document.querySelector('.data[data-stats="year"')
// const dataThree = document.querySelector('.data[data-stats="yearBis"')

// window.addEventListener('scroll', () => {
//   const active = document.querySelector('.infos__item--active')
//   const activeHeight = active.getBoundingClientRect().height
//   console.log(activeHeight)
//   if (dataOne.getBoundingClientRect().top <= activeHeight) {
//     active != null && active.classList.remove('infos__item--active')
//     // console.log(data.getBoundingClientRect())
//   }
// })

const counterFirst = document.querySelector('.counter__item--first')
const counterSecond = document.querySelector('.counter__item--second')
let counter = 0
let nextCounter = 0.25

setInterval(() => {
  nextCounter += 0.25
  counter += 0.25
  counterFirst.textContent = nextCounter
  counterSecond.textContent = counter
  counterFirst.classList.add('counter__item--translate')
  counterSecond.classList.add('counter__item--translate')
  setTimeout(() => {
    counterFirst.classList.remove('counter__item--translate')
    counterSecond.classList.remove('counter__item--translate')
  }, 250)
  counterSecond.before(counterFirst)
}, 5000)
