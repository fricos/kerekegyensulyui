<template>
    <div class="container">
        <div class="wrapper pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img src="product.imageURL" alt="termék képe" class="img-fluid">
            </div>
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6>{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">{{ product.price }} ft</h6>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            product: {},
            category: {}
        }
    },
    props: ["baseURL", "Products", "categories"],
    mounted(){
        this.id = this.$route.params.id
        this.product = this.products.find(
            (product) => product.id == this.id
        );
        this.category = this.cattegories.find(
            category => category.id == this.product.categoryId
        );
    }
}
</script>