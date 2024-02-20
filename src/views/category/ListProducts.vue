import ProductBox from '@/components/ProductBox.vue';
<template>
    <div class="container">
        <div class="wrapper">
            <div class="col-12 text-center">
                <h4 class="pt-3">{{ category.categoryName }}</h4>
                <h5 style="font-weight: 300; color: #686868;">{{ msg }}</h5>
            </div>
        </div>
        <div class="wrapper">
            <div v-for="product of category.products" :key="product.id"
            class="col-md-4 col-xl-3 col-6 pt-3 justify-content-around d-flex">
                <ProductBox :product="product" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from "../../components/ProductBox.vue"
export default{
    data() {
        return {
            id: null,
            category: {},
            msg: ''
        }
    },
    components: {ProductBox},
    props: ["categories", ],
    mounted() {
        this.id = this.$route.params.id
        this.category = this.categories.find(
            category => category.id == this.id
        )
        if (this.category.products.length == 0) {
            this.msg = "Nem találhatóak termékek"
        } else if (this.category.products.length == 1) {
            this.msg = "Csak egy terméket találtunk"
        } else {
            this.msg = this.category.products.length + "termék található"
        }
    }
}
</script>