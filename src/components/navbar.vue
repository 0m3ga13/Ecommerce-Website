<template>
  <Disclosure as="nav" class="bg-none dark:bg-black border-b border-gray/50 dark:border-gray-900" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <router-link to="/" class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="../assets/logo.png" alt="Your Company" />
            <img class="hidden h-8 w-auto lg:block" src="../assets/logo.png" alt="Your Company" />
          </router-link>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link :to="item.href" v-for="item in navigation" :key="item.name"
                :class="{ 'bg-gray-800': $route.path === item.href, 'text-white': $route.path === item.href }"
                class='dark:text-white text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>{{
                  item.name }}</router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"  @click="toggleShoppingMenu"
            class="rounded-full bg-purple-900 p-2 text-white hover:bg-white hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transform hover:rotate-12 duration-300 ">
            <ShoppingCartIcon class="h-6 w-6 hover:transform hover:scale-125  duration-300" aria-hidden="true" />
          </button>
          <darkButton />
        </div>
      </div>
    </div>
 

    <DisclosurePanel as="nav" v-slot="{ open }" class="sm:hidden ">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <router-link v-for="item in navigation" :key="item.name" as="a" :to="item.href"
          class='text-gray-900 hover:bg-gray-700 hover:text-white dark:text-white block rounded-md px-3 py-2 text-base font-medium'
          :class="{ 'bg-gray-800': $route.path === item.href, 'text-white': $route.path === item.href }">
          <DisclosureButton> {{ item.name }}</DisclosureButton>
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <transition name="slide" >
    <shopping-menu :showShoppingMenu="showShoppingMenu" @toggleShoppingMenu="toggleShoppingMenu" />
    </transition>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, MoonIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import darkButton from './darkButton.vue'
import ShoppingMenu from './shoppingMenu.vue'

export default {
  name: 'navbar',
  components: { ShoppingMenu,  Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      Bars3Icon,
      MoonIcon,
      XMarkIcon,
      ShoppingCartIcon,
      darkButton},
  data() {
    return {
     
      navigation: [
        { name: 'Dashboard', href: '/', current: true },
        { name: 'Shop', href: '/shop', current: false },
        { name: 'About', href: '/about', current: false },
        { name: 'Contact us', href: '/contact', current: false },
      ],
      showShoppingMenu: false
    }
  },
  methods: {
    toggleShoppingMenu() {
      this.showShoppingMenu = !this.showShoppingMenu
    }
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>