const datas = document.querySelectorAll('.data')

datas.forEach(data => {
  data.addEventListener('click', e => {
    const stat = e.target.getAttribute('data-stats')
    const toDisplay = document.querySelector(
      `.infos__item[data-info="${stat}"]`
    )
    toDisplay.style.display = 'block'
  })
})
