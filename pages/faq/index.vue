<template>
  <div class="grid__right">
    <div class="order__top grid__top">
      <div class="faq__title faq__title-hide">{{ question }}</div>
      <UserNav />
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'

export default {
  components: { UserNav },
  data: () => {
    return {
      question: '',
    }
  },
}
</script>
