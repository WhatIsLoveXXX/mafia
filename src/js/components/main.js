import {render} from '../functions/render'
import {content} from '../components/content'
import {aboutPizza} from '../components/aboutPizza'

const mainTemplate = `
<main class="main" id="main"></main>
`

export const main = () => {
  render('app', 'beforeend', mainTemplate)
  content()
  aboutPizza()
}