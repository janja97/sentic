<template>
  <div class="gallery-page">
    
    <section class="gallery-header">
      <h1 class="gallery-title">{{ $t('pages.gallery.title') }}</h1>
      <div class="gallery-subtitle">{{ $t('pages.gallery.subtitle') }}</div>
      <div class="title-underline"></div>
    </section>

    <section class="gallery-grid-section">
      <div class="apartments-grid">
        <div
          v-for="(apartman, index) in apartmans"
          :key="index"
          class="apartment-item"
          :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
          :data-aos-delay="(index % 4) * 100"
          @click="openModal(apartman)"
        >
          <div class="apartment-image-wrapper">
            <img :src="apartman.image" :alt="apartman.ime" class="apartment-thumbnail" />
            <div class="apartment-hover-overlay">
              <div class="apartment-info">
                <h3 class="apartment-name">{{ apartman.ime }}</h3>
                <p class="apartment-text">{{ $t(apartman.text) }}</p>
                <div class="view-gallery-btn">
                  <span>{{ $t('pages.gallery.modal.viewGalleryBtn') }}</span>
                  <span class="arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="selectedApartman" class="modal-backdrop" @click="closeModal">
        <div class="modal-wrapper" @click.stop>
          <button class="modal-close-btn" @click="closeModal">
            <span>×</span>
          </button>
          
          <div class="modal-content-wrapper">
            <div class="modal-sidebar">
              <h2 class="modal-apartment-name">{{ selectedApartman.ime }}</h2>
              <div class="modal-image-counter">
                {{ currentImageIndex + 1 }} / {{ selectedApartman.images.length }}
              </div>
            </div>

            <div class="modal-carousel-container">
              <button 
                class="carousel-nav carousel-prev" 
                @click="prevImage"
                :disabled="currentImageIndex === 0"
              >‹</button>
              
              <div class="modal-image-container">
                <img 
                  :src="selectedApartman.images[currentImageIndex].UrlImg" 
                  :alt="selectedApartman.images[currentImageIndex].alt" 
                  class="modal-main-image"
                  :key="currentImageIndex"
                />
              </div>

              <button 
                class="carousel-nav carousel-next" 
                @click="nextImage"
                :disabled="currentImageIndex === selectedApartman.images.length - 1"
              >›</button>
            </div>

            <div class="modal-thumbnails">
              <div
                v-for="(image, idx) in selectedApartman.images"
                :key="idx"
                class="thumbnail-item"
                :class="{ 'active': idx === currentImageIndex }"
                @click="currentImageIndex = idx"
              >
                <img :src="image.UrlImg" :alt="image.alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'GaleryComponent',
  setup() {
    const { t } = useI18n()
    const selectedApartman = ref(null)
    const currentImageIndex = ref(0)

    const openModal = (apartman) => {
      selectedApartman.value = apartman
      currentImageIndex.value = 0
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      selectedApartman.value = null
      currentImageIndex.value = 0
      document.body.style.overflow = ''
    }

    const nextImage = () => {
      if (currentImageIndex.value < selectedApartman.value.images.length - 1) {
        currentImageIndex.value++
      }
    }

    const prevImage = () => {
      if (currentImageIndex.value > 0) {
        currentImageIndex.value--
      }
    }

    const handleKeydown = (e) => {
      if (!selectedApartman.value) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown)
    }

    return {
      t,
      selectedApartman,
      currentImageIndex,
      openModal,
      closeModal,
      nextImage,
      prevImage
    }
  },
  data() {
    return {
      apartmans: [
        {
          ime: "A3",
          text: "pages.gallery.apartmans.textA3",
          image: "/A3/A3 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A3/A3 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A3/A3 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A3/A3 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A3/A3 (7).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A4",
          text: "pages.gallery.apartmans.textA4",
          image: "/A4/A4 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A4/A4 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A4/A4 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A4/A4 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A4/A4 (7).jpg', alt: 'image-slug' },
          ],
        },
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
            { id: '5', UrlImg: '/A5/A5 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (12).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (14).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A5/A5 (15).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A6",
          text: "pages.gallery.apartmans.textA6",
          image: "/A6/A6 (1).jpg",
          images: [
            { id: '1', UrlImg: '/A6/A6 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (2).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A6/A6 (3).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A6/A6 (4).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A6/A6 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A6/A6 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (12).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A6/A6 (13).jpg', alt: 'image-slug' },
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
            { id: '5', UrlImg: '/A7/A7 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A7/A7 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (11).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A7/A7 (12).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A7/A7 (14).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A8",
          text: "pages.gallery.apartmans.textA8",
          image: "/A8/A8 (7).jpg",
          images: [
            { id: '3', UrlImg: '/A8/A8 (8).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A8/A8 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (11).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A8/A8 (3).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (7).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A8/A8 (4).jpg', alt: 'image-slug' },  
            { id: '1', UrlImg: '/A8/A8 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A8/A8 (2).jpg', alt: 'image-slug' },
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
            { id: '5', UrlImg: '/A9/A9 (12).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A9/A9 (4).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A9/A9 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A9/A9 (2).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A9/A9 (1).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A10",
          text: "pages.gallery.apartmans.textA10",
          image: "/A10/A10  (11).jpg",
          images: [
            { id: '2', UrlImg: '/A10/A10  (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (15).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (16).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (13).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (11).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10  (12).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10  (14).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A10/A10  (17).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (18).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (19).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (2).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10  (3).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10  (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (7).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A10/A10  (9).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A10/A10  (10).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A11",
          text: "pages.gallery.apartmans.textA11",
          image: "/A11/A11 (14).jpg",
          images: [
            { id: '1', UrlImg: '/A11/A11 (14).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (12).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A11/A11 (5).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A11/A11 (6).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A11/A11 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (10).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A11/A11 (9).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A11/A11 (11).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (13).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A11/A11 (4).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A11/A11 (7).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A11/A11 (15).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (16).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A11/A11 (1).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (2).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A11/A11 (3).jpg', alt: 'image-slug' },
          ],
        },
        {
          ime: "A12",
          text: "pages.gallery.apartmans.textA12",
          image: "/A12/A12 (5).jpg",
          images: [
            { id: '1', UrlImg: '/A12/A12 (9).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (2).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A12/A12 (1).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A12/A12 (4).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (5).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (6).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A12/A12 (7).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A12/A12 (12).jpg', alt: 'image-slug' },
          
          ],
        },
        {
          ime: "A13",
          text: "pages.gallery.apartmans.textA13",
          image: "/A13/A13 (15).jpg",
          images: [
            { id: '1', UrlImg: '/A13/A13 (14).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A13/A13 (15).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A13/A13 (1).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A13/A13 (2).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A13/A13 (8).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A13/A13 (9).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A13/A13 (7).jpg', alt: 'image-slug' },
            { id: '1', UrlImg: '/A13/A13 (6).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A13/A13 (5).jpg', alt: 'image-slug' },
            { id: '2', UrlImg: '/A13/A13 (4).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A13/A13 (3).jpg', alt: 'image-slug' },  
            { id: '5', UrlImg: '/A13/A13 (10).jpg', alt: 'image-slug' },
            { id: '5', UrlImg: '/A13/A13 (11).jpg', alt: 'image-slug' },
            { id: '3', UrlImg: '/A13/A13 (13).jpg', alt: 'image-slug' },
          ],
        },
      ]
    }
  },
}
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
  background: #fafafa;
  padding-top: 100px;
}

/* Gallery Header */
.gallery-header {
  text-align: center;
  padding: 80px 60px;
  background: #ffffff;
}

.gallery-title {
  font-size: clamp(42px, 6vw, 68px);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.gallery-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.title-underline {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent);
  margin: 0 auto;
}

/* Grid Section */
.gallery-grid-section {
  padding: 80px 60px;
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1600px;
  margin: 0 auto;
}

.apartment-item {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.apartment-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.apartment-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2/3; /* Visoki format za mobitele */
  width: 100%;
}

@media (min-width: 426px) {
  .apartment-image-wrapper {
    aspect-ratio: 4/3; /* Širi format */
  }
}

.apartment-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.apartment-item:hover .apartment-thumbnail {
  transform: scale(1.1);
}

.apartment-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
  display: flex;
  align-items: flex-end;
  padding: 30px;
}

.apartment-info {
  width: 100%;
}

.apartment-name {
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.apartment-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  line-height: 1.6;
}

.view-gallery-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.arrow {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.apartment-item:hover .arrow {
  transform: translateX(5px);
}

/* MODAL FIX */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-wrapper {
  max-width: 1400px;
  width: 100%;
  max-height: 95vh;
  background: #ffffff;
  border-radius: 20px;
  position: relative;
  overflow-y: auto; /* OMOGUĆAVA SCROLL CIJELOG MODALA */
  display: flex;
  flex-direction: column;
}

.modal-content-wrapper {
  display: grid;
  grid-template-areas: 
    "sidebar carousel"
    "sidebar thumbnails";
  grid-template-columns: 320px 1fr;
  grid-template-rows: 1fr auto;
  min-height: 80vh; /* Osigurava visinu na desktopu */
}

.modal-sidebar {
  grid-area: sidebar;
  padding: 40px;
  background: #fafafa;
  border-right: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-apartment-name {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
}

.modal-apartment-description {
  font-size: 15px;
  line-height: 1.7;
  color: #666;
}

.modal-image-counter {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  padding: 12px 20px;
  background: #ffffff;
  border-radius: 30px;
  text-align: center;
  margin-top: 20px;
  border: 1px solid #eee;
}

.modal-carousel-container {
  grid-area: carousel;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 40px;
  min-height: 100%;
}

.modal-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.modal-main-image {
  max-width: 100%;
  max-height: 70vh; /* Ne dopušta slici da pobjegne previše u visinu */
  object-fit: contain;
  border-radius: 12px;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  font-size: 32px;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.carousel-prev { left: 20px; }
.carousel-next { right: 20px; }

.modal-thumbnails {
  grid-area: thumbnails;
  display: flex;
  gap: 10px;
  padding: 20px 40px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  overflow-x: auto;
}

.thumbnail-item {
  width: 100px;
  height: 75px;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.6;
  border: 3px solid transparent;
}

.thumbnail-item.active {
  opacity: 1;
  border-color: #1a1a1a;
}

.thumbnail-item img { width: 100%; height: 100%; object-fit: cover; }

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  background: #fff;
  border: none;
  border-radius: 50%;
  font-size: 28px;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* RESPONSIVE SCROLL FIX */
@media (max-width: 1024px) {
  .modal-wrapper {
    max-height: 100vh;
    border-radius: 0;
  }
  
  .modal-content-wrapper {
    grid-template-areas: 
      "carousel"
      "thumbnails"
      "sidebar";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    height: 100%;
  }

  .modal-sidebar {
    border-right: none;
    border-top: 1px solid #f0f0f0;
    padding: 30px 20px;
  }

  .modal-carousel-container {
    padding: 10px;
    min-height: 300px;
  }

  .modal-main-image {
    max-height: 50vh;
  }

  .modal-thumbnails {
    padding: 15px 20px;
  }
}

@media (max-width: 768px) {
  .gallery-header, .gallery-grid-section { padding: 40px 20px; }
  .carousel-nav { width: 40px; height: 40px; font-size: 24px; }
}
</style>