<template>
  <div class="grid__right">
    <div class="order__top grid__top">
      <div class="faq__title faq__title-hide">{{ title }}</div>

      <UserNav />
    </div>

    <div class="faq__content">
      <div class="faq__title faq__title-show">{{ title }}</div>
      <div v-html="text"></div>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'

export default {
  components: { UserNav },
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      title: '',
      text: '',
    }
  },
  mounted() {
    const url = this.$route.params.id.split('_')
    const { title, text } = this.sections[url[0]].questions[url[1]]
    this.title = title
    this.text = text
  },
}
</script>
