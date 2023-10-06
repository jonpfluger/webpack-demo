import { boxEl, headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from './box'
import { changeHeaderColor } from './header'

boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)