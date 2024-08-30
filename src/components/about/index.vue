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
        { id: '1', UrlImg: '/images/A5 (8).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A9 (10).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A5 (12).jpg', alt: 'image-slug' },
        { id: '2', UrlImg: '/images/A7 (5).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A6 (9).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic1.jpg', alt: 'image-slug' },

        { id: '3', UrlImg: '/images/A8 (9).jpg', alt: 'image-slug' },
        { id: '1', UrlImg: '/images/A9 (11).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A9 (3).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A7 (8).jpg', alt: 'image-slug' },
      ],
      images2:[ 
        { id: '1', UrlImg: '/images/A7 (11).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A5 (13).jpg', alt: 'image-slug' },
        { id: '2', UrlImg: '/images/A6 (2).jpg', alt: 'image-slug' },
        { id: '3', UrlImg: '/images/A7 (3).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic1.jpg', alt: 'image-slug' },

        { id: '5', UrlImg: '/images/A6 (9).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A7 (12).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A9 (8).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A6 (8).jpg', alt: 'image-slug' },
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
