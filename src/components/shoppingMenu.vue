<template>
    <div class="fixed inset-0 overflow-hidden z-20" v-if="showShoppingMenu">
        <div class="absolute inset-0 overflow-hidden">
            <!-- Background overlay, show/hide based on slide-over state. -->
            <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                <!-- Shopping menu panel, show/hide based on slide-over state. -->
                <div class="w-screen max-w-md">
                    <div
                        class="h-full divide-y divide-gray-200 flex flex-col bg-white dark:bg-black dark:text-white shadow-xl">
                        <div class="flex-1 h-0 overflow-y-auto">
                            <!-- Close button -->
                            <div class="px-4 py-3">
                                <button @click="closeShoppingMenu" type="button"
                                    class="bg-white rounded-md text-gray-400 dark:text-white dark:bg-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                                    <span class="sr-only">Close panel</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <!-- Shopping cart items -->
                            <div class="flex flex-wrap justify-center items-center px-4  py-6 ">
                                <h2 class="text-2xl mb-10 dark:text-gray-200 text-gray-900">Shopping Cart</h2>
                                <div class="mt-4  space-y-4" v-for="item in BoughtItems">
                                    <div class="flex">
                                        <img class="h-20 w-1/2 object-cover rounded-md" :src=item.imagesrc alt="">
                                        <div class="mx-3">
                                            <h3 class="text-xl text-gray-600 dark:text-gray-300">{{ item.itemName }}</h3>
                                            <div class="flex items-center justify-center mt-2">
                                                <button class="text-gray-500 hover:outline-none hover:text-green-400">
                                                    <svg class="h-8 w-8" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path
                                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                </button>
                                                <span class="text-gray-700 dark:text-white text-xl mx-2">{{
                                                    item.numberOfItems }}</span>
                                                <button class="text-gray-500 hover:outline-none hover:text-red-400">
                                                    <svg class="h-8 w-8" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                class="w-2/5 mt-20 py-4 bg-purple-800/50 text-white text-md uppercase font-medium rounded-xl text-center hover:bg-purple-500 focus:outline-none focus:bg-purple-500 ">
                                <span>CheckOut</span>
                                
                            </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { XMarkIcon } from '@heroicons/vue/24/outline'

export default {
    props: {
        showShoppingMenu: Boolean,
    },

    emits: ['toggle-shopping-menu'],

    methods: {
        closeShoppingMenu() {
            this.$emit('toggle-shopping-menu')
        },
    },

    components: {
        XMarkIcon,
    },
    data() {
        return {

            BoughtItems: [
                {
                    brandname: 'DELL', itemName: 'DELL Laptop', Promo: 'true',
                    imagesrc: 'https://source.unsplash.com/Gi3iUJ1FwxI/1600x900', price: "$58.00", numberOfItems: "2"
                },
                {
                    brandname: 'DELL', itemName: 'DELL Laptop', Promo: 'true',
                    imagesrc: 'https://source.unsplash.com/Gi3iUJ1FwxI/1600x900', price: "$58.00", numberOfItems: "2"
                },
                {
                    brandname: 'DELL', itemName: 'DELL Laptop', Promo: 'true',
                    imagesrc: 'https://source.unsplash.com/Gi3iUJ1FwxI/1600x900', price: "$58.00", numberOfItems: "2"
                },]

        }
    },
}
</script>
  
