<template>
  <div class="tobacco">
    <button class="tobacco__close" type="button">&times;</button>
    <!--    <div class="tobacco__img">-->
    <!--      <img src="@/assets/img/tabak_1.png" alt="tabak" />-->
    <!--    </div>-->
    <div class="tobacco__desc">
      Табак для кальяна <b>DARKSIDE Bananapapa</b> - это яркий вкус банановой
      жвачки. Дарк Сайд Бананапапа обладает фруктовым сладким вкусом.
    </div>
    <div class="tobacco__bottom">
      <a href="#" class="tobacco__btn">ЛУЧШИЕ СОЧЕТАНИЯ</a>
      <a href="#" class="tobacco__btn">МИКСЫ</a>
      <nuxt-link to="/order" class="tobacco__btn tobacco__btn-dark">
        В КОРЗИНУ
      </nuxt-link>
    </div>

    <!--    <div class="tobacco__goods catalog__goods">-->
    <!--      <div class="catalog__select">-->
    <!--        <label class="catalog__select_item">-->
    <!--          <input type="radio" name="catalog_1333" />-->
    <!--          <span>50гр</span>-->
    <!--        </label>-->
    <!--        <label class="catalog__select_item">-->
    <!--          <input type="radio" name="catalog_1333" />-->
    <!--          <span>100гр</span>-->
    <!--        </label>-->
    <!--        <label class="catalog__select_item">-->
    <!--          <input type="radio" name="catalog_1333" checked />-->
    <!--          <span>250гр</span>-->
    <!--        </label>-->
    <!--      </div>-->

    <!--      <div class="catalog__select">-->
    <!--        <label class="catalog__select_item">-->
    <!--          <input type="radio" name="catalog_2333" />-->
    <!--          <span>Base</span>-->
    <!--        </label>-->
    <!--        <label class="catalog__select_item">-->
    <!--          <input type="radio" name="catalog_2333" checked />-->
    <!--          <span>Core</span>-->
    <!--        </label>-->
    <!--        <label class="catalog__select_item">-->
    <!--          <input type="radio" name="catalog_2333" />-->
    <!--          <span>Rare</span>-->
    <!--        </label>-->
    <!--      </div>-->

    <!--      <div class="catalog__count count">-->
    <!--        <button class="count__minus" type="button">-->
    <!--          <svg class="icon">-->
    <!--            <use xlink:href="#minus" />-->
    <!--          </svg>-->
    <!--        </button>-->
    <!--        <label class="count__label">-->
    <!--          <input type="text" class="count__input" value="25" readonly />-->
    <!--        </label>-->
    <!--        <button class="count__plus" type="button">-->
    <!--          <svg class="icon">-->
    <!--            <use xlink:href="#plus" />-->
    <!--          </svg>-->
    <!--        </button>-->
    <!--      </div>-->
    <!--      <div class="catalog__price">13 875 ₽</div>-->
    <!--    </div>-->

    <!--    <a href="#" class="tobacco__banner">-->
    <!--      <img src="@/assets/img/tabak_2.png" alt="img" />-->
    <!--    </a>-->
  </div>
</template>

<script>
export default {
  name: 'Tobacco',
}
</script>
