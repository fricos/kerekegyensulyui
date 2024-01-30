<template>
  <Navbar>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </Navbar>
  <router-view
  :baseURL="baseURL"
  :categories="categories"
  :products="products"
  ></router-view>
</template>


<script>
import Navbar from "./components/Navbar.vue"
import axios from 'axios'
export default {
    components: {Navbar},
    data() {
      return {
        baseURL: "https://limitless-lake-55070.herokuapp.com/",
        products: [],
        categories: []
      }
    },
    methods: {
      async fetchData() {
        await axios.get(this.baseURL + "category/")
        .then(res => {
          this.categories = res.data
        }).catch(err => 
          console.log('err', err));

          await axios.get(this.baseURL + "product/")
        .then(res => {
          this.products = res.data
        }).catch(err => 
          console.log('err', err));
      }
    },
    mounted() {
      this.fetchData();
    }
};
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
