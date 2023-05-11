export default function Controls({
  buttonPlay,
  buttonStop,
  darkmode,
  lightmode,
  
}) {

  function play() {
    buttonPlay.disabled = true
    buttonStop.disabled = false
  }
  
  function reset() {
    buttonStop.disabled = true
    buttonPlay.disabled = false
  }

  function darkmodeOn() {
    darkmode.classList.remove('hide')
    lightmode.classList.add('hide')

  }

  function darkmodeOff() {
    darkmode.classList.add('hide')
    lightmode.classList.remove('hide')
  }


  return {
    reset,
    play,
    darkmodeOn,
    darkmodeOff
  }
}