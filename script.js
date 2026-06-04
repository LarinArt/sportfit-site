var navToggle = document.querySelector('.nav-toggle')
var navList = document.querySelector('.nav-list')

navToggle.addEventListener('click', function () {
  navList.classList.toggle('active')
  navToggle.classList.toggle('active')
})

var navLinks = document.querySelectorAll('a[href^="#"]')

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (event) {
    event.preventDefault()

    var sectionId = this.getAttribute('href')
    var targetSection = document.querySelector(sectionId)

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
      navList.classList.remove('active')
      navToggle.classList.remove('active')
    }
  })
}

var contactForm = document.querySelector('.contact-form')
var formMessage = document.querySelector('.form-message')

contactForm.addEventListener('submit', function (event) {
  event.preventDefault()
  formMessage.textContent = 'Дякуємо! Ваше повідомлення надіслано.'
  contactForm.reset()
})
