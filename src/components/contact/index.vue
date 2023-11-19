<template>
  <div class="container">
    <div class="d-flex flex-wrap">
      <div class="col-12 col-lg-6 aligne-items-center content" data-aos="fade-right">
        <div class="d-flex mt-2">
          <img src="/icons/telephone.png" alt="telephone" class="image">
          <h6 class="ml-2">
            <a href="tel:063962137">{{ $t('pages.contact.phone') }}063/962-137</a>
          </h6>       
        </div>
        <div class="d-flex mt-2">
          <img src="/icons/pin.png" alt="pin" class="image">
          <h6 class="ml-2">
            <a href="https://www.google.com/maps/place/Mimoza+64,+Neum+88390/@42.9189757,17.6171307,17z/data=!3m1!4b1!4m6!3m5!1s0x134ba3ad1400223b:0x539ceda1ffe951f2!8m2!3d42.9189718!4d17.6197056!16s%2Fg%2F11vcvpmlhq?entry=ttu" target="_blank">{{ $t('pages.contact.address') }}Mimoza 64, Neum BiH</a>
          </h6>
        </div>
        <div class="d-flex mt-2">
          <img src="/icons/email.png" alt="email" class="image">
          <h6 class="ml-2"><a href="mailto:info@apartman-sentic.com">{{ $t('pages.contact.mail') }}info@apartman-sentic.com</a></h6>
        </div>
      </div>
      <div class="col-12 col-lg-6" data-aos="fade-left">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.813425653651!2d17.617130676537194!3d42.91897569960765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ba3ad1400223b%3A0x539ceda1ffe951f2!2sMimoza%2064%2C%20Neum%2088390!5e0!3m2!1shr!2sba!4v1698486550206!5m2!1shr!2sba" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>


<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'ContactComponent',
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale
    };
  }
}
</script>
<style scoped>
.container {
  margin-top: 70px;
  margin-bottom: 70px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 0 70px 0;
}
.image {
  width: 20px;
  height: auto;
  object-fit: contain;
}
h6 {
  margin-left: 5px;
  font-size: 20px !important;
}
a {
  color: #2a2a2a!important;
  text-decoration: none !important;

}
a:hover {
  color: #2a2a2a;
  text-decoration: underline !important;
}
@media screen and (max-width:425.5px) {
  h6 {
    font-size: 16px !important;
  }
}
iframe {
  height: 500px;
  width: 100%;
  filter: grayscale(.3);
}
iframe:hover {
  filter: grayscale(0);
}
</style>