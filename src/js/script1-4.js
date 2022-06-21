let burger = document.querySelector('.upperMenu__burger')

burger.addEventListener('mouseover', () => {
  burger.setAttribute('style', 'border: 2px solid #B8FFEC;')
})
burger.addEventListener('mouseleave', () => {
  burger.setAttribute('style', 'border: none;')
})

let block4 = document.querySelector('.wrapper1-4')

let rest = document.querySelectorAll(
  '.upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn'
)
let body = document.body
let html = document.documentElement

if ($(window).width() < 1199) {
  burger.addEventListener('click', () => {
    block4.setAttribute('style', 'visibility:visible; display:block;')
    for (element of rest) {
      element.setAttribute('style', 'visibility:hidden; display:none;')
    }
    body.setAttribute(
      'style',
      'display:flex; align-items:stretch; margin:0; height:100%;'
    )
    html.setAttribute('style', 'height:100%;')
  })
}
