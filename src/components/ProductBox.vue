<template>
    <div class="card w-100 h-100" style="margin-top: 10px;">
        <div class="embed-resposive embed-resposive-16by9">
            <img :src="product.imageURL" class="card-img-top embed-resposive-item" alt="kártya kép">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description.substring(0, 65) }}</p>
            <a href="#" class="btn">go somewhere</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductBox",
    props: ["product"]
}
</script> 
<style scoped>
.card-img-top {
    object-fit: cover;
}
</style>