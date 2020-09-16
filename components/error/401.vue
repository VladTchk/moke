<template>
  <div class="error">
    <h1>401 не авторизован</h1>
    <h2>{{ error.message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Error401',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
