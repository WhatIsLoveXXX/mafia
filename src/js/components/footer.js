import {render} from '../functions/render'

const footerTemplate = `
  <footer class="footer">
    <div class="footer-logo">
        <img src="https://mafia.ua/img/logo-white-mafia.svg" alt="q">
        <span class="footer-copy">© 2002 - 2020 MAFIA
          <span>Все права защищены.</span>
        </span>
      </div>
      <nav class="footer-nav">
        <ul class="footer-menu">
          <li class="menu-item"><a href="#" class="menu-link">Меню доставки</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Рестораны Харькова</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Меню ресторана</a></li>
        </ul>
        <ul class="footer-menu">
          <li class="menu-item"><a href="#" class="menu-link">Новости</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Бонусная программа</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Организация праздников</a></li>
        </ul>
        <ul class="footer-menu">
          <li class="menu-item"><a href="#" class="menu-link">Франчайзи</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Вакансии</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Договор публичной оферты</a></li>
        </ul>
      </nav>
      <div class="footer-social-icons">
        <span class="material-icons social">
          facebook
          </span>
          <span class="material-icons social">
            offline_bolt
            </span>
    </div>
  </footer>
`

export const footer = () => {
  render('app', 'beforeend', footerTemplate)
}