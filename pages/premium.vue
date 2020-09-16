<template>
  <div class="order">
    <form class="order__left" action="#" method="post">
      <div class="order__title">Оформление «Premium HoReCa»</div>
      <div class="order__subtitle">
        <div>1. Введите Ваши данные</div>
        <a href="#" class="order__subtitle_link">Оформить на юр. лицо?</a>
      </div>
      <div class="order__grid">
        <label class="order__label order__row-2">
          <input
            class="input"
            type="text"
            name=""
            placeholder="Ваше Имя"
            required
          />
        </label>
        <label class="order__label order__row-2">
          <input
            class="input"
            type="text"
            name=""
            placeholder="Ваша Фамилия"
            required
          />
        </label>
        <label class="order__label order__row-4">
          <input
            class="input"
            type="tel"
            name=""
            placeholder="Номер телефона"
            required
          />
        </label>
        <label class="order__label order__row-4">
          <input
            class="input"
            type="email"
            name=""
            placeholder="Почтовый адрес Email"
            required
          />
        </label>

        <div class="order__save btn btn-block order__row-4 swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <svg class="icon">
                <use xlink:href="#correct" />
              </svg>
              Сохрани свои финансы 1
            </div>
            <div class="swiper-slide">
              <svg class="icon">
                <use xlink:href="#correct" />
              </svg>
              Сохрани свои финансы 2
            </div>
            <span class="swiper-slide">
              <svg class="icon">
                <use xlink:href="#correct" />
              </svg>
              Сохрани свои финансы 3
            </span>
          </div>
        </div>
      </div>
      <div class="order__subtitle">2. Подходящий план</div>
      <div class="order__grid">
        <div class="profile__info order__row-4">
          Аккаунт
          <a href="#">Premium Persona</a>
          на 1 месяц с автопродлением. <br />
          <a href="#">Доступ к специальным ценам и уникальному сервису.</a>
        </div>
        <div class="order__row-2">
          <label class="profile__subscribe_select">
            <select class="select2">
              <option value="1 месяц">1 месяц</option>
              <option value="1 месяц">2 месяц</option>
              <option value="1 месяц">3 месяц</option>
              <option value="1 месяц">4 месяц</option>
            </select>
          </label>
        </div>
        <div class="order__row-2">
          <div class="profile__subscribe_title">2500 ₽</div>
        </div>
        <div class="profile__info order__row-4">
          С общим лимитом <b>150 000</b> ₽ с возможностью расширения.
        </div>
      </div>

      <div class="order__bottom-2 order__grid">
        <a href="#modal-features" class="order__total order__row-2 js-popup">
          Напомнить приемущество
        </a>
        <button class="order__btn gradient order__row-2" type="submit">
          Получить Premium HoReCa
        </button>
      </div>

      <div id="modal-features" class="modals mfp-hide zoom-anim-dialog">
        <div class="order__title">Привилегии Premium Persona</div>
        <ul class="faq__menu">
          {% for i in range(0, 4) -%}
          <li class="faq__item">
            <button class="faq__toggle" type="button">
              Что такое эксклюзивные цены?
            </button>
            <ul class="faq__list">
              <li>
                <p>
                  Эксклюзивные цены - это специальные цены, доступные только
                  подписчикам Premium Persona. Абсолютно все товары станут для
                  вас дешевле.
                </p>
              </li>
            </ul>
          </li>
          {%- endfor %}
        </ul>
      </div>

      <div class="order__info">
        Нажимая на кнопку, вы подтверждаете своё совершеннолетие, соглашаетесь
        на обработку персональных данных в соответствии с
        <a href="#">Условиями</a>
        , а также с
        <a href="#">Условиями продажи</a>
      </div>
    </form>

    <div class="order__right">
      <div class="order__top grid__top">
        <UserNav />
      </div>

      <div class="profile__main">Контент)</div>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
export default {
  name: 'OrderPremium',
  components: { UserNav },
  head: {
    title: 'FiXmoke - Оформление',
  },
}
</script>
