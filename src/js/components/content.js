import {render} from '../functions/render'

const contentTemplate = `
  <section class="content">
    <div class="container">
      <ul class="card-list">
        <li class="card-item">
          <img src="https://mafia.ua/storage/editor/fotos/480x0/karibskaya-kruglaya_1592816076356.jpeg" alt="q">
          <div class="card-content">
            <h2 class="card-title">Карибская</h2>
            <span class="card-weight">550 г</span>
            <p class="card-description">
              Карбонара: ветчина, грудинка, сыр пармезан, шампиньоны, томаты черри и сливки Мясная Гурмео: филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, шампиньоны, лук, петрушка и соус BBQ Четыре сыра: сыр дор блю, сыр чеддер, сыр пармезан, груша, грецкий орех и сливочный соус Сырный бортик: сыр Филадельфия, сыр моцарелла
            </p>
            <strong class="card-price">199 грн</strong>
            <button class="btn btn-buy">В корзину</button>
          </div>
        </li>
        <li class="card-item">
          <img src="https://mafia.ua/storage/editor/fotos/480x0/karibskaya-kruglaya_1592816076356.jpeg" alt="q">
          <div class="card-content">
            <h2 class="card-title">Карибская</h2>
            <span class="card-weight">550 г</span>
            <p class="card-description">
              Карбонара: ветчина, грудинка, сыр пармезан, шампиньоны, томаты черри и сливки Мясная Гурмео: филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, шампиньоны, лук, петрушка и соус BBQ Четыре сыра: сыр дор блю, сыр чеддер, сыр пармезан, груша, грецкий орех и сливочный соус Сырный бортик: сыр Филадельфия, сыр моцарелла
            </p>
            <strong class="card-price">199 грн</strong>
            <button class="btn btn-buy">В корзину</button>
          </div>
        </li>
        <li class="card-item">
          <img src="https://mafia.ua/storage/editor/fotos/480x0/karibskaya-kruglaya_1592816076356.jpeg" alt="q">
          <div class="card-content">
            <h2 class="card-title">Карибская</h2>
            <span class="card-weight">550 г</span>
            <p class="card-description">
              Карбонара: ветчина, грудинка, сыр пармезан, шампиньоны, томаты черри и сливки Мясная Гурмео: филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, шампиньоны, лук, петрушка и соус BBQ Четыре сыра: сыр дор блю, сыр чеддер, сыр пармезан, груша, грецкий орех и сливочный соус Сырный бортик: сыр Филадельфия, сыр моцарелла
            </p>
            <strong class="card-price">199 грн</strong>
            <button class="btn btn-buy">В корзину</button>
          </div>
        </li>
        <li class="card-item">
          <img src="https://mafia.ua/storage/editor/fotos/480x0/karibskaya-kruglaya_1592816076356.jpeg" alt="q">
          <div class="card-content">
            <h2 class="card-title">Карибская</h2>
            <span class="card-weight">550 г</span>
            <p class="card-description">
              Карбонара: ветчина, грудинка, сыр пармезан, шампиньоны, томаты черри и сливки Мясная Гурмео: филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, шампиньоны, лук, петрушка и соус BBQ Четыре сыра: сыр дор блю, сыр чеддер, сыр пармезан, груша, грецкий орех и сливочный соус Сырный бортик: сыр Филадельфия, сыр моцарелла
            </p>
            <strong class="card-price">199 грн</strong>
            <button class="btn btn-buy">В корзину</button>
          </div>
        </li>
        <li class="card-item">
          <img src="https://mafia.ua/storage/editor/fotos/480x0/karibskaya-kruglaya_1592816076356.jpeg" alt="q">
          <div class="card-content">
            <h2 class="card-title">Карибская</h2>
            <span class="card-weight">550 г</span>
            <p class="card-description">
              Карбонара: ветчина, грудинка, сыр пармезан, шампиньоны, томаты черри и сливки Мясная Гурмео: филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, шампиньоны, лук, петрушка и соус BBQ Четыре сыра: сыр дор блю, сыр чеддер, сыр пармезан, груша, грецкий орех и сливочный соус Сырный бортик: сыр Филадельфия, сыр моцарелла
            </p>
            <strong class="card-price">199 грн</strong>
            <button class="btn btn-buy">В корзину</button>
          </div>
        </li>
        <li class="card-item">
          <img src="https://mafia.ua/storage/editor/fotos/480x0/karibskaya-kruglaya_1592816076356.jpeg" alt="q">
          <div class="card-content">
            <h2 class="card-title">Карибская</h2>
            <span class="card-weight">550 г</span>
            <p class="card-description">
              Карбонара: ветчина, грудинка, сыр пармезан, шампиньоны, томаты черри и сливки Мясная Гурмео: филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, шампиньоны, лук, петрушка и соус BBQ Четыре сыра: сыр дор блю, сыр чеддер, сыр пармезан, груша, грецкий орех и сливочный соус Сырный бортик: сыр Филадельфия, сыр моцарелла
            </p>
            <strong class="card-price">199 грн</strong>
            <button class="btn btn-buy">В корзину</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
`

export const content = () => {
  render('main', 'beforeend', contentTemplate)
}