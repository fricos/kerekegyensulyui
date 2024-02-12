<template>
    <div class="container">
        <div class="wrapper">
            <div class="col-12 text-center">
                <h4 class="pt-3">{{ category.categoryName }}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            id: null,
            category: {}
        }
    },
    props: ["categories", ],
    mounted() {
        this.id = this.$route.params.id
        this.category = this.categories.find(
            category => category.id == this.id
        )
    }
}
</script>