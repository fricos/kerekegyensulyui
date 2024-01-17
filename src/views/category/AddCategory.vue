<template>
    <div class="container">
        <div class="wrapper">
            <h2>Kategória hozzáadása</h2>
            <form class="addcat">
                <div class="input-box">
                    <label for="name">Kategória</label>
                    <input type="text" class="name" placeholder="Kategória neve" v-model="categoryName">
                </div>
                <div class="input-area">
                    <label for="desc">Leírás</label>
                    <textarea type="text" class="desc" placeholder="Kategória leírása" v-model="description"></textarea>
                </div>
                <div class="input-box">
                    <label for="img">Kép</label>
                    <input type="url" class="img" placeholder="Kategória képe" v-model="imageUrl">
                </div>
                <button type="button" class="btn" @click="addCartegory">KÉSZ</button>
            </form>
        </div>
    </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: "",
        };
    },
    methods: {
        addCartegory () {
            console.log(this.categoryName,this.description,this.imageUrl);
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl
            };
            baseUrl = "asd";

            axios({
                method: "POST",
                url: `${baseUrl}`,
                data: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                sweetalert({
                    text: 'Kategória sikeren hozzáadva!',
                    icon: 'success',
                })
            }).catch(err => {
                console.log(err)
            })
        }
    }
};
</script>
<style scoped>
.container{
    background: url(https://cdn.discordapp.com/attachments/1153584270158331975/1169000442756341850/65_seo_image_21_03_18_07_12_29.jpg?ex=65b01880&is=659da380&hm=46f72f42a4c53605c94ff0f8f723ff0d35841c0ff99b7836207028387eea4d86&);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.wrapper {
    width: 420px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
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
.input-area textarea{
    width: 100%;
    height: 200%;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
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
</style>
