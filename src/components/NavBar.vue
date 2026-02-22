<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-background"></div>
    <div class="nav-container">
      <ul class="nav">
        <li class="nav-item" v-for="(item, index) in navItems" :key="index">
          <router-link :to="item.path" class="nav-link">
            <span class="nav-text">{{ $t(item.label) }}</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'NavBarComponents',
  setup() {
    const { t, locale } = useI18n();
    const isScrolled = ref(false);

    const navItems = [
      { path: '/', label: 'nav.about' },
      { path: '/galery', label: 'nav.gallery' },
      { path: '/contact', label: 'nav.contact' }
    ];

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      t,
      locale,
      isScrolled,
      navItems
    };
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 28px 0;
  transition: padding 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.navbar.scrolled {
  padding: 18px 0;
}

.navbar.scrolled .nav-background {
  opacity: 1;
  box-shadow: 0 1px 40px rgba(0, 0, 0, 0.04);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 2;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 12px 0;
  overflow: hidden;
}

.nav-text {
  color: #2a2a2a;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

/* Indicator linija ispod teksta */
.nav-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 1.5px;
  background: linear-gradient(90deg, 
    transparent, 
    #2a2a2a 20%, 
    #2a2a2a 80%, 
    transparent
  );
  transform: translateX(-50%);
  transition: width 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

/* Hover efekat */
.nav-link:hover .nav-text {
  color: #000;
  letter-spacing: 3px;
  transform: translateY(-2px);
}

.nav-link:hover .nav-indicator {
  width: 100%;
}

/* Active link - router-link-active */
.nav-link.router-link-active .nav-text {
  color: #000;
  font-weight: 600;
}

.nav-link.router-link-active .nav-indicator {
  width: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    #000 20%, 
    #000 80%, 
    transparent
  );
}

/* Suptilni glow efekat na aktivnom linku */
.nav-link.router-link-active .nav-text {
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

/* Tablet */
@media (max-width: 1024px) {
  .nav-container {
    padding: 0 40px;
  }

  .nav {
    gap: 50px;
  }

  .nav-text {
    font-size: 12px;
    letter-spacing: 2px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar {
    padding: 20px 0;
  }

  .navbar.scrolled {
    padding: 15px 0;
  }

  .nav-container {
    padding: 0 30px;
  }

  .nav {
    gap: 35px;
  }

  .nav-text {
    font-size: 11px;
    letter-spacing: 1.8px;
  }

  .nav-link:hover .nav-text {
    letter-spacing: 2.2px;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .nav-container {
    padding: 0 20px;
  }

  .nav {
    gap: 25px;
  }

  .nav-text {
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  .nav-indicator {
    height: 1px;
  }
}

/* Dark mode support - opciono */
@media (prefers-color-scheme: dark) {
  .nav-background {
    background: rgba(26, 26, 26, 0.85);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav-text {
    color: #e0e0e0;
  }

  .nav-indicator {
    background: linear-gradient(90deg, 
      transparent, 
      #e0e0e0 20%, 
      #e0e0e0 80%, 
      transparent
    );
  }

  .nav-link:hover .nav-text,
  .nav-link.router-link-active .nav-text {
    color: #ffffff;
  }

  .nav-link.router-link-active .nav-indicator {
    background: linear-gradient(90deg, 
      transparent, 
      #ffffff 20%, 
      #ffffff 80%, 
      transparent
    );
  }
}

/* High contrast mode za accessibility */
@media (prefers-contrast: high) {
  .nav-background {
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }

  .nav-text {
    color: #000;
    font-weight: 600;
  }

  .nav-indicator {
    height: 2px;
    background: #000;
  }
}

/* Reduce motion za accessibility */
@media (prefers-reduced-motion: reduce) {
  .navbar,
  .nav-background,
  .nav-text,
  .nav-indicator {
    transition: none;
  }
}

/* Print styles */
@media print {
  .navbar {
    position: relative;
    padding: 10px 0;
    background: white;
    border-bottom: 1px solid #000;
  }

  .nav-background {
    display: none;
  }

  .nav-text {
    color: #000;
  }

  .nav-indicator {
    display: none;
  }
}
</style>