<template>
  <div ref="menu" class="menu" :class="{ active: isActive }">
    <div ref="bgMenu" class="menu__bg"></div>
    <div class="menu__top">
      <nuxt-link
        to="/"
        class="menu__logo hidden__wr"
        @click.native="closeMenu"
        @mouseover.native="cursorMouseover"
        @mouseleave.native="cursorMouseleave"
      >
        <span class="hidden__text">
          <img src="@/assets/img/logo.png" alt="logo" />
        </span>
      </nuxt-link>
      <button
        class="menu__close hidden__wr"
        @click="closeMenu"
        @mouseover="cursorMouseover"
        @mouseleave="cursorMouseleave"
      >
        <span class="hidden__text">
          <svg class="icon">
            <use xlink:href="#plus" />
          </svg>
        </span>
      </button>
    </div>
    <nav class="menu__nav">
      <ul ref="listMenu" class="menu__list">
        <li class="menu__item">
          <nuxt-link
            to="/"
            class="menu__link"
            @click.native="closeMenu"
            @mouseover.native="cursorMouseover"
            @mouseleave.native="cursorMouseleave"
          >
            Табак
          </nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link
            to="/"
            class="menu__link"
            @click.native="closeMenu"
            @mouseover.native="cursorMouseover"
            @mouseleave.native="cursorMouseleave"
          >
            Аксессуары
          </nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link
            to="/"
            class="menu__link"
            @click.native="closeMenu"
            @mouseover.native="cursorMouseover"
            @mouseleave.native="cursorMouseleave"
          >
            Кальяны
          </nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link
            to="/"
            class="menu__link"
            @click.native="closeMenu"
            @mouseover.native="cursorMouseover"
            @mouseleave.native="cursorMouseleave"
          >
            Уголь
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="menu__bottom">
      <hr class="menu__bottom_line" />
      <div class="menu__info">
        <div class="hidden__wr">
          <div class="hidden__text">По всем вопросам:</div>
        </div>
        <a
          href="tel:+74951553777"
          class="menu__phone menu__active hidden__wr"
          @mouseover="cursorMouseover"
          @mouseleave="cursorMouseleave"
        >
          <span class="hidden__text">+7 495 155 3 777</span>
        </a>
      </div>
      <nuxt-link
        to="/faq"
        class="menu__support hidden__wr menu__active"
        @click.native="closeMenu"
        @mouseover.native="cursorMouseover"
        @mouseleave.native="cursorMouseleave"
      >
        <span class="hidden__text">Центр поддержки</span>
      </nuxt-link>
    </div>

    <div ref="menu__cursor" class="menu__cursor"><span></span></div>
  </div>
</template>

<script>
import {
  TimelineMax,
  Power4,
  Linear,
  gsap,
  CSSPlugin,
  TweenMax,
} from 'gsap/all'
// import throttle from '~/plugins/throttle'

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
        0.6,
        { x: '-100%', ease: Power4.easeOut },
        { x: '0%', ease: Power4.easeOut }
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

    const cursor = this.$refs.menu__cursor
    const editCursor = (e) => {
      const { clientX, clientY } = e
      TweenMax.to(cursor, 0, {
        x: clientX,
        y: clientY,
        ease: Linear.easeOut,
      })
    }

    // const editCursorThrottle = throttle(editCursor, 10)

    this.$refs.menu.addEventListener('mousemove', editCursor)
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
      this.body.removeEventListener('keydown', this.keyCheck)
    },
    openMenu() {
      this.isActive = true
      this.animate.tl.restart()
      this.body.classList.add('overflow')
      this.body.addEventListener('keydown', this.keyCheck)
    },
    keyCheck(e) {
      if (e.keyCode === 27) {
        this.closeMenu()
      }
    },
    cursorMouseover() {
      this.$refs.menu__cursor.classList.add('active')
    },
    cursorMouseleave() {
      this.$refs.menu__cursor.classList.remove('active')
    },
  },
}
</script>
