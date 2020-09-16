<template>
  <div class="catalog">
    <div class="catalog__top">
      <a href="#modal-filter" class="catalog__info js-popup">
        <img src="@/assets/img/tabak_3.png" alt="img" />
      </a>

      <form
        id="modal-filter"
        action="#"
        method="get"
        class="modals modals-filter mfp-hide zoom-anim-dialog"
      >
        <div class="modals-filter__head">
          <div class="order__title">Выберите 1 или несколько брендов</div>
          <div class="modals-filter__nav">
            <div class="modals-filter__items">
              <a href="#" class="modals-filter__link">Adalya</a>
              <a href="#" class="modals-filter__link">DARKSIDE</a>
            </div>
            <button class="modals-filter__reset" type="reset">
              Очистить все
            </button>
          </div>
        </div>

        <div class="modals-filter__list">
          <label v-for="i in 3" :key="i" class="modals-filter__label">
            <input type="checkbox" />
            <span>Adalya {{ i }}</span>
          </label>
        </div>
        <button class="modals-filter__submit" type="button">ПРИМЕНИТЬ</button>
      </form>

      <div class="catalog__wr">
        <div class="catalog__sort">
          <label class="catalog__slide">
            <input type="checkbox" />
            <span></span>
          </label>

          <div class="catalog__selected">50гр</div>
          <div class="catalog__selected">100гр</div>
          <div class="catalog__selected">250гр</div>
          <div class="catalog__selected">Base</div>
          <div class="catalog__selected">Core</div>
          <div class="catalog__selected">Rare</div>
        </div>
        <div class="catalog__filter">
          <label class="catalog__label">
            <select
              class="catalog__label_item select2-multiple"
              data-placeholder="Базовый вкус"
              name=""
              multiple
            >
              <option value="1">Базовый вкус 1</option>
              <option value="2">Базовый вкус 2</option>
              <option value="3">Базовый вкус 3</option>
            </select>
          </label>
          <label class="catalog__label">
            <select
              class="catalog__label_item select2-multiple"
              data-placeholder="Оттенок вкуса"
              name="name_2"
              multiple
            >
              <option value="1">Оттенок вкуса 1</option>
              <option value="2">Оттенок вкуса 2</option>
              <option value="3">Оттенок вкуса 3</option>
            </select>
          </label>
          <label class="catalog__label">
            <select
              class="catalog__label_item select2-multiple"
              data-placeholder="Ноты вкуса"
              name="name_2"
              multiple
            >
              <option value="1">Ноты вкуса</option>
              <option value="2">Ноты вкуса</option>
              <option value="3">Ноты вкуса</option>
            </select>
          </label>
          <label class="catalog__label">
            <select
              class="catalog__label_item select2-multiple"
              data-placeholder="Тип вкуса"
              name="name_2"
              multiple
            >
              <option value="1">Тип вкуса</option>
              <option value="2">Тип вкуса</option>
              <option value="3">Тип вкуса</option>
            </select>
          </label>
        </div>
      </div>

      <div class="catalog__lang">
        <button class="catalog__lang_btn active" type="button">En</button>
        <button class="catalog__lang_btn" type="button">Ru</button>
      </div>
      <button class="catalog__toggle" type="button">
        <svg class="icon">
          <use xlink:href="#filter" />
        </svg>
      </button>

      <div class="catalog__action">
        <UserNav />
      </div>
    </div>

    <div class="catalog__main">
      <ul class="catalog__aside">
        <li>
          <a href="#" class="catalog__letter active">Aa</a>
        </li>
        <li>
          <a href="#" class="catalog__letter active">Bb</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Cc</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Dd</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Ee</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Ff</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Gg</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Hh</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Ii</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Jj</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Kk</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Ll</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Mm</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Nn</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Oo</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Pp</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Qq</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Rr</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Ss</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Tt</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Uu</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Vv</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Ww</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Xx</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Yy</a>
        </li>
        <li>
          <a href="#" class="catalog__letter">Zz</a>
        </li>
      </ul>

      <div class="catalog__middle">
        <div class="catalog__list">
          <div v-for="i in 3" :key="i" class="catalog__item">
            <div class="catalog__title">Aa {{ i }}</div>

            <div v-for="y in 3" :key="y" class="catalog__goods">
              <div class="catalog__name">
                <span
                  >Admiral Acbar Acbar Acbar Acbar Acbar Cereal {{ y }}</span
                >
              </div>

              <div class="catalog__select">
                <label class="catalog__select_item">
                  <input type="radio" :name="'catalog_' + y + '_' + i" />
                  <span>50гр</span>
                </label>
                <label class="catalog__select_item">
                  <input
                    type="radio"
                    :name="'catalog_' + y + '_' + i"
                    checked
                  />
                  <span>100гр</span>
                </label>
                <label class="catalog__select_item">
                  <input type="radio" :name="'catalog_' + y + '_' + i" />
                  <span>250гр</span>
                </label>
              </div>

              <div class="catalog__select">
                <label class="catalog__select_item">
                  <input type="radio" :name="'catalog_2' + y + '_' + i" />
                  <span>Base</span>
                </label>
                <label class="catalog__select_item">
                  <input
                    type="radio"
                    :name="'catalog_2' + y + '_' + i"
                    checked
                  />
                  <span>Core</span>
                </label>
                <label class="catalog__select_item">
                  <input type="radio" :name="'catalog_2' + y + '_' + i" />
                  <span>Rare</span>
                </label>
              </div>

              <div class="catalog__count count">
                <button class="count__minus" type="button">
                  <svg class="icon">
                    <use xlink:href="#minus" />
                  </svg>
                </button>
                <label class="count__label">
                  <input type="text" class="count__input" value="25" readonly />
                </label>
                <button class="count__plus" type="button">
                  <svg class="icon">
                    <use xlink:href="#plus" />
                  </svg>
                </button>
              </div>
              <div class="catalog__price">13 875 ₽</div>
            </div>
          </div>
        </div>
      </div>

      <div class="tobacco">
        <button class="tobacco__close" type="button">&times;</button>
        <div class="tobacco__img">
          <img src="@/assets/img/tabak_1.png" alt="tabak" />
        </div>
        <div class="tobacco__desc">
          Табак для кальяна <b>DARKSIDE Bananapapa</b> - это яркий вкус
          банановой жвачки. Дарк Сайд Бананапапа обладает фруктовым сладким
          вкусом.
        </div>
        <div class="tobacco__bottom">
          <a href="#" class="tobacco__btn">ЛУЧШИЕ СОЧЕТАНИЯ</a>
          <a href="#" class="tobacco__btn">МИКСЫ</a>
        </div>

        <div class="tobacco__goods catalog__goods">
          <div class="catalog__select">
            <label class="catalog__select_item">
              <input type="radio" name="catalog_1333" />
              <span>50гр</span>
            </label>
            <label class="catalog__select_item">
              <input type="radio" name="catalog_1333" />
              <span>100гр</span>
            </label>
            <label class="catalog__select_item">
              <input type="radio" name="catalog_1333" checked />
              <span>250гр</span>
            </label>
          </div>

          <div class="catalog__select">
            <label class="catalog__select_item">
              <input type="radio" name="catalog_2333" />
              <span>Base</span>
            </label>
            <label class="catalog__select_item">
              <input type="radio" name="catalog_2333" checked />
              <span>Core</span>
            </label>
            <label class="catalog__select_item">
              <input type="radio" name="catalog_2333" />
              <span>Rare</span>
            </label>
          </div>

          <div class="catalog__count count">
            <button class="count__minus" type="button">
              <svg class="icon">
                <use xlink:href="#minus" />
              </svg>
            </button>
            <label class="count__label">
              <input type="text" class="count__input" value="25" readonly />
            </label>
            <button class="count__plus" type="button">
              <svg class="icon">
                <use xlink:href="#plus" />
              </svg>
            </button>
          </div>
          <div class="catalog__price">13 875 ₽</div>
        </div>

        <a href="#" class="tobacco__banner">
          <img src="@/assets/img/tabak_2.png" alt="img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
export default {
  name: 'Goods',
  components: { UserNav },
  head: {
    title: 'FiXmoke - Каталог бренду',
  },
}
</script>
