<template>
  <div class="about-page">
    
    <section class="about-section">
      <div class="about-container">
        <div class="about-text" data-aos="fade-up">
          <p class="about-paragraph">{{ $t('pages.about.about1') }}</p>
        </div>
      </div>
    </section>

    <section class="amenities-section">
      <div class="section-header">
        <h2 class="section-title">{{ $t('pages.about.amenities.title') }}</h2>
        <div class="section-underline"></div>
      </div>

      <div class="amenities-grid">
        <div 
          v-for="(amenity, index) in amenities" 
          :key="index"
          class="amenity-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="amenity-icon">{{ amenity.icon }}</div>
          <h3 class="amenity-title">{{ $t(amenity.titleKey) }}</h3>
          <p class="amenity-description">{{ $t(amenity.descKey) }}</p>
        </div>
      </div>
    </section>

    <section class="carousel-section">
      <carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="4000" :wrap-around="true">
        <slide v-for="image in images" :key="image.id">
          <div class="carousel-image-wrapper">
            <img :src="image.UrlImg" :alt="image.alt" class="carousel-image" />
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </section>

    <section class="featured-section">
      <div class="section-header">
        <h2 class="section-title">{{ $t('pages.about.featured.title') }}</h2>
        <div class="section-underline"></div>
      </div>
      
      <div class="apartments-grid">
        <div 
          v-for="(apartment, index) in featuredApartments" 
          :key="index"
          class="apartment-card"
          :data-aos="fade-left"
          :data-aos-delay="index * 100"
          @click="openApartmentModal(apartment)"
        >
          <div class="apartment-image-container">
            <img :src="apartment.image" :alt="apartment.ime" class="apartment-image" />
            <div class="apartment-overlay">
              <div class="apartment-name">{{ apartment.ime }}</div>
              <div class="view-more">{{ $t('pages.about.featured.viewMore') }}</div>
            </div>
          </div>
          <div class="apartment-content">
            <h3 class="apartment-title">{{ apartment.ime }}</h3>
            <p class="apartment-description">{{ $t(apartment.text) }}</p>
            <div class="apartment-cta">
              <span class="cta-text">{{ $t('pages.about.featured.showGallery') }}</span>
              <span class="cta-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section about-section-alt">
      <div class="about-container">
        <div class="about-text" data-aos="fade-up">
          <p class="about-paragraph">{{ $t('pages.about.about2') }}</p>
        </div>
      </div>
    </section>

    <section class="reviews-section">
      <div class="section-header">
        <h2 class="section-title">{{ $t('pages.about.reviews.title') }}</h2>
        <p class="section-subtitle">{{ $t('pages.about.reviews.subtitle') }}</p>
        <div class="section-underline"></div>
      </div>

      <div class="ratings-container">
        <div class="rating-card" data-aos="fade-up">
          <div class="rating-source">Google</div>
          <div class="rating-score">4.7</div>
          <div class="rating-stars">★★★★★</div>
          <div class="rating-count">245 {{ $t('pages.about.reviews.reviews') }}</div>
        </div>
        <div class="rating-card" data-aos="fade-up" data-aos-delay="100">
          <div class="rating-source">Booking.com</div>
          <div class="rating-score">9.2</div>
          <div class="rating-stars">★★★★★</div>
          <div class="rating-count">{{ $t('pages.about.reviews.exceptional') }}</div>
        </div>
      </div>

      <div class="reviews-grid">
        <div 
          v-for="(review, index) in reviews" 
          :key="index"
          class="review-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="review-stars">★★★★★</div>
          <p class="review-text">{{ $t(review.textKey) }}</p>
          <div class="review-author">
            <span class="author-name">{{ review.author }}</span>
            <span class="review-source">{{ review.source }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="carousel-section">
      <carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="4000" :wrap-around="true">
        <slide v-for="image in images2" :key="image.id">
          <div class="carousel-image-wrapper">
            <img :src="image.UrlImg" :alt="image.alt" class="carousel-image" />
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </section>

    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">{{ $t('pages.about.faq.title') }}</h2>
        <p class="section-subtitle">{{ $t('pages.about.faq.subtitle') }}</p>
        <div class="section-underline"></div>
      </div>

      <div class="faq-container">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item"
          :class="{ 'active': activeFaq === index }"
        >
          <div class="faq-question" @click="toggleFaq(index)">
            <h3>{{ $t(faq.questionKey) }}</h3>
            <span class="faq-icon">{{ activeFaq === index ? '−' : '+' }}</span>
          </div>
          
          <transition name="fade">
            <div v-if="activeFaq === index" class="faq-answer">
              <p>{{ $t(faq.answerKey) }}</p>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-container">
        <div class="about-text" data-aos="fade-up">
          <p class="about-paragraph">{{ $t('pages.about.about3') }}</p>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="selectedApartment" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <button class="modal-close" @click="closeModal">×</button>
          <div class="modal-header">
            <h3 class="modal-title">{{ selectedApartment.ime }}</h3>
          </div>
          <div class="modal-carousel">
            <carousel v-bind="modalSettings" :wrap-around="true">
              <slide v-for="(image, index) in selectedApartment.images" :key="index">
                <div class="modal-image-wrapper">
                  <img :src="image.UrlImg" :alt="image.alt" class="modal-image" />
                </div>
              </slide>
              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
  name: 'AboutComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  setup() {
    const { t, locale } = useI18n()
    const selectedApartment = ref(null)
    const activeFaq = ref(null)

    const openApartmentModal = (apartment) => {
      selectedApartment.value = apartment
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      selectedApartment.value = null
      document.body.style.overflow = ''
    }

    const toggleFaq = (index) => {
      activeFaq.value = activeFaq.value === index ? null : index
    }

    return {
      t,
      locale,
      selectedApartment,
      activeFaq,
      openApartmentModal,
      closeModal,
      toggleFaq
    }
  },
  data() {
    return {
      settings: { itemsToShow: 1, snapAlign: 'center' },
      modalSettings: { itemsToShow: 1, snapAlign: 'center' },
      breakpoints: {
        700: { itemsToShow: 2, snapAlign: 'center' },
        1024: { itemsToShow: 3, snapAlign: 'start' },
      },
      amenities: [
        { icon: '🅿️', titleKey: 'pages.about.amenities.parking.title', descKey: 'pages.about.amenities.parking.desc' },
        { icon: '📶', titleKey: 'pages.about.amenities.wifi.title', descKey: 'pages.about.amenities.wifi.desc' },
        { icon: '❄️', titleKey: 'pages.about.amenities.ac.title', descKey: 'pages.about.amenities.ac.desc' },
        { icon: '🕐', titleKey: 'pages.about.amenities.checkin.title', descKey: 'pages.about.amenities.checkin.desc' },
        { icon: '🏖️', titleKey: 'pages.about.amenities.beach.title', descKey: 'pages.about.amenities.beach.desc' },
        { icon: '🍳', titleKey: 'pages.about.amenities.kitchen.title', descKey: 'pages.about.amenities.kitchen.desc' },
      ],
      reviews: [
        { textKey: 'pages.about.reviews.review1', author: 'Marko P.', source: 'Google' },
        { textKey: 'pages.about.reviews.review2', author: 'Ana M.', source: 'Booking.com' },
        { textKey: 'pages.about.reviews.review3', author: 'Igor S.', source: 'Google' },
      ],
      faqs: [
        { questionKey: 'pages.about.faq.q1', answerKey: 'pages.about.faq.a1' },
        { questionKey: 'pages.about.faq.q2', answerKey: 'pages.about.faq.a2' },
        { questionKey: 'pages.about.faq.q3', answerKey: 'pages.about.faq.a3' },
        { questionKey: 'pages.about.faq.q4', answerKey: 'pages.about.faq.a4' },
        { questionKey: 'pages.about.faq.q5', answerKey: 'pages.about.faq.a5' },
      ],
      images: [ 
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
      images2: [ 
        { id: '1', UrlImg: '/images/A7 (11).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A5 (13).jpg', alt: 'image-slug' },
        { id: '2', UrlImg: '/images/A6 (2).jpg', alt: 'image-slug' },
        { id: '3', UrlImg: '/images/A7 (3).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/Sentic1.jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A6 (9).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A7 (12).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A9 (8).jpg', alt: 'image-slug' },
        { id: '5', UrlImg: '/images/A6 (8).jpg', alt: 'image-slug' },
      ],
      featuredApartments: [
        {
          ime: "A5",
          text: "pages.gallery.apartmans.textA5",
          image: "/A5/A5 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A5/A5 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A5/A5 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A5/A5 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A5/A5 (8).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A9",
          text: "pages.gallery.apartmans.textA9",
          image: "/A9/A9 (4).jpg",
          images: [
            { id: '5', UrlImg: '/A9/A9 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A9/A9 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (9).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A9/A9 (3).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A7",
          text: "pages.gallery.apartmans.textA7",
          image: "/A7/A7 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A7/A7 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A7/A7 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A7/A7 (4).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A7/A7 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (6).jpg', alt: 'image-slug' },
          ],
        },
      ]
    }
  },
}
</script>

<style scoped>
.about-page { background: #fafafa; }

/* About Sections */
.about-section { padding: 100px 60px; background: #ffffff; }
.about-section-alt { background: #fafafa; }
.about-container { max-width: 900px; margin: 0 auto; }
.about-text { text-align: center; }
.about-paragraph { font-size: 18px; line-height: 1.9; color: #2a2a2a; font-weight: 400; letter-spacing: 0.3px; }

/* Section Headers */
.section-header { text-align: center; margin-bottom: 80px; }
.section-title { font-size: clamp(36px, 5vw, 52px); font-weight: 600; color: #1a1a1a; margin-bottom: 15px; letter-spacing: -0.5px; }
.section-subtitle { font-size: 17px; color: #666; margin-bottom: 25px; }
.section-underline { width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent); margin: 0 auto; }

/* Amenities Section */
.amenities-section { padding: 100px 60px; background: #ffffff; }
.amenities-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; max-width: 1400px; margin: 0 auto; }
.amenity-card { background: #fafafa; padding: 40px 30px; border-radius: 16px; text-align: center; transition: all 0.4s ease; border: 2px solid transparent; }
.amenity-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); border-color: #1a1a1a; background: #ffffff; }
.amenity-icon { font-size: 48px; margin-bottom: 20px; }
.amenity-title { font-size: 22px; font-weight: 600; color: #1a1a1a; margin-bottom: 12px; }
.amenity-description { font-size: 15px; color: #666; line-height: 1.7; }

/* Carousel Section */
.carousel-section { padding: 80px 0; background: #ffffff; }
.carousel-image-wrapper { padding: 0 10px; cursor: pointer; }
.carousel-image { width: 100%; height: 350px; object-fit: cover; border-radius: 12px; transition: all 0.4s ease; filter: brightness(0.95); }
.carousel-image:hover { transform: scale(1.03); filter: brightness(1); box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15); }

/* Featured Apartments */
.featured-section { padding: 100px 60px; background: #fafafa; }
.apartments-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; max-width: 1400px; margin: 0 auto; }
.apartment-card { background: #ffffff; border-radius: 16px; overflow: hidden; cursor: pointer; transition: all 0.4s ease; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); }
.apartment-card:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15); }
.apartment-image-container { position: relative; overflow: hidden; height: 280px; }
.apartment-image { width: 100%; height: 100%; object-fit: cover; transition: all 0.6s ease; }
.apartment-card:hover .apartment-image { transform: scale(1.1); }
.apartment-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; }
.apartment-name { font-size: 32px; font-weight: 700; color: #ffffff; margin-bottom: 10px; }
.view-more { font-size: 14px; color: #ffffff; letter-spacing: 1px; text-transform: uppercase; }
.apartment-content { padding: 30px; }
.apartment-title { font-size: 28px; font-weight: 700; color: #1a1a1a; margin-bottom: 15px; }
.apartment-description { font-size: 15px; line-height: 1.7; color: #666; margin-bottom: 20px; }
.apartment-cta { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: #1a1a1a; text-transform: uppercase; }
.cta-arrow { font-size: 18px; transition: transform 0.3s ease; }
.apartment-card:hover .cta-arrow { transform: translateX(5px); }

/* Reviews Section */
.reviews-section { padding: 100px 60px; background: #ffffff; }
.ratings-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 700px; margin: 0 auto 80px; }
.rating-card { background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 40px 30px; border-radius: 16px; text-align: center; color: #ffffff; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15); }
.rating-score { font-size: 56px; font-weight: 700; margin-bottom: 10px; }
.rating-stars { font-size: 24px; color: #FFD700; margin-bottom: 10px; }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; max-width: 1400px; margin: 0 auto; }
.review-card { background: #fafafa; padding: 35px; border-radius: 16px; border: 2px solid transparent; transition: all 0.4s ease; }
.review-card:hover { transform: translateY(-5px); border-color: #1a1a1a; background: #ffffff; }
.review-stars { color: #FFD700; font-size: 18px; margin-bottom: 20px; }
.review-text { font-size: 15px; line-height: 1.8; color: #2a2a2a; margin-bottom: 20px; font-style: italic; }
.review-author { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid #e0e0e0; }

/* FAQ Section - POPRAVLJENO S ANIMACIJOM */
.faq-section { padding: 100px 60px; background: #fafafa; }
.faq-container { max-width: 900px; margin: 0 auto; }

.faq-item {
  background: #ffffff;
  margin-bottom: 15px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #eeeeee; /* Osnovna svijetla boja bordera */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Border u svjetlijoj boji kad je otvoren (npr. lagano siva/plavkasta umjesto čisto crne) */
.faq-item.active {
  border-color: #d1d1d1; 
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.faq-question {
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
}

.faq-question h3 { font-size: 18px; font-weight: 600; color: #1a1a1a; margin: 0; }
.faq-icon { font-size: 24px; font-weight: bold; color: #1a1a1a; margin-left: 20px; }

.faq-answer {
  padding: 0 30px 25px 30px;
  background: #ffffff;
}

.faq-answer p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
  border-top: 1px solid #f5f5f5;
  padding-top: 15px;
}

/* Animacija za vidljivost (Fade) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Modal */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); z-index: 10000; display: flex; align-items: center; justify-content: center; }
.modal-container { max-width: 90vw; max-height: 90vh; background: #ffffff; border-radius: 20px; overflow: hidden; position: relative; }
.modal-close { position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; background: white; border: none; border-radius: 50%; font-size: 28px; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; }
.modal-header { padding: 30px; border-bottom: 1px solid #f0f0f0; }
.modal-title { font-size: 32px; font-weight: 700; }
.modal-carousel { padding: 20px; }
.modal-image { max-width: 100%; max-height: 70vh; object-fit: contain; border-radius: 12px; }

/* Responsive */
@media (max-width: 768px) {
  .about-section, .amenities-section, .featured-section, .reviews-section, .faq-section { padding: 60px 30px; }
  .apartments-grid, .amenities-grid, .reviews-grid { grid-template-columns: 1fr; }
}
</style>