const openAndCloseMenu = e => {
  const menu = document.querySelector('.menu-list')

  menu.classList.toggle('show')
}

document.querySelector('.menu span').addEventListener('click', openAndCloseMenu)
document.querySelector('.close').addEventListener('click', openAndCloseMenu)

if (document.querySelector('title').textContent === 'Bikcraft - Portfólio') {
  new SimpleSlide({
    slide: 'quote',
    auto: true,
    time: 5000,
    pauseOnHover: true
  })

  new SimpleSlide({
    slide: 'portfolio',
    auto: true,
    time: 5000,
    nav: true,
    pauseOnHover: true
  })
}

new SimpleAnime()
