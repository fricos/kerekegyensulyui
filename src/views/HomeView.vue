<template>
  <div class="home">
    <router-link :to="{name: 'Admin'}">
      <button class="btn">Admin</button>
    </router-link>
  </div>
</template>

<script>
export default{

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
</style>
