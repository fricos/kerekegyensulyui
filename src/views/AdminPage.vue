<template>
<div class="container">
    
        <router-link :to="{name: 'Category'}">
            <button class="btn">Admin Katgóriák</button>
        </router-link>
        <br />
        <router-link :to="{name: 'AdminProduct'}">
            <button class="btn">Admin Termékek</button>
        </router-link>
        
    
</div>
</template>
<script>
export default{

}
</script>
<style scoped>
.container {
  text-align: center;
  justify-content: center;
}
.btn{
  position: relative;
  margin-top: 120px;
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
  margin-bottom: 30px;
}
</style>