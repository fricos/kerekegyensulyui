<template>
    <div class="card w-100 h-100" style="margin-top: 10px;">
        <div class="embed-resposive embed-resposive-16by9">
            <img src="category.imageUrl" class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">{{ category.description }}</p>
            <a href="" class="btn btn-primary"></a>
        </div>
    </div>
</template>
<script>
export default {
    name: "CategoryBox",
    props: ["category"],
    methods: {},
};
</script>
<style>
.card-img-top {
    object-fit: cover;
}
</style>