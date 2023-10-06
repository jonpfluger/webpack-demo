import { boxEl, headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from './box'
import { changeHeaderColor } from './header'

headerEl.style.backgroundColor = 'green'
boxEl.style.backgroundColor = 'yellow'
boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)