let burger = document.querySelector('.upperMenu__burger')

burger.addEventListener('mouseover', () => {
  burger.setAttribute('style', 'border: 2px solid #B8FFEC;')
  console.log('works fine mate')
})
burger.addEventListener('mouseleave', () => {
  burger.setAttribute('style', 'border: none;')
  console.log('works fine mate')
})
