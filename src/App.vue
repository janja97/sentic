<template>
  <nav class="justify-content-center">
      <Navbar />
  </nav>
  <Header></Header>

  <router-view/>
  <Footer />


</template>

<script>
import Navbar from "@/components/NavBar.vue";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


export default {
  components: {
    Navbar,
    Header,
    Footer
  },
};
</script>
<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
nav {
  position: absolute;
  width: 100%;
  display:flex; 
}


</style>
