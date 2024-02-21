<template>
  <div id="home">
    <router-link :to="{name: 'Admin'}">
      <button class="btn">Admin</button>
    </router-link>
    <div id="background-div" class="page-holder">
      <div class="container text-center">
        <h1>Kerekegyensúly</h1>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="motto">
          <button class="btn-2">Bérles</button>
          <p>Mozgás, Élet, Energia Kerekegyensúly</p>
        </div>
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
    <div class="container-4">
      <div class="wrapper">
        <div class="col-12 text-center">
          <h2 class="pt-3">Rólunk</h2>
        </div>
      </div>
      <div class="wrapper">
        <div class="aboutus">
          <h4 class="text-center">Sziasztok, mi a Kerekegyensúly bicikli és elektromos roller kölcsönző vagyunk</h4>
          <h3>Célunk:</h3>
          <p>
            A Szeged város zöldebbé tétele, azzal hogy kibérlelik elekromos rollereinket ahelyett hogy járművükkel járnának az emberek a mindennapjaikban.
            A családok és a gyerekek 
            Mottónk az emberek mozgásra ösztönzése illetve a zöld élet népszerűsítése. 
          </p>
          <h3>Előnyeink:</h3>
          <ul>
            <li>A túrázok minden túra előtt tetszés szerint tudnak választani túravezetőink közül.</li>
            <li>Ha probléma akad a bicikli vagy az elektromos rollerrel kapcsolatban, akkor tudunk segíteni.</li>
            <li>Turisták számára a cégünk kínál e-térképet rajta a látványosságokkal illetve népszerű útvonalainkal.</li>
            <li>A vásárlóink a lehető legjobb és legmodernebb bicikli és ellektromos roller kínálatból válasszhassanak.</li>
            <li>Mindezek mellett a túrázóknak van lehetőség többféle túraútvonal kiválasztására is, a hangulatos rövid családi kirándulás vagy akár a több napig is tartó túrák, nálunk mindent megtalál.</li>
          </ul>
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
.aboutus {
  margin: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.aboutus p {
  text-align: start;
}
h1 {
  font-family: "Barlow"; 
  font-weight: 600;
  font-size:42px;
}
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
  text-align: center;
  margin-top: 10px;
  background-color: transparent;
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
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color:black;
}
.btn-2:hover{
  transition: all 0.1s ease-in-out;
  transform: scale(1.03);
  background: transparent;
  border-radius: 5px;
  border: solid 1px black;
  cursor: pointer;
  color:black;
}
.page-holder {
  min-height: 100vh;
}
#background-div {
  background: url(https://cdn.discordapp.com/attachments/1156291108968599632/1209414764426428466/dej8o3m-81588b1a-a12b-4916-ac5b-f645f42b26f7.png?ex=65e6d645&is=65d46145&hm=90de3ffeb26386ad642de190946d70dd39c8076e1fd791598a9f046c16d5e2db&);
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center;
}
</style>


