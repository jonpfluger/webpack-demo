import { headerEl } from "./elements"

export function changeHeaderColor() {
  const currColor = headerEl.style.backgroundColor
  if (currColor === 'green') {
    headerEl.style.backgroundColor = 'red'
  } else {
    headerEl.style.backgroundColor = 'green'
  }
}

headerEl.style.backgroundColor = 'green'