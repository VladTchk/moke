<template>
  <div class="order__action action">
    <!--    <nuxt-link to="/profile" class="action__user">-->
    <!--      <svg class="icon">-->
    <!--        <use xlink:href="#profile" />-->
    <!--      </svg>-->
    <!--    </nuxt-link>-->
    <a href="/#" class="action__user" @click.stop.prevent="openAuth">
      <svg class="icon">
        <use xlink:href="#profile" />
      </svg>
    </a>
    <nuxt-link to="/order" class="action__basket">
      <svg class="icon">
        <use xlink:href="#bag" />
      </svg>
      <span v-if="cartCount > 0">{{ cartCount }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
  computed: {
    cartCount() {
      return this.$store.getters['cart/CART_COUNT']
    },
    isLoggedUser() {
      return this.$store.getters['auth/IS_LOGGED_IN']
    },
  },
  methods: {
    openAuth() {
      if (this.isLoggedUser) {
        this.$router.push({ name: 'profile' })
      } else {
        this.$store.dispatch('auth/TOGGLE_FORM', true)
      }
    },
  },
}
</script>
