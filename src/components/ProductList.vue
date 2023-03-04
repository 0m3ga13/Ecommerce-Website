<template>

  <section class="h-screen text-gray-600 body-font dark:text-white">
    <div class="container mt-8 mx-auto space-x-10 ">
      <div class="flex flex-wrap">
        <router-link to="buyItem" v-for="product in products" :key="product.id" class="border-none lg:w-1/5 md:w-1/2 p-4 w-full  hover:bg-purple-100 focus:bg-purple-100 hover:text-gray-800 focus:text-gray-800  rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:shadow-gray-900/60 hover:transform hover:scale-105 duration-300 ">
          

          <a   class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
              :src=product.image>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.category}}</h3>
            <h2 class="title-font text-lg font-medium">{{ product.name }}</h2>
            <p class="mt-1">${{ product.price }}</p>
          </div>
        </router-link>
        </div>

    </div>
  </section>
</template>

<script>
import darkButtonVue from './darkButton.vue';
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>
