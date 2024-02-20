<template>
    <div class="container">
        <div class="wrapper text-center">
            kép
        </div>
        <div class="wrapper">
            <h2 class="">Bejelentkezés</h2>
            <form @submit="signin" class="regform">
                <div class="input-box-1">
                    <label for="Email">Email</label>
                    <input type="email" v-model="email" class="email" placeholder="példa@példa.hu" required>
                    <i class='bx bx-envelope'></i>
                </div>
                <div class="input-box">
                    <label for="Password">Jelszó</label>
                    <input type="password" v-model="password" class="pw" placeholder="" required>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <button class="btn">Bejelentkezés</button>
            </form>
        </div>
    </div>
</template>
<script>
//import axios from 'axios';
//import swal from 'sweetalert';
export default {
    //props: ["baseURL"],
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        async signin(e) {
            e.preventDefault();
                //const body = {
                //    email: this.email,
                //    password: this.password
                //};
                //await axios.post(`${baseURL}user/signin`, body)
                //.then(()=> {
                //    this.$route.replace("/")
                //})
                //.catch((err) => console.log("err", err));
        }
    }
}
</script>
<style scoped>
.container {
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
}

.wrapper {
    width: 420px;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0 0 0 0.1);
    color: rgb(0, 0, 0);
    padding: 20px;
    border-radius: 10px;
}

form {
    border: 2px solid black;
    padding: 25px;
    border-radius: 20px;
}

label {
    font-weight: 500;
    font-size: 17px;
}

 h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
}

 .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

 .input-box-1 {
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
}

 input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border: 2px solid rgba(0, 0, 0, 1);
    border-radius: 40px;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    padding: 20px 45px 20px 20px;
}


 input::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 250;
}

 i {
    position: absolute;
    right: 20px;
    top: 100%;
    transform: translateY(-50%);
    font-size: 20px;
}

.remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: 15px 0 15px;
}

.remember-forgot label input {
    accent-color: rgba(255, 255, 255, 1);
    margin-right: 3px;
}

.remember-forgot a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(247, 247, 247);
    transition: all .02s ease-in-out;
}

.remember-forgot a:hover {
    text-decoration: underline;
    color: rgba(0, 0, 200, 1);
    cursor: pointer;
}

.btn {
    width: 100%;
    height: 50px;
    border: none;
    margin-top: 20px;
    outline: none;
    background: #fff;
    border-radius: 40px;
    border: 2px solid black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: black;
}

.btn:hover {
    width: 100%;
    height: 50px;
    border: none;
    margin-top: 20px;
    transition: all 0.15s ease;
    transform: scale(1.02);
    outline: none;
    background: #f0f0f0;
    border-radius: 40px;
    border: 2px solid black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: black;
}
</style>