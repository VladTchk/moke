<template>
  <div class="bg__main">
    <div class="bg__main_img bg__main_1"></div>
    <div class="bg__main_img bg__main_2"></div>
    <div class="bg__main_img bg__main_3"></div>
    <div class="bg__main_img bg__main_4"></div>
    <div class="bg__main_img bg__main_5"></div>
  </div>
</template>

<script>
import { TweenMax, Power2 } from 'gsap/all'
import throttle from '~/plugins/throttle'

export default {
  name: 'Background',
  data() {
    return {
      body: document.querySelector('body'),
      animate: {
        tl: undefined,
      },
    }
  },
  mounted() {
    const callParallax = (e) => {
      // center
      parallaxIt(e, '.bg__main_1', -500)
      parallaxIt(e, '.bg__main_4', -500)

      parallaxIt(e, '.bg__main_2', -200)
      parallaxIt(e, '.bg__main_3', -200)
      parallaxIt(e, '.bg__main_5', -200)
    }

    const callParallaxDebounce = throttle(callParallax, 350)

    this.body.addEventListener('mousemove', callParallaxDebounce)

    const parallaxIt = (e, target, movement) => {
      const $this = this.body
      const relX = e.pageX - $this.getBoundingClientRect().left
      const relY = e.pageY - $this.getBoundingClientRect().top

      TweenMax.to(target, 1, {
        x: ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement,
        y: ((relY - $this.offsetHeight / 2) / $this.offsetHeight) * movement,
        ease: Power2.easeOut,
      })
    }
  },
}
</script>
