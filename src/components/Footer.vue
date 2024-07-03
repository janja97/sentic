<template>
  <div class="footer">
    <div class="container d-flex flex-wrap justify-content-between my-3 align-items-center">
      <div class="col-12 col-sm-6 col-md-3">
        <h3>{{ $t('name')}}</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div><span>{{ $t('footer.phone') }}</span> 063/ 962-137</div>
        <div><span>{{ $t('footer.address') }}</span> Mimoza 64, Neum BiH</div>
      </div>
      <div class="dropdown col-12 col-sm-6 col-md-3 dropup">
        <button class="dropdown-toggle languageButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="/icons/global.svg" alt="global" class="global-icons">
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" @click="changeLocale('en')">{{ $t('lang.en') }}</button></li>
          <li><button class="dropdown-item" @click="changeLocale('hr')">{{ $t('lang.hr') }}</button></li>
          <li><button class="dropdown-item" @click="changeLocale('de')">{{ $t('lang.de') }}</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

  
<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'FooterComponent',
  setup() {
    const { t, locale } = useI18n();

    function changeLocale(newLocale) {
      locale.value = newLocale;
      localStorage.setItem('locale', newLocale); 
    }
    return {
      t,
      locale,
      changeLocale
    };
  }
};

</script>
<style scoped>
.footer {
    position: relative;
    bottom: 0;
    background-color: #f2f5f5;
    border-top: 1px solid #e3e2e2;
    padding: 10px 0;
}
h3 {
    font-weight: 700;
    color: #727272;
}
div {
    list-style-type: none;
    color: #727272;
}
.languageButton {
  border: none;
  background-color: transparent;
}
.languageButton img {
  color: #727777;
}
.dropup .dropdown-toggle::after {
  display: none;
}
.dropdown-item {
  font-size: 14px !important;
}

.dropdown-item:hover {
  text-decoration: underline;
}

.global-icons {
  width: 25px;
  height: 25px;
}
</style>


  