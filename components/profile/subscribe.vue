<template>
  <div>
    <div class="order__subtitle">2. Управление подпиской</div>
    <h6>
      <pre>{{ `${subscribeInfo}` }}</pre>
    </h6>
    <div class="order__grid">
      <div class="profile__info order__row-4">
        Аккаунт
        <a href="#">Premium Persona</a>
        на 1 месяц с автопродлением. <br />
        <a href="#">Доступ к специальным ценам и уникальному сервису.</a>
      </div>
      <div class="profile__subscribe order__row-2">
        <div class="profile__subscribe_title">12 345 ₽</div>
        <a href="#" class="profile__subscribe_btn">Увеличить лимит</a>
      </div>
      <div class="profile__subscribe order__row-2">
        <div class="profile__subscribe_title">28 дней</div>
        <a href="#" class="profile__subscribe_btn">Продлить подписку</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  computed: {
    subscribeInfo() {
      return this.$store.getters['user/USER'].subscription
    },
  },
}
</script>
