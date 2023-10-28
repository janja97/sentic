<template>
  <div class="container">
    <div class="d-flex flex-wrap">
      <div class="col-12 col-lg-6 aligne-items-center content">
        <div class="d-flex mt-2">
          <img src="/icons/telephone.png" alt="telephone" class="image">
           <h6 class="ml-2">Tel: 063/ 962-137</h6>
        </div>
        <div class="d-flex mt-2">
          <img src="/icons/pin.png" alt="pin" class="image">
          <h6 class="ml-2">Address: Mimoza 64, Neum BiH</h6>
        </div>
        <div class="d-flex mt-2">
          <img src="/icons/email.png" alt="email" class="image">
          <h6 class="ml-2">info@apartman-sentic.com</h6>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.813425653651!2d17.617130676537194!3d42.91897569960765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ba3ad1400223b%3A0x539ceda1ffe951f2!2sMimoza%2064%2C%20Neum%2088390!5e0!3m2!1shr!2sba!4v1698486550206!5m2!1shr!2sba" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>


<script>

export default {
name: 'ContactPage',

}
</script>
<style>
.container {
  margin: 70px 0;
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
@media screen and (max-width:425.5px) {
  h6 {
    font-size: 16px !important;
  }
}
iframe {
  height: 500px;
  width: 100%;
}
</style>