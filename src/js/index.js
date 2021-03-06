import * as $ from 'jquery'
import '../scss/style.scss'
import '../scss/style1.3.css'
import '../scss/desktop.css'
import '../scss/mobile.css'
import '../scss/style1.4.css'
import '../scss/style1.5.css'
import '../scss/tablets.css'

console.log('Works!')

//1.4
{
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
      block4.setAttribute(
        'style',
        'visibility:visible; display:block; height:100vh;'
      )
      for (element of rest) {
        element.setAttribute('style', 'visibility:hidden; ')
      }
    })
  }

  let closeBtn = document.querySelector('.upperMenu1-4__burger')

  closeBtn.addEventListener('mouseover', () => {
    closeBtn.setAttribute('style', 'border: 2px solid #B8FFEC;')
  })
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.setAttribute('style', 'border: none;')
  })

  closeBtn.addEventListener('click', () => {
    block4.setAttribute('style', 'visibility:hidden; display:none;')
    for (element of rest) {
      element.setAttribute('style', 'visibility:visible; ')
    }
  })
}

//1.5
{
  const swiper = new Swiper('.swiper', {
    // Optional parameters

    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  })

  let button = document.querySelector('button.btn')
  //.labels__lenovo2, .labels__samsung2, .labels__apple2
  let lenovo2 = document.querySelector('img.labels__lenovo2')
  let apple2 = document.querySelector('img.labels__apple2')
  let samsung2 = document.querySelector('img.labels__samsung2')
  let expand = document.querySelector('img.btn__expand')
  let text = document.querySelector('span.btn__text')

  //setting variables for tablet version
  let viewSonic = document.querySelector('img.labels__view-sonic')
  let sony = document.querySelector('img.labels__sony')

  if ($(window).width() > 767 && $(window).width() <= 1199) {
    button.addEventListener('click', () => {
      if (text.textContent == '????????????') {
        lenovo2.setAttribute('style', 'visibility:hidden; display:none;')
        apple2.setAttribute('style', 'visibility:hidden; display:none;')
        samsung2.setAttribute('style', 'visibility:hidden; display:none;')
        viewSonic.setAttribute('style', 'visibility:hidden; display:none;')
        sony.setAttribute('style', 'visibility:hidden; display:none;')
        expand.setAttribute('style', 'transform:rotate(180deg);')
        text.textContent = '???????????????? ??????'
      } else {
        lenovo2.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        apple2.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        samsung2.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        viewSonic.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        sony.setAttribute('style', 'visibility:visible; display:inline-block;')
        expand.setAttribute('style', 'transform:rotate(180deg);')
        text.textContent = '????????????'
      }
    })
  } else if ($(window).width() >= 1200) {
    button.addEventListener('click', () => {
      if (text.textContent == '????????????') {
        lenovo2.setAttribute('style', 'visibility:hidden; display:none;')
        apple2.setAttribute('style', 'visibility:hidden; display:none;')
        samsung2.setAttribute('style', 'visibility:hidden; display:none;')
        expand.setAttribute('style', 'transform:rotate(360deg);')
        text.textContent = '???????????????? ??????'
      } else {
        lenovo2.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        apple2.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        samsung2.setAttribute(
          'style',
          'visibility:visible; display:inline-block;'
        )
        expand.setAttribute('style', 'transform:rotate(180deg);')
        text.textContent = '????????????'
      }
    })
  }
}
