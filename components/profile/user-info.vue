<template>
  <Fragment>
    <label class="order__label order__row-2">
      <input
        v-model.lazy="name"
        class="input"
        type="text"
        placeholder="Ваше Имя"
        required
      />
    </label>
    <label class="order__label order__row-2">
      <input
        v-model.lazy="surname"
        class="input"
        type="text"
        placeholder="Ваша Фамилия"
        required
      />
    </label>
    <label class="order__label order__row-4">
      <input
        class="input"
        type="tel"
        :disabled="true"
        :value="userInfo.phone"
        placeholder="Номер телефона"
        required
      />
    </label>
    <label class="order__label order__row-4">
      <input
        class="input"
        type="email"
        :disabled="true"
        :value="userInfo.email"
        placeholder="Почтовый адрес Email"
        required
      />
    </label>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'UserInfo',
  components: {
    Fragment,
  },
  async fetch() {
    await this.$store.dispatch('user/FETCH_USER')
  },
  computed: {
    userInfo() {
      return this.$store.getters['user/USER']
    },
    name: {
      get() {
        return this.userInfo.name || ''
      },
      set(val) {
        this.updateInfo({ name: val.trim() })
      },
    },
    surname: {
      get() {
        return this.userInfo.surname || ''
      },
      set(val) {
        this.updateInfo({ surname: val.trim() })
      },
    },
  },
  methods: {
    updateInfo(obj) {
      const form = {
        name: this.name,
        surname: this.surname,
        ...obj,
      }
      this.$store.dispatch('user/UPDATE_USER', form)
    },
  },
}
</script>
