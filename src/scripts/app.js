'use strict'

document.documentElement.classList.remove('noJS')

const burgerMenu = document.querySelector('.menu__button')
burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('menuOpen')
})

const dataPage = () => {
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
  // Data
  let oldParent, parent, active
  const allData = document.querySelectorAll('.data')
  const infoFadeOut = item => {
    item.classList.remove('infos__item--noTransition')
    item.classList.add('infos__item--leaving')
    setTimeout(() => {
      item.classList.remove('infos__item--leaving')
      item.classList.remove('infos__item--active')
      document.activeElement.blur()
    }, 300)
    active = null
  }
  const displayInfo = e => {
    const stat = e.target.getAttribute('data-stats')
    const toDisplay = document.querySelector(`.infos__item[data-info="${stat}"]`)
    active && active.classList.remove('infos__item--active')
    active && active.classList.add('infos__item--noTransition')
    toDisplay.classList.add('infos__item--active')
    active = document.querySelector('.infos__item--active')
  }
  allData.forEach(data => {
    data.addEventListener('click', displayInfo)
    data.addEventListener('keydown', e => {
      e.key === 'Enter' && displayInfo(e)
    })
    data.addEventListener('mouseover', e => {
      e.target.classList.add('data--hover')
    })
    data.addEventListener('mouseout', e => {
      e.target.classList.remove('data--hover')
    })
  })
  document.addEventListener('focusin', e => {
    const removeAndFocus = () => {
      infoFadeOut(active)
      setTimeout(() => {
        e.target.focus()
      }, 300)
    }
    parent = e.target
    while (parent.parentElement.classList[0] === 'data') {
      parent = parent.parentElement
    }
    const parentStat = parent.getAttribute('data-stats')
    if (oldParent !== undefined && parent.classList[0] === 'data' && oldParent.getAttribute('data-stats') !== parentStat && active) removeAndFocus()
    else if (e.target.classList[0] !== 'data' && active) removeAndFocus()
    oldParent = parent
  })
  document.addEventListener('click', e => {
    e.target.classList[0] !== 'data' && active && infoFadeOut(active)
  })
  window.addEventListener('scroll', () => {
    if (parent !== undefined && active) {
      const dataHeight = parent.getBoundingClientRect().height
      const dataOffsetTop = parent.getBoundingClientRect().top
      const stats = document.activeElement.getAttribute('data-stats')
      const toRemove = document.querySelector(`.infos__item--active[data-info="${stats}"]`)
      dataOffsetTop <= dataHeight / -4 && infoFadeOut(toRemove)
      dataOffsetTop + dataHeight >= dataHeight / 4 + window.innerHeight && infoFadeOut(toRemove)
    }
  })
}

document.querySelector('body[data-id="data"]') && dataPage()
