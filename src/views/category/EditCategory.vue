<template>
    <body>
        <div class="container">
        <div class="wrapper">
            <h4 class="col-12 text-center">
                Kategória szerkesztése
            </h4>
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

    </body>
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
    },//
   // props: ["baseURL", "categories"],
    methods: {
        //async editCartegory(){
        //    delete this.category["products"]
        //    console.log('category', this.category)
           // await axios.post(`${this.baseURL}/category/update/${this.id}`,
           //  this.category)
           // .then(()=>{
           //         this.$emit("fetchData");
           //         this.$router.push({name: 'Category'})

           //     swal({
           //         text: "category has been updated successfully"
           //     })
           // }).catch(err => console.log('err', err));
       //}
    },
    mounted(){
        //this.id = this.$router.params.id;
        //this.category = this.categories.find(category=> category.id == this.id)
    }
}
</script>
<style scoped>
body {
    background: url(https://cdn.discordapp.com/attachments/1153584270158331975/1168999891318612060/szines_bicikli_illusztracio.jpg?ex=65cbc77d&is=65b9527d&hm=6c5765dcc5ea4404387493fae95a74a2fbbc91098c6d628a4b17f8d2af37be13&);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.container{
    
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
}

.wrapper {
    width: 420px;
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0 0 0 0.1);
    color: rgba(0, 0, 0, 1);
    padding: 30px 40px;
    border-radius: 10px;
}

.wrapper .input-box {
    position: relative;
    width: 100%;
    height: 30px;
    margin: 50px 0;
}

.wrapper .input-select {
    position: relative;
    width: 100%;
    height: 30px;
    margin: 50px 0;
}

.wrapper .input-area {
    position: relative;
    width: 100%;
    height: 30px;
    margin-bottom: 70px;
}

.input-box input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    padding: 20px 45px 20px 20px;
}
.input-select select{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    padding: 20px 35px 20px 20px;
}
.input-area textarea{
    width: 100%;
    height: 200%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    padding: 20px 45px 20px 20px;
}
.input-box input::placeholder, .input-area input::placeholder{
    color: rgba(0, 0, 0, 0.5);
}

.wrapper .btn {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color:black;
}

.wrapper .btn:hover {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background:rgb(240, 239, 239);
    transition: all 0.15s ease;
    transform: scale(1.02);
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color:black;
}

h4{
    font-size: 28px;
    font-weight: 550;
}
</style>