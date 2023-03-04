<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';

</script>

<template >
    
  
    <div class="wrapper dark:bg-black scroll-smooth">

<Navbar/>
  <router-view  v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

<Footer/>
</div>



</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Set wrapper height to 100% of viewport height */
}

Navbar {
  height: 10%; /* Set Navbar height to 10% of wrapper height */
}

router-view {
  flex: 1; /* Set RouteView height to fill remaining space */
}

Footer {
  height: 10%; /* Set Footer height to 10% of wrapper height */
}
</style>
