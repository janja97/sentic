<template>
  <div class="header">
    <div class="header-overlay"></div>
    <div class="header-content">
      <div class="title-wrapper">
        <h1 class="title">
          <span 
            v-for="(char, index) in titleChars" 
            :key="index" 
            class="title-char"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            {{ char }}
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

    const titleChars = computed(() => {
      const title = t('name');
      return title;
    });

    return {
      t,
      locale,
      titleChars
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

/* White gradient overlay */
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

/* Animated gradient overlay */
.header-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 30% 50%,
    rgba(0, 0, 0, 0.05) 0%,
    transparent 50%
  );
  animation: gradientMove 8s ease-in-out infinite;
}

@keyframes gradientMove {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(30px, 20px) scale(1.1);
    opacity: 0.8;
  }
}

.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 40px;
}

.title-wrapper {
  position: relative;
  display: inline-block;
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
  flex-wrap: wrap;
  line-height: 1.2;
}

/* Individual character animation */
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
  text-shadow: 
    0 0 30px rgba(26, 26, 26, 0.25),
    0 0 60px rgba(26, 26, 26, 0.15),
    0 4px 8px rgba(255, 255, 255, 0.4);
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

/* Elegant underline */
.title-underline {
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(26, 26, 26, 0.8) 20%,
    rgba(26, 26, 26, 0.8) 80%,
    transparent
  );
  transform: translateX(-50%);
  animation: expandLine 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0.5s forwards;
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .header {
    height: 450px;
  }

  .title {
    font-size: 42px;
    letter-spacing: 6px;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .header {
    height: 400px;
  }

  .header-content {
    padding: 0 30px;
  }

  .title {
    font-size: 32px;
    letter-spacing: 5px;
  }

  .title-underline {
    bottom: -15px;
  }
}

/* Small mobile */
@media screen and (max-width: 480px) {
  .header {
    height: 350px;
  }

  .header-content {
    padding: 0 20px;
  }

  .title {
    font-size: 28px;
    letter-spacing: 4px;
  }
}

/* Landscape mobile */
@media screen and (max-height: 500px) and (orientation: landscape) {
  .header {
    height: 100vh;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .header-overlay {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
  }

  .title {
    color: #000000;
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.8);
  }

  .title-underline {
    height: 3px;
    background: #000000;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .title-char {
    animation: none;
    opacity: 1;
  }

  .title-underline {
    animation: none;
    width: 80%;
  }

  .header-overlay::before {
    animation: none;
  }
}

/* Dark mode - maintain white overlay but adjust text */
@media (prefers-color-scheme: dark) {
  .title {
    color: #000000;
  }

  .header-overlay {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.7) 100%
    );
  }
}
</style>