import { headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from "./box"
import { changeHeaderColor } from "./header"

import '../css/styles.css'

boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)