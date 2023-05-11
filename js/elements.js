const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const forestSound = document.querySelector('.forest')
const rainSound = document.querySelector('.rain')
const coffeeSound = document.querySelector('.coffee-shop')
const fireplaceSound = document.querySelector('.fireplace')
let volumeSliderFireplace = document.querySelector('#volume-control-fire') 
let volumeSliderForest = document.querySelector('#volume-control-f')
let volumeSliderRain = document.querySelector('#volume-control-r')
let volumeSliderCoffee = document.querySelector('#volume-control-c')
const lightmode = document.querySelector('.light-mode')
const darkmode = document.querySelector('.dark-mode')

const iconStyleL = window.getComputedStyle(lightmode)
const iconStyleD = window.getComputedStyle(darkmode)


export {
  minutesDisplay,
  secondsDisplay,
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
  lightmode,
  darkmode,
  iconStyleL,
  iconStyleD 
}