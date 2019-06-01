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

let counter = 0
let nextCounter = 0.25
setInterval(() => {
  const firstChild = document.querySelector('.counter__item:first-child')
  const lastChild = document.querySelector('.counter__item:last-child')
  counter += 0.25
  nextCounter += 0.25
  firstChild.classList.add('counter__item--translate')
  lastChild.classList.add('counter__item--translate')

  firstChild.textContent = counter
  lastChild.textContent = nextCounter

  setTimeout(() => {
    firstChild.before(lastChild)
    firstChild.classList.remove('counter__item--translate')
    lastChild.classList.remove('counter__item--translate')
  }, 300)
}, 5000)

// const footer = document.querySelector('.footer')
// const lastSection = document.querySelector('#lastSection')
// let scrollValue = 0

// window.addEventListener('scroll', () => {
//   const sectionHeight = lastSection.getBoundingClientRect().height
//   const windowHeight = window.innerHeight
//   console.log(window.scrollY)
//   console.log(lastSection.getBoundingClientRect())

//   if (
//     lastSection.getBoundingClientRect().top <=
//     windowHeight - sectionHeight + 20
//   ) {
//     scrollValue -= 2
//     footer.style.marginTop = `${scrollValue}px`
//   }
// })
