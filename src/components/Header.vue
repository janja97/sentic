<template>
  <div class="header">
    <div class="header-overlay"></div>
    <div class="header-content">
      <div class="title-wrapper">
        <h1 class="title">
          <span 
            v-for="(word, wIndex) in titleWords" 
            :key="'word-' + wIndex" 
            class="word-group"
          >
            <span 
              v-for="(char, cIndex) in word.chars" 
              :key="'char-' + wIndex + '-' + cIndex" 
              class="title-char"
              :style="{ animationDelay: `${(word.startIndex + cIndex) * 0.05}s` }"
            >
              {{ char }}
            </span>
          </span>
        </h1>
        <div class="title-underline"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  name: 'HeaderComponent',
  setup() {
    const { t, locale } = useI18n();

    const titleWords = computed(() => {
      const title = t('name'); // npr. "Apartmani Sentić"
      const words = title.split(' ');
      let charCounter = 0;

      return words.map((word) => {
        const wordData = {
          chars: word.split(''),
          startIndex: charCounter
        };
        // Dodajemo 1 zbog razmaka koji smo obrisali splitom
        charCounter += word.length + 1;
        return wordData;
      });
    });

    return {
      t,
      locale,
      titleWords
    };
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background-image: url('/public/background/A9bac.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.75) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.6) 100%
  );
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 40px;
  width: 100%; /* Osigurava da content uzme prostor za centriranje */
}

.title-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.title {
  font-size: 48px;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: 8px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Ovo omogućava prebacivanje cijele riječi u novi red */
  line-height: 1.4;
}

/* Ključna promjena: grupa slova se nikad ne lomi */
.word-group {
  display: inline-block;
  white-space: nowrap; 
  margin-right: 15px; /* Razmak između riječi */
}

/* Zadnja riječ ne treba desni margin */
.word-group:last-child {
  margin-right: 0;
}

.title-char {
  display: inline-block;
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  text-shadow: 
    0 0 20px rgba(26, 26, 26, 0.15),
    0 0 40px rgba(26, 26, 26, 0.1),
    0 2px 4px rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

.title-char:hover {
  transform: translateY(-5px) scale(1.1);
  text-shadow: 0 0 30px rgba(26, 26, 26, 0.25);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.title-underline {
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(26, 26, 26, 0.8), transparent);
  transform: translateX(-50%);
  animation: expandLine 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0.5s forwards;
}

@keyframes expandLine {
  to { width: 80%; }
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .header { height: 400px; }
  .title { font-size: 32px; letter-spacing: 4px; }
  .word-group { margin-right: 10px; }
}

@media screen and (max-width: 480px) {
  .title { font-size: 26px; letter-spacing: 3px; }
}
</style>