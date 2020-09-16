<template>
  <div class="error">
    <h1>500 ошибка сервера</h1>
    <h2>{{ error.message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
