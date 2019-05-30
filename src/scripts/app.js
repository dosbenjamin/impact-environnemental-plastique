const datas = document.querySelectorAll('.data')

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

const infoButton = document.querySelectorAll('.infos__button')
infoButton.forEach(button => {
  button.addEventListener('click', e => {
    e.target.parentElement.classList.remove('infos__item--active')
  })
})
