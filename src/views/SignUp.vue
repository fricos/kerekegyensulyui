
<template>
    <div class="container">
        <div class="wrapper text-center">
            kép
        </div>
        <div class="wrapper">
            <h2 class="">Regisztráció</h2>
            <form @submit="signup" class="regform">
                <div class="input-box-1">
                    <label for="Email">Email</label>
                    <input type="email" v-model="email" class="email" placeholder="példa@példa.hu" required>
                    <i class='bx bx-envelope'></i>
                </div>
                <div class="input-box">
                    <label for="Lname">Vezetéknév</label>
                    <input type="text" v-model="lastName" class="lname" placeholder="Varga" required>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <label for="Fname">Keresztnév</label>
                    <input type="text" v-model="firstName" class="fname" placeholder="Márk" required>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <label for="Password">Jelszó</label>
                    <input type="password" v-model="password" class="pw" placeholder="" required>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <div class="input-box">
                    <label for="PasswordC">Jelszó megerősítése</label>
                    <input type="password" v-model="passwordConfrim" class="pwc" placeholder="" required>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <button class="btn">Regisztráció</button>
            </form>
        </div>
    </div>
</template>
<script>
//import axios from 'axios';
export default {
    //props: ["baseURL"],
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            passwordConfirm: null
        }   ;
    },
    methods: {
        async signup(e) {
            e.preventDefault();
            if (this.password === this.passwordConfirm) {
                //const user = {
                //    email: this.email,
                //    firstName: this.firstName,
                //    lastName: this.lastName,
                //    password: this.password
                //};
                //await axios.post(`${baseURL}user/signup`, user)
                //.then(()=> {
                //    this.$route.replace("/")
                //    swal({text: 'Sikeres regisztráció, kérjük jelentkezzen be', icon: "success"})
                //})
            } else {
                alert
                //swal({text: 'Sikertelen regisztráció a jelszavak nem egyeznek meg', icon: "error"})
            }
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