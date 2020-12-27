import { render } from "../../../functions/render"

const cardTemplate = ({imgUrl,title,weight,description,price}) => {
  return (`
    <li class="card-item">
      <img src="${imgUrl}" alt="q">
      <div class="card-content">
        <h2 class="card-title">${title}</h2>
        <span class="card-weight">${weight}</span>
        <p class="card-description">
        ${description}
        </p>
        <strong class="card-price">${price}</strong>
        <button class="btn btn-buy">В корзину</button>
      </div>
    </li>
  `)
}

export const card = (pizza) => {
  render('card-list', 'beforeend', cardTemplate(pizza))
}