<template>
    <div class="card w-100 h-100" style="margin-top: 10px;">
        <div class="embed-resposive embed-resposive-16by9">
            <img :src="product.imageURL" class="card-img-top embed-resposive-item" alt="kártya kép">
        </div>
        <div class="card-body">
            <router-link :to="{name: 'ShowDetails', params: {id: product.id}}">
                <h5 class="card-title">{{ product.name }}</h5>
            </router-link>
            <p class="card-text">{{ product.description.substring(0, 65) }}</p>
            <router-link :to="{name: 'EditProduct'}" v-show="$route.name == 'AdminProduct'">
                <button class="btn">Szerkesztés</button>
            </router-link>
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

a {
    text-decoration: none;
}

.card-title {
    color: black;
}
</style>