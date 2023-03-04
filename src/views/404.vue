<template>
    <section class="justify-center h-screen dark:bg-black dark:text-gray-100 text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">404

      </h1>
      <p class="mb-8 leading-relaxed">this page was not found</p>
      <div class="flex justify-center">
        <router-link to="/" class="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Redirect Home</router-link>
        <router-link to="/shop" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Start Shopping</router-link>
      </div>
    </div>
  </div>
</section>
</template>