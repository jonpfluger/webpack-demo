import { boxEl } from "./elements"
import blueRobotImage from '../images/blue-robot.png'
import yellowRobotImage from '../images/yellow-robot.png'

export function changeBoxColor() {
  if (boxEl.dataset.color === 'yellow') {
    boxEl.src = blueRobotImage
    boxEl.dataset.color = 'blue'
  } else {
    boxEl.src = yellowRobotImage
    boxEl.dataset.color = 'yellow'
  }
}

boxEl.dataset.color = 'yellow'
boxEl.src = yellowRobotImage