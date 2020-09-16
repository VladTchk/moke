<template>
  <div class="order__action action">
    <nuxt-link to="/profile" class="action__user">
      <svg class="icon">
        <use xlink:href="#profile" />
      </svg>
    </nuxt-link>
    <nuxt-link to="/order" class="action__basket">
      <svg class="icon">
        <use xlink:href="#bag" />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
}
</script>
