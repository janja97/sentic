<template>
    <div class="header d-flex">
      <h1 class="title">{{ $t('name') }}</h1>
    </div>
</template>


<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'HeaderComponent',
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale
    };
  }
}
</script>

<style setup>
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.3)),   url('/public/background/A9bac.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  align-items: center;
  justify-content: center;

}
.title {
  font-size: 48px;
  color: rgb(209, 209, 209) !important;
  font-weight: 700 !important;
  letter-spacing: 8px;
  text-shadow: 0px 0px 40px rgb(209, 209, 209);
}
@media screen and (max-width: 768.5px) {
  .title {
    font-size: 32px;
  }
}
</style>

      