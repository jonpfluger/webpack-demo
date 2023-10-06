import { boxEl } from "./elements"

export function changeBoxColor() {
  const currBgColor = boxEl.style.backgroundColor
  if (currBgColor === 'yellow') {
    boxEl.style.backgroundColor = 'blue'
  } else {
    boxEl.style.backgroundColor = 'yellow'
  }
}