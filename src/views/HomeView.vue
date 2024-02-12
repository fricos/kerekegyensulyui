<template>
  <div id="home">
    <router-link :to="{name: 'Admin'}">
      <button class="btn">Admin</button>
    </router-link>
    <div id="background-div" class="page-holder">
      <div class="container text-center">
        <button class="btn-2">Bérles</button>
        <p>Bérelj nálunk környezetbarát közlekedésiezközöket!</p>
      </div>
    </div>
    <div class="container-2">
      <div class="wrapper">
        <div class="col-12 text-center">
          <h2 class="pt-3">Kategóriáink</h2>
        </div>
      </div>
      <div class="wrapper">
        <div v-for="index in this.categorySize" :key="index" class="col-md-4 col-xl-3 col-6 pt3 justify-content-around d-flex">
          <CategoryBox :category="categories[index-1]"></CategoryBox>
        </div>
      </div>
    </div>
    <div class="container-3">
      <div class="wrapper">
        <div class="col-12 text-center">
          <h2 class="pt-3">Termékeink</h2>
        </div>
      </div>
      <div class="wrapper">
        <div v-for="index in this.productSize" :key="index" class="col-md-4 col-xl-3 col-6 pt3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]"></ProductBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue';
import CategoryBox from '@/components/category/CategoryBox.vue';
export default{
  name: "Home-page",
  components: { CategoryBox, ProductBox },
  props: ["categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  mounted() {
    //this.categorySize = Math.min(8, this.categories.length);
    //this.productSize = Math.min(12, this.products.length);
  }
}
</script>
<style scoped>
.btn{
  position: relative;
  margin-top: 20px;
  width: 310px;
  height: 50px;
  border: none;
  outline: none;
  background: rgb(240, 239, 239);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color:black;
}
p {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  background-color: aliceblue;
}
.container {
  padding-top: 100px;
}
.container-2 {
  margin-top: 20px;
}
.container-3 {
  margin-top: 30px;
  margin-bottom: 15px;
}
.btn-2{
  position: relative;
  margin-top: 0px;
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  background: rgb(240, 239, 239);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color:black;
}
.btn-2:hover{
  transition: all 0.1s ease-in-out;
  transform: scale(1.03);
  background: rgb(215, 214, 214);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color:black;
}
.page-holder {
  min-height: 100vh;
}
#background-div {
  background: url(https://media.discordapp.net/attachments/1156291108968599632/1158446568391856258/ironbike-2020-szeged-alfold-zsigacsaba-kerekpartura-bekescsaba-kerekparut-bringazas.jpg?ex=65dcc1f0&is=65ca4cf0&hm=ce3cb23255c5c18c97fc4645deab5326f49f5e3bb3762058c3f1ccb298f13961&=&format=webp&width=1183&height=666);
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
