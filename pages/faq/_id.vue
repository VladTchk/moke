<template>
  <div class="grid__right">
    <div class="order__top grid__top">
      <div class="faq__title faq__title-hide">
        {{ question | strippedContent }}
      </div>

      <UserNav />
    </div>

    <div class="faq__content">
      <div class="faq__title faq__title-show">
        {{ question | strippedContent }}
      </div>
      <!--      <div>{{ answer }}</div>-->
      <div v-html="answer"></div>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'

export default {
  components: { UserNav },
  filters: {
    strippedContent: (str) => str.replace(/<\/?[^>]+>/gi, ' '),
  },
  transition: {
    name: 'faq',
    duration: 0,
  },
  data() {
    return {
      question: '',
      answer: '',
    }
  },
  computed: {
    list() {
      return this.$store.getters['faq/FAGS_LIST']
    },
  },
  mounted() {
    try {
      const url = this.$route.params.id.split('_')
      const { question, answer } = this.list[url[0]].questions[url[1]]
      this.question = question
      this.answer = answer
    } catch (e) {
      // this.$nuxt.error({ message: 'Faq.json not found', statusCode: 404 })
      this.$router.push({ name: 'faq' })
    }
  },
}
</script>

<style lang="scss" scoped>
//.faq-enter-active,
//.faq-leave-active {
//  .faq__content,
//  .faq__title {
//    transition: opacity 0.5s;
//  }
//}
//
//.faq-enter,
//.faq-leave-active {
//  .faq__content,
//  .faq__title {
//    opacity: 0;
//  }
//}
</style>
