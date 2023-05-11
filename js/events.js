import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  forestSound,
  rainSound,  
  coffeeSound,
  fireplaceSound,
  volumeSliderForest,
  volumeSliderRain,
  volumeSliderCoffee,
  volumeSliderFireplace,
  darkmode,
  lightmode,
  iconStyleL,
  iconStyleD
} from "./elements.js"

export default function({controls,timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    controls.play()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
  })

  buttonPlus.addEventListener('click', function() {
    let newMinutes = timer.plus()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonMinus.addEventListener('click', function() {
    let newMinutes = timer.minus()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  forestSound.addEventListener('click', function() {
    sound.pressForest()
  })

  rainSound.addEventListener('click', function() {  
    sound.pressRain()

  })

  coffeeSound.addEventListener('click', function() {
    sound.pressCoffee()
  })

  fireplaceSound.addEventListener('click', function() {
    sound.pressFirePlace()
  })

  volumeSliderForest.addEventListener('change', function() {
    sound.changeVolume()
  })

  volumeSliderRain.addEventListener('change', function() {
    sound.changeVolume()
  })

  volumeSliderCoffee.addEventListener('change', function() {
    sound.changeVolume()
  })

  volumeSliderFireplace.addEventListener('change', function() {
    sound.changeVolume()
  })

  darkmode.addEventListener('click', function() {
    controls.darkmodeOff()

    let body = document.querySelector('body')
    let timer_icons = document.querySelector('.timer-icons')
    let sliders = document.querySelectorAll(".slider")

    body.classList.remove('darkmode_On')
    timer_icons.classList.remove('darkmode_on_timer_controls')

    forestSound.classList.remove('darkmode_off_sound')
    rainSound.classList.remove('darkmode_off_sound')
    coffeeSound.classList.remove('darkmode_off_sound')
    fireplaceSound.classList.remove('darkmode_off_sound')

    for (let elements of sliders) {
      elements.classList.remove('darkmode_slider');
    }

    forestSound.classList.add('sound-off')
    rainSound.classList.add('sound-off')
    coffeeSound.classList.add('sound-off')
    fireplaceSound.classList.add('sound-off')

    sound.resetsounds()
  })

  lightmode.addEventListener('click', function() {
    controls.darkmodeOn()

    let body = document.querySelector('body')
    let timer_icons = document.querySelector('.timer-icons')
    let sliders = document.querySelectorAll(".slider")

    body.classList.add('darkmode_On')
    timer_icons.classList.add('darkmode_on_timer_controls')

    forestSound.classList.add('darkmode_off_sound')
    rainSound.classList.add('darkmode_off_sound')
    coffeeSound.classList.add('darkmode_off_sound')
    fireplaceSound.classList.add('darkmode_off_sound')
    
    for (let elements of sliders) {
      elements.classList.add('darkmode_slider');
    }

    forestSound.classList.remove('sound-off')
    rainSound.classList.remove('sound-off')
    coffeeSound.classList.remove('sound-off')
    fireplaceSound.classList.remove('sound-off')

    sound.resetsounds()
  })
}
