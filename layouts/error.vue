<template>
  <component :is="errorPage" :error="error" />
</template>

<script>
import Error401 from '@/components/error/401'
import Error404 from '@/components/error/404'
import Error500 from '@/components/error/500'

export default {
  name: 'NuxtError',
  components: { Error401, Error404, Error500 },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      switch (this.error.statusCode) {
        case 401:
          return Error401
        case 404:
          return Error404
        default:
          return Error500
      }
    },
  },
}
</script>
