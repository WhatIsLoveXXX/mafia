import {render} from '../functions/render'

const aboutPizzaTemplate = `
  <section class="about-pizza">
    <div class="container">
      <p class="about-pizza-description">
        Любите настоящую классическую итальянскую выпечку с начинкой, которую во всем мире называют Его Вкуснейшее Величество Пицца? Чтобы отведать кусочек свежайшей пиццы с хрустящей корочкой и вкуснейшей начинкой, на тонком или толстом корже, совершенно не обязательно ехать в Италию. Более того, кусочек солнечной и темпераментной Италии навсегда поселится в вашем сердце, если вы решите выбрать, заказать и купить пиццу в Харькове в местной сети ресторанов MAFIA.
      </p>
      <p class="about-pizza-description">
        Попробовать настоящую итальянскую пиццу в Харькове стало еще проще! С сетью ресторанов MAFIA в Харькове сделать это в любое время легко и удобно – здесь предлагается любая свежайшая пицца с доставкой в Харькове. Широкий выбор блюд, представленный в меню, удовлетворит самых требовательных клиентов. Заказывайте популярные классические виды пиццы или фирменные новинки для любителей попробовать что-нибудь особенное. Для крупной компании с хорошим аппетитом, например, рекомендуем нашу гордость – самая большая пицца в Харькове готовится и продается у нас. Все блюда можно посмотреть на сайте mafia.ua, где уже по картинке можно понять состав блюда и узнать цену.
      </p>
      <p class="about-pizza-description">
        Благодаря онлайн-заказу, насладиться пиццей можно, не выходя из дома. Доставка пиццы на дом в Харькове – это реальность, доступная всем. Каждый заказ выполняется быстро и может быть доставлен в любой район города. Заказать пиццу в Харькове онлайн проще простого! Нужно лишь выбрать понравившееся блюдо и оформить заказ. В кратчайшие сроки для подтверждения заказа с вами свяжется наш оператор, и отправится только что приготовленная пицца на дом в Харькове по указанному вами адресу, будь то квартира, офис или знаковая достопримечательность в городе (да-да, курьеру можно назначить встречу в легко узнаваемом месте).
      </p>
      <p class="about-pizza-description">
        Сделать заказ на любое количество порций пиццы можно в любое время дня и ночи, ведь доставка пиццы по Харькову осуществляется практически круглосуточно — когда бы у вас не возникло желание вкусно пообедать или поужинать. Круглосуточная пицца в Харькове от MAFIA – это удобный и продуманный ресторанный сервис, который поможет жителям и гостям города решить вопрос питания и угощения в любое время суток.
      </p>
      <p class="about-pizza-description">
        Вся продукция тщательно упакована и переносится в специальных контейнерах, что позволяет сохранять пиццу горячей. Будьте уверены, что заказ пиццы в Харькове от MAFIA доедет к вам куда угодно.
      </p>
    </div>
  </section>
`

export const aboutPizza = () => {
  render('main', 'beforeend', aboutPizzaTemplate)
}