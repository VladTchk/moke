<template>
  <Brands :categories="'0'" />
</template>

<script>
import Brands from '@/components/catalog/brands'

export default {
  name: 'Index',
  transition: {
    name: 'faq',
    duration: 0,
  },
  components: { Brands },
}
</script>
