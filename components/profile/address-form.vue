<template>
  <form class="order__form order__row-4">
    <div class="order__form_title">{{ title }}</div>
    <div class="order__grid">
      <label class="order__label order__row-6">
        <input
          v-model="body"
          class="input"
          type="text"
          placeholder="Область, Город, Улица, Дом, Строение/Корпус"
          required
        />
      </label>
      <label class="order__label order__row-2">
        <input
          v-model="flat"
          v-mask="'##########'"
          v-int
          class="input"
          type="text"
          placeholder="Квартира/Офис"
        />
      </label>
      <label class="order__label order__row-2">
        <input
          v-model="entrance"
          v-mask="'##########'"
          v-int
          class="input"
          type="text"
          placeholder="Подъезд"
        />
      </label>
      <label class="order__label order__row-2">
        <input
          v-model="floor"
          v-mask="'##########'"
          v-int
          class="input"
          type="text"
          placeholder="Этаж"
        />
      </label>
      <label class="order__label order__row-6">
        <textarea
          v-model="comment"
          class="textarea"
          placeholder="Комментарий к адресу"
        ></textarea>
      </label>
      <div class="order__check order__row-6">
        <!--        <span>Основной адрес:</span>-->
        <toggle-button
          v-model="is_main"
          :width="200"
          :height="30"
          :font-size="12"
          :sync="true"
          :color="{ checked: '#adc8a8', unchecked: '#313745' }"
          :labels="{
            checked: 'ОСНОВНОЙ АДРЕС',
            unchecked: 'СДЕЛАТЬ ОСНОВНЫМ',
          }"
        />
      </div>
      <div class="order__row-3">
        <button
          v-if="edit"
          type="button"
          class="btn btn-block btn-link"
          @click="deleteAddress"
        >
          УДАЛИТЬ АДРЕС
        </button>
        <button
          v-if="!edit"
          type="button"
          class="btn btn-block btn-link"
          @click="resetForm"
        >
          ОЧИСТИТЬ
        </button>
      </div>
      <div class="order__row-3">
        <button
          v-if="edit"
          type="button"
          :disabled="!isValid"
          class="btn btn-block"
          @click="updateAddress"
        >
          СОХРАНИТЬ
        </button>
        <button
          v-if="!edit"
          type="button"
          class="btn btn-block"
          :disabled="!isValid"
          @click="addNew"
        >
          СОХРАНИТЬ
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddressForm',
  props: {
    edit: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object,
      default: () => {
        return {
          body: undefined,
          flat: undefined,
          entrance: undefined,
          floor: undefined,
          comment: undefined,
          is_main: false,
        }
      },
    },
  },
  data() {
    return {
      title: this.edit ? this.item.body : 'Новый адрес',
      body: this.item.body,
      flat: this.item.flat,
      entrance: this.item.entrance,
      floor: this.item.floor,
      comment: this.item.comment,
      is_main: this.item.is_main,
    }
  },
  computed: {
    isValid() {
      return this.body && this.body.length > 6
    },
    formData() {
      return {
        body: this.body === null ? undefined : this.body,
        flat: this.flat === null ? undefined : this.flat,
        entrance: this.entrance === null ? undefined : this.entrance,
        floor: this.floor === null ? undefined : this.floor,
        comment: this.comment === null ? undefined : this.comment,
        is_main: this.is_main,
      }
    },
  },
  methods: {
    addNew() {
      if (this.isValid) {
        this.close()
        this.$store.dispatch('address/ADD_ADDRESS', this.formData)
      } else {
        // eslint-disable-next-line no-console
        console.log('error form')
      }
    },
    updateAddress() {
      if (this.isValid) {
        this.$store.dispatch('address/UPDATE_ADDRESS', {
          form: this.formData,
          id: this.item.id,
        })
        this.close()
      } else {
        // eslint-disable-next-line no-console
        console.log('error form')
      }
    },
    deleteAddress() {
      this.close()
      this.$store.dispatch('address/DELETE_ADDRESS', this.item.id)
    },
    close() {
      this.$emit('closeForm')
    },
    resetForm() {
      this.body = undefined
      this.flat = undefined
      this.entrance = undefined
      this.floor = undefined
      this.comment = undefined
      this.is_main = false
    },
  },
}
</script>
