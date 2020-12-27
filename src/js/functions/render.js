import {getElement} from './getElement'

export const render = (id, position = 'beforeend', html) => {
  const parent = getElement(id)
  parent.insertAdjacentHTML(position, html)
}