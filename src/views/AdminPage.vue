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
.btn {
    padding: 20px;
    margin-bottom: 50px;
}
</style>