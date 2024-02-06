<template>
    <div class="container">
        <div class="wrapper">
            <h4 class="col-12 text-center">
                Kategória szerkesztése
            </h4>
        </div>
        <div class="blur">
            <form v-if="category" class="editcat">
                <div class="input-box">
                    <label for="name">Kategória neve</label>
                    <input type="text" class="name" v-model="categoryName" required>
                </div>
                <div class="input-area">
                    <label for="desc">Katgória Leírás</label>
                    <textarea type="text" class="desc" v-model="description" required></textarea>
                </div>
                <div class="input-box">
                    <label for="img">Kategória Képe</label>
                    <input type="url" class="img" v-model="imageUrl">
                </div>
                <button type="button" class="btn" @click="editCartegory">KÉSZ</button>
            </form>
        </div>
    </div>
</template>
<script>
//import axios from 'axios';
//import swal from 'sweetalert';
export default{
    data() {
        return{
            category: null,
            id: null
        }
    },
    props: ["baseURL", "categories"],
    methods: {
        async editCartegory(){
            delete this.category["products"]
            console.log('category', this.category)
           // await axios.post(`${this.baseURL}/category/update/${this.id}`,
           //  this.category)
           // .then(()=>{
           //         this.$emit("fetchData");
           //         this.$router.push({name: 'Category'})

           //     swal({
           //         text: "category has been updated successfully"
           //     })
           // }).catch(err => console.log('err', err));
        }
    },
    mounted(){
        this.id = this.$router.params.id;
        this.category = this.categories.find(category=> category.id == this.id)
    }
}
</script>