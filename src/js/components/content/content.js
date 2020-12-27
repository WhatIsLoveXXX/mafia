import {render} from '../../functions/render'
import { card } from './card/card'
import {store} from '../../store'

const contentTemplate = `
  <section class="content">
    <div class="container">
      <ul class="card-list" id="card-list"></ul>
    </div>
  </section>
`

export const content = () => {
  render('main', 'beforeend', contentTemplate)
  store.pizzaData.map(pizza => card(pizza))
}