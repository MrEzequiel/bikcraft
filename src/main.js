const openAndCloseMenu = e => {
  const menu = document.querySelector('.menu-list')

  menu.classList.toggle('show')
}

document.querySelector('.menu span').addEventListener('click', openAndCloseMenu)
document.querySelector('.close').addEventListener('click', openAndCloseMenu)
