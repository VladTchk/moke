<template>
  <Brands :categories="id" />
</template>

<script>
import Brands from '@/components/catalog/brands'

export default {
  name: 'Id',
  components: { Brands },
  props: {
    id: {
      type: String,
      default: '0',
    },
  },
  transition: {
    name: 'faq',
    duration: 0,
  },
}
</script>
