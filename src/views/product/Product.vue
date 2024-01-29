<template>
    <div class="container">
        <div class="wrapper">
            <h4>Termékeink</h4>
        </div>
        <div class="wrapper">
            <div v-for="product of product" :key="product.id" 
            class=" col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["products"]
}
</script>