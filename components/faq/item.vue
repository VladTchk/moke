<template>
  <li class="faq__item">
    <button
      class="faq__toggle"
      type="button"
      :class="activeClass"
      @click="toggleItem"
    >
      {{ section.name }}
    </button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div v-show="isOpen" class="faq__wrapper">
        <ul class="faq__list">
          <li
            v-for="(question, y) in section.questions"
            :key="question.question"
          >
            <nuxt-link
              :to="`/faq/${index}_${y}`"
              class="faq__link"
              active-class="active"
            >
              {{ question.question | strippedContent }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'

export default {
  name: 'Item',
  filters: {
    strippedContent: (str) => str.replace(/<\/?[^>]+>/gi, ' '),
  },
  props: {
    section: {
      type: Object,
      default() {
        return {
          question: '',
          answer: '',
        }
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    activeClass() {
      return {
        active: this.isOpen,
      }
    },
  },
  methods: {
    toggleItem() {
      this.isOpen = !this.isOpen
    },
    beforeEnter(el) {
      el.style.maxHeight = 0 + 'px'
    },
    enter(el, done) {
      TweenMax.to(el, 0.8, {
        ease: Power4.easeOut,
        maxHeight: el.scrollHeight,
        onComplete: done,
      })
    },
    leave(el, done) {
      TweenMax.to(el, 0.8, {
        maxHeight: '0',
        ease: Power4.easeOut,
        onComplete: done,
      })
    },
  },
}
</script>

<style scoped>
.faq__wrapper {
  overflow: hidden;
  height: auto;
}
</style>
