<template>
  <div class="error">
    <h1>404 не найдено</h1>
    <h2>{{ error.message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
