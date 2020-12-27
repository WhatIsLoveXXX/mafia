import {render} from '../functions/render'

const headerTemplate = `
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-list-item"><a href="#" class="nav-list-link">Харьков</a></li>
            <li class="nav-list-item"><a href="#" class="nav-list-link">Рестораны</a></li>
            <li class="nav-list-item"><a href="#" class="nav-list-link">Контакты</a></li>
          </ul>
        </nav>
        <div class="logo">
          <img src="https://mafia.ua/img/logo-white-mafia.svg" alt="mafia">
        </div>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-list-item"><a href="#" class="nav-list-link">Вход</a></li>
            <li class="nav-list-item shopping-cart">
              <span class="material-icons">shopping_basket</span>
              <a href="#" class="nav-list-link">Корзина</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
`

export const header = () => {
  render('app', 'beforeend', headerTemplate)
}
