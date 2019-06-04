document.body.classList.remove('noJS')

// Menu
const burgerMenu = document.querySelector('.menu__button')
burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('menuOpen')
})

// Counter
let currentCounter = 0
let nextCounter = 0.25
setInterval(() => {
  const firstChild = document.querySelector('.counter__item:first-child')
  const lastChild = document.querySelector('.counter__item:last-child')
  currentCounter += 0.25
  nextCounter += 0.25
  firstChild.classList.add('counter__item--translate')
  lastChild.classList.add('counter__item--translate')
  lastChild.addEventListener('animationend', () => {
    firstChild.before(lastChild)
    firstChild.classList.remove('counter__item--translate')
    lastChild.classList.remove('counter__item--translate')
  })
  setTimeout(() => {
    firstChild.textContent = currentCounter
    lastChild.textContent = nextCounter
  }, 1000)
}, 5000)

// Datas
const datas = document.querySelectorAll('.data')
const infoButton = document.querySelectorAll('.infos__button')

datas.forEach(data => {
  data.addEventListener('click', e => {
    const stat = e.target.getAttribute('data-stats')
    const active = document.querySelector('.infos__item--active')
    active != null && active.classList.remove('infos__item--active')
    const toDisplay = document.querySelector(`.infos__item[data-info="${stat}"]`)
    toDisplay.classList.add('infos__item--active')
  })
  data.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const stat = e.target.getAttribute('data-stats')
      const active = document.querySelector('.infos__item--active')
      active != null && active.classList.remove('infos__item--active')
      const toDisplay = document.querySelector(`.infos__item[data-info="${stat}"]`)
      toDisplay.classList.add('infos__item--active')
    }
  })
})

document.addEventListener('focusin', e => {
  const isData = e.target.classList[0]
  const active = document.querySelector('.infos__item--active')
  isData !== 'data' && active != null && active.classList.remove('infos__item--active')
})

document.addEventListener('focusout', () => {
  const active = document.querySelector('.infos__item--active')
  setTimeout(() => {
    active != null && active.classList.remove('infos__item--active')
  }, 100)
})

infoButton.forEach(button => {
  button.addEventListener('click', e => {
    e.target.parentElement.classList.remove('infos__item--active')
  })
})

//
const dataOne = document.querySelector('.data[data-stats="2050"')
const dataTwo = document.querySelector('.data[data-stats="year"')
const dataThree = document.querySelector('.data[data-stats="yearBis"')

// window.addEventListener('scroll', () => {
//   const active = document.querySelector('.infos__item--active')
//   const activeHeight = active.getBoundingClientRect().height
//   if (dataOne.getBoundingClientRect().top <= activeHeight && dataOne.getBoundingClientRect().top > 0) {
//     active != null && active.classList.remove('infos__item--active')
//   } else if (dataTwo.getBoundingClientRect().top <= activeHeight && dataTwo.getBoundingClientRect().top > 0) {
//     active != null && active.classList.remove('infos__item--active')
//   } else if (dataThree.getBoundingClientRect().top <= activeHeight && dataThree.getBoundingClientRect().top > 0) {
//     active != null && active.classList.remove('infos__item--active')
//   }
// })

// Animation footer
// const footer = document.querySelector('.footer')
// const lastSection = document.querySelector('#lastSection')
// let scrollValue = 0
// let previousScroll = 0

// window.addEventListener('scroll', () => {
//   const breakpoint =
//     lastSection.getBoundingClientRect().top + lastSection.getBoundingClientRect().height - window.innerHeight
//   const currentScroll = window.pageYOffset

//   if (previousScroll - currentScroll > 0 && breakpoint <= 3) {
//     scrollValue += 4
//   } else {
//     scrollValue -= 4
//   }

//   breakpoint < 20 ? (footer.style.marginTop = `${scrollValue}px`) : (scrollValue = 0)
//   previousScroll = currentScroll

//   console.log(scrollValue)
// })
