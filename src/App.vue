<template>
  <router-view
  style="min-height: 60vh;" 

  :categories="categories"
  :products="products"
  
  ></router-view>
<Footer />
</template>


<script>
import Footer from '@/components/Footer.vue';
//import Navbar from '@/components/Navbar.vue';
//import axios from 'axios'
export default {
    components: { Footer,  },
    data() {
        return {
            products: null,
            categories: null
        };
    },
    
}
//    methods: {
//      async fetchData() {
//        await axios.get(this.baseURL + "category/")
//        .then(res => {
//          this.categories = res.data
//        }).catch(err => 
//          console.log('err', err));
//
//          await axios.get(this.baseURL + "product/")
//        .then(res => {
//          this.products = res.data
//        }).catch(err => 
//          console.log('err', err));
//      }
//    },
//    mounted() {
//      this.fetchData();
//    }
//};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:wgth@300;400;500;600;700;800;900&display=swap");
* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "sans-serif";
    box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
