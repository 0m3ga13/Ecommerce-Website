<template>

    <div class=" overflow-auto dark:bg-black dark:tex-gray-900">

        <div class="flex mt-10 justify-center items-center">
                
                    
                    <select 
                        class="cursor-pointer px-2 bg-transparent outline-none dark:text-white  border-0 border-b-2 dark:text-white dark:bg-black/80 dark:border-gray-700  border border-gray-100/20  text-center hover:border-purple-500 px-4 py-2 rounded-md shadow leading-tight focus:outline-none peer"
                        v-model="category">
                        <option  class="hover:bg-green-100" value=""> --Choose a category -- </option>
                        <option  v-for="category in categories" :key="category">{{ category }}</option>
                    </select>
                </div>
            
        <product-list :products="filteredProducts" />
    </div>
</template>
  
<script>
import DarkButton from '../components/darkButton.vue';
import ProductList from '../components/ProductList.vue';

export default {
    components: {
        ProductList
    },
    data() {
        return {
            products: [
                { name: 'DELL XPS 17', href: '#', category: 'Laptop', image: "https://source.unsplash.com/yNvVnPcurD8/428x286", price: '450' },
                { name: 'Mac Book Air 2', href: '#', category: 'Laptop', image: 'https://source.unsplash.com/1SAnrIxw5OY/428x286', price: '18.40' },
                { name: 'Gaming PC', href: '#', category: 'Desktop PC', image: 'https://source.unsplash.com/Bp3KmTZQlfw/428x286', price: '18.40' },
                { name: 'Wireless Apple Keyboard', href: '#', category: 'Keyboards', image: 'https://source.unsplash.com/PXaQXThG1FY/428x286', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
                { name: 'The 400 Blows', href: '#', category: 'Category', image: 'https://dummyimage.com/428x268', price: '18.40' },
            ],
            category: ''
        };
    },
    computed: {
        categories() {
            return [...new Set(this.products.map(product => product.category))];
        },
        filteredProducts() {
            console.log('Category:', this.category);
            if (!this.category) {
                return this.products;
            }
            const filtered = this.products.filter(product => product.category === this.category);
            console.log('Filtered Products:', filtered);
            return filtered;
        }
    },
  
};
</script>
  
