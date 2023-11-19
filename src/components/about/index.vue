<template>
  <div>
    <div class="text col-12 col-md-6 col-xl-5">
      {{ $t('pages.about.about1') }}
    </div>
    <carousel  v-bind="settings" :breakpoints="breakpoints" :autoplay="4000"  :wrap-around="true" >
      <slide v-for="image in images" :key="image.id">
        <img :src="image.UrlImg" :alt="image.alt" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="text col-12 col-md-6 col-xl-5">
      {{ $t('pages.about.about2') }}
    </div> 
    <carousel  v-bind="settings" :breakpoints="breakpoints" :autoplay="4000"  :wrap-around="true">
      <slide v-for="image in images2" :key="image.id">
        <img :src="image.UrlImg" :alt="image.alt" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="text col-12 col-md-6 col-xl-5">
      {{ $t('pages.about.about3') }}
    </div> 
    
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useI18n } from 'vue-i18n';

export default {
  name: 'AboutComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale
    };
  },
  data() {
    return {
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },

      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
      },
      // images array
      images:[ 
        { id: '1', UrlImg: '/images/Sentic (17).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (24).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (12).jpg', alt: 'image-slug' },
        { id: '2', UrlImg: '/images/Sentic (28).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (9).jpg', alt: 'image-slug' },
        { id: '3', UrlImg: '/images/Sentic (35).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (36).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (40).jpg', alt: 'image-slug' },
      ],
      images2:[ 
        { id: '1', UrlImg: '/images/Sentic (1).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (4).jpg', alt: 'image-slug' },
        { id: '2', UrlImg: '/images/Sentic (6).jpg', alt: 'image-slug' },
        { id: '3', UrlImg: '/images/Sentic (8).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (14).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (41).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (42).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic (3).jpg', alt: 'image-slug' },
      ]
    };
  },
}
</script>
<style>
.text {
  text-align: center;
  padding: 70px 40px;
  margin: auto;
}
img {
  width: 100%;
  height: 307px;
  object-fit: cover;
}
</style>
