import {
  forestSound,
  rainSound,  
  coffeeSound,
  fireplaceSound,
  volumeSliderFireplace,
  volumeSliderForest,
  volumeSliderCoffee,
  volumeSliderRain,
  iconStyleL,
  iconStyleD
} from "./elements.js"

export default function() {
  
  const bgForest = new Audio('./sounds/Floresta.wav')
  const bgRain = new Audio('./sounds/Chuva.wav')
  let bgFirePlace = new Audio('./sounds/Lareira.wav')
  const bgCoffee = new Audio('./sounds/Cafeteria.wav')

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  
  bgForest.loop = true
  bgCoffee.loop = true
  bgFirePlace.loop = true
  bgRain.loop = true

  function pressForest() {
    bgForest.play()
    bgRain.pause()
    bgFirePlace.pause()
    bgCoffee.pause()
  
    if (iconStyleL.display !== 'none') {
    forestSound.classList.add('sound-on')
    rainSound.classList.remove('sound-on')
    coffeeSound.classList.remove('sound-on')
    fireplaceSound.classList.remove('sound-on')
    } else {
      forestSound.classList.add('darkmode_on_sound')
      rainSound.classList.remove('darkmode_on_sound')
      coffeeSound.classList.remove('darkmode_on_sound')
      fireplaceSound.classList.remove('darkmode_on_sound')
    }
  }

  
  function pressRain() {
    bgRain.play()
    bgForest.pause()
    bgFirePlace.pause()
    bgCoffee.pause()

    if (iconStyleL.display !== 'none') {
      forestSound.classList.remove('sound-on')
      rainSound.classList.add('sound-on')
      coffeeSound.classList.remove('sound-on')
      fireplaceSound.classList.remove('sound-on')
      
    } else {
      forestSound.classList.remove('darkmode_on_sound')
      rainSound.classList.add('darkmode_on_sound')
      coffeeSound.classList.remove('darkmode_on_sound')
      fireplaceSound.classList.remove('darkmode_on_sound') 
    }
    
  }
  
  function pressCoffee() {
    bgRain.pause()
    bgForest.pause()
    bgFirePlace.pause()
    bgCoffee.play()
    
    if (iconStyleL.display !== 'none') {
      forestSound.classList.remove('sound-on')
      rainSound.classList.remove('sound-on')
      coffeeSound.classList.add('sound-on')
      fireplaceSound.classList.remove('sound-on')
    } else {
      forestSound.classList.remove('darkmode_on_sound')
      rainSound.classList.remove('darkmode_on_sound')
      coffeeSound.classList.add('darkmode_on_sound')
      fireplaceSound.classList.remove('darkmode_on_sound')
    }
  }
  
  function pressFirePlace() {
    bgRain.pause()
    bgForest.pause()
    bgFirePlace.play()
    bgCoffee.pause()
    
    if (iconStyleL.display !== 'none') {
      forestSound.classList.remove('sound-on')
      rainSound.classList.remove('sound-on')
      coffeeSound.classList.remove('sound-on')
      fireplaceSound.classList.add('sound-on')
    } else {
      forestSound.classList.remove('darkmode_on_sound')
      rainSound.classList.remove('darkmode_on_sound')
      coffeeSound.classList.remove('darkmode_on_sound')
      fireplaceSound.classList.add('darkmode_on_sound')
    }
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }
  
  function changeVolume() {
    bgFirePlace.volume = volumeSliderFireplace.value / 100;
    bgRain.volume = volumeSliderRain.value / 100;
    bgCoffee.volume = volumeSliderCoffee.value / 100;
    bgForest.volume = volumeSliderForest.value / 100;
  }

  function resetsounds() {
    bgRain.pause()
    bgForest.pause()
    bgFirePlace.pause()
    bgCoffee.pause()

    forestSound.classList.remove('sound-on')
    rainSound.classList.remove('sound-on')
    coffeeSound.classList.remove('sound-on')
    fireplaceSound.classList.remove('sound-on')
    
    forestSound.classList.remove('darkmode_on_sound')
    rainSound.classList.remove('darkmode_on_sound')
    coffeeSound.classList.remove('darkmode_on_sound')
    fireplaceSound.classList.remove('darkmode_on_sound')
  }
  
  return {
    pressForest,
    timeEnd,
    bgForest,
    pressRain,
    bgRain,
    pressCoffee,
    bgCoffee,
    pressFirePlace,
    bgFirePlace,
    changeVolume,
    resetsounds
  }
  
}