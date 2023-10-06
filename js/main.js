const boxBtn = document.getElementById('boxBtn')
const headerBtn = document.getElementById('headerBtn')
const boxEl = document.getElementById('box')
const headerEl = document.getElementById('header')

function changeBoxColor() {
  const currBgColor = boxEl.style.backgroundColor
  if (currBgColor === 'yellow') {
    boxEl.style.backgroundColor = 'blue'
  } else {
    boxEl.style.backgroundColor = 'yellow'
  }

}

function changeHeaderColor() {
  const currColor = headerEl.style.backgroundColor
  if (currColor === 'green') {
    headerEl.style.backgroundColor = 'red'
  } else {
    headerEl.style.backgroundColor = 'green'
  }
}

headerEl.style.backgroundColor = 'green'
boxEl.style.backgroundColor = 'yellow'
boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)