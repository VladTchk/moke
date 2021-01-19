<template>
  <div class="order">
    <form class="order__left" action="#" method="post">
      <div class="order__title">Личный кабинет</div>
      <div class="order__subtitle">1. Ваши данные</div>
      <div class="order__grid">
        <UserInfo />
        <Address />
      </div>
      <Subscribe />
    </form>

    <div class="order__right">
      <div class="order__top grid__top">
        <UserNav />
      </div>

      <div class="profile__main">
        <!--        <pre style="line-height: 1; margin: 0">-->
        <!--          <small><small>{{ info }}</small></small>-->
        <!--        </pre>-->
        <!--        <pre style="line-height: 1; margin: 0">-->
        <!--          <small><small>{{ userInfo }}</small></small>-->
        <!--        </pre>-->
        <div class="profile__title">Привет, {{ name }}!</div>
        <div class="profile__subtitle">Аналитика заказов</div>
        <div class="profile__list">
          <div class="profile__analytics">
            <div>
              <b>🤓</b> <br />
              Нам требуеться немного больше заказов
            </div>
          </div>
          <div
            class="profile__item profile__item-1 profile__item-big text-center"
            :style="{
              backgroundImage:
                'url(' + require('../assets/img/profile_3.png') + ')',
            }"
          >
            <div class="profile__item_title">
              <img src="@/assets/img/profile_1.png" alt="img" />
              <br />
              Самый любимый
              <a href="#">Must Have Pinkman</a>
            </div>
          </div>
          <div class="profile__item profile__item-2">
            <img src="@/assets/img/profile_2.png" alt="img" />
            <div class="profile__item_title">Ягодный</div>
            <div class="profile__item_desc">Самый популярный оттенок</div>
          </div>
          <div
            class="profile__item profile__item-3 profile__item-big text-center"
            :style="{
              backgroundImage:
                'url(' + require('../assets/img/profile_5.png') + ')',
            }"
          >
            <div class="profile__item_desc">
              Для вас отлично <br />подойдут чаши <br />Типа
              <a href="#">phunel</a>
            </div>
          </div>
          <div
            class="profile__item profile__item-4"
            :style="{
              backgroundImage:
                'url(' + require('../assets/img/profile_4.png') + ')',
            }"
          >
            <div class="profile__item_title">Нравится покрепче</div>
          </div>
        </div>

        <div class="profile__subtitle">Прошлый заказ</div>
        <br />
        <button
          class="catalog__show"
          :class="{ active: openOrder }"
          type="button"
          @click="openOrder = !openOrder"
        >
          <span>DARKSIDE | <small>6 товаров</small></span>
          <svg class="icon">
            <use xlink:href="#login" />
          </svg>
        </button>
        <SlideToggle class="catalog__content" :open="openOrder">
          <ul class="order__list">
            <li v-for="i in 3" :key="i" class="order__item">
              <div class="order__name">Barvy Orange</div>
              <div class="order__size">100гр</div>
              <div class="order__line">Core</div>
              <div class="order__count count">
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
              <div class="order__price">555 ₽</div>
            </li>
          </ul>
        </SlideToggle>

        <button class="profile__more" type="button">
          Посмотреть полностью
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
import Subscribe from '@/components/profile/subscribe'
import UserInfo from '@/components/profile/user-info'
import Address from '@/components/profile/address'
import { VueSlideToggle } from 'vue-slide-toggle'
import axios from '@/plugins/axios'

export default {
  name: 'Profile',
  components: {
    UserNav,
    SlideToggle: VueSlideToggle,
    Subscribe,
    Address,
    UserInfo,
  },
  data() {
    return {
      openOrder: false,
      info: '',
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters['user/USER']
    },
    name() {
      return this.userInfo.name || ''
    },
  },
  mounted() {
    axios
      .get('/auth/profile')
      .then((r) => {
        this.info = r.data
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  head: {
    title: 'FiXmoke - Личный кабинет',
  },
}
</script>
