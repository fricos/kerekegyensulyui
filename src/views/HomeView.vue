<template>
  <div id="home">
    <router-link :to="{name: 'Admin'}">
      <button class="btn">Admin</button>
    </router-link>
    <div id="background-div" class="page-holder">
      <div class="container">
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
  </div>
</template>

<script>
import CategoryBox from '@/components/category/CategoryBox.vue';
export default{
  name: "Home-page",
  components: {CategoryBox},
  props: ["categories"],
  data() {
    return {
      categorySize: 0
    }
  },
  mounted() {
    this.categorySize = Math.min(20, this.categories.length)
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
  align-items: flex-start;
  margin-top: 10px;
  background-color: aliceblue;
}
.container {
  padding-top: 100px;
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
  background: url(https://cdn.discordapp.com/attachments/1153584270158331975/1168999891318612060/szines_bicikli_illusztracio.jpg?ex=65cbc77d&is=65b9527d&hm=6c5765dcc5ea4404387493fae95a74a2fbbc91098c6d628a4b17f8d2af37be13&);
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
