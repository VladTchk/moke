<template>
  <div ref="menu" class="menu" :class="{ active: isActive }">
    <div ref="bgMenu" class="menu__bg"></div>
    <div class="menu__top">
      <nuxt-link to="/" class="menu__logo hidden__wr" @click.native="closeMenu">
        <span class="hidden__text">
          <img src="@/assets/img/logo.png" alt="logo" />
        </span>
      </nuxt-link>
      <button class="menu__close hidden__wr" @click="closeMenu">
        <span class="hidden__text">
          <svg class="icon">
            <use xlink:href="#plus" />
          </svg>
        </span>
      </button>
    </div>
    <ul ref="listMenu" class="menu__list">
      <li class="menu__item">
        <nuxt-link to="/" class="menu__link" @click.native="closeMenu">
          Табак
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/" class="menu__link" @click.native="closeMenu">
          Аксессуары
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/" class="menu__link" @click.native="closeMenu">
          Кальяны
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/" class="menu__link" @click.native="closeMenu">
          Уголь
        </nuxt-link>
      </li>
    </ul>
    <div class="menu__bottom">
      <hr class="menu__bottom_line" />
      <div class="menu__info">
        <div class="hidden__wr">
          <div class="hidden__text">По всем вопросам:</div>
        </div>
        <a href="tel:+74951553777" class="menu__phone menu__active hidden__wr">
          <span class="hidden__text">+7 495 155 3 777</span>
        </a>
      </div>
      <nuxt-link
        to="/faq"
        class="menu__support hidden__wr menu__active"
        @click.native="closeMenu"
      >
        <span class="hidden__text">Центр поддержки</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Power4, gsap, CSSPlugin } from 'gsap/all'
// eslint-disable-next-line no-undef
gsap.registerPlugin(CSSPlugin)

export default {
  name: 'Nav',
  data() {
    return {
      isActive: false,
      body: document.querySelector('body'),
      animate: {
        tl: undefined,
      },
    }
  },
  mounted() {
    this.animate.tl = new TimelineMax({ paused: true })
    this.animate.tl
      .staggerFromTo(
        this.$refs.menu.querySelectorAll('.menu__bg'),
        1,
        { width: '0%', ease: Power4.easeOut },
        { width: '100%', ease: Power4.easeOut }
      )
      .staggerFromTo(
        this.$refs.menu.querySelectorAll('.menu__link'),
        1.5,
        { y: '100%', ease: Power4.easeOut },
        { y: '0%', ease: Power4.easeOut },
        0.15,
        0.1
      )
      .staggerFromTo(
        this.$refs.menu.querySelectorAll('.menu__bottom_line'),
        1.5,
        { width: '0%', ease: Power4.easeOut },
        { width: '100%', ease: Power4.easeOut },
        0,
        0.3
      )
      .staggerFromTo(
        this.$refs.menu.querySelectorAll('.hidden__text'),
        1.5,
        { y: '100%', ease: Power4.easeOut },
        { y: '0%', ease: Power4.easeOut },
        0.15,
        0.3
      )

    this.$root.$on('showMenu', () => {
      this.openMenu()
    })
  },
  methods: {
    closeMenu() {
      const tl = this.animate.tl

      tl.reverse()
      tl.time(0.8)
      setTimeout(() => {
        this.isActive = false
      }, tl.time() * 1000)

      this.body.classList.remove('overflow')
    },
    openMenu() {
      this.isActive = true
      this.animate.tl.restart()
      this.body.classList.add('overflow')
    },
  },
}
</script>
