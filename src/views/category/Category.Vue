<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Kategóriáink</h2>
                <router-link :to="{name: 'AddCategory'}">
                    <button class="btn">Kategória hozzáadása</button>
                </router-link>"
            </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <CategoryBox :category="category"></CategoryBox>
            </div>
        </div>
        </div>
    </div>
</template>
<script>

import CategoryBox from '../../component/category/CategoryBox.vue';
export default {
    name: "Category",
    props: ["categories"],
    components: {CategoryBox},
    data() {
        return {
            baseURL: "https://limitless-lake-55070.herokuapp.com/"
        };
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
