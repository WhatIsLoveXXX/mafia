import {render} from '../functions/render'

const subHeaderTemplate = `
  <div class="sub-header">
    <div class="container">
      <div class="sub-header-inner">
        <h1 class="sub-header-title">Пицца</h1>
        <nav class="sub-header-nav">
          <ul class="sub-header-list">
            <li class="sub-header-item active"><a href="#" class="sub-header-link">Все</a></li>
            <li class="sub-header-item"><a href="#" class="sub-header-link">Метровая пицца</a></li>
            <li class="sub-header-item"><a href="#" class="sub-header-link">Круглая пицца</a></li>
          </ul>
        </nav>
        <div class="sort">
          Сортировать
        </div>
      </div>
    </div>
  </div>
`

export const subHeader = () => {
  render('app','beforeend', subHeaderTemplate)
}