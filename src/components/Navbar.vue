<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">


      <router-link :to="{ name: 'Home' }">
        <img id="logo" src="../assets/bikeicon.png" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <form class="form-inline ml-auto mr-auto">
          <div class="input-group">
            <input
              size="100"
              type="text"
              class="form-control"
              placeholder="Search Items"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="search-button-navbar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </form>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarAccount"
              data-toggle="dropdown"
            >
              Fiók
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarAccount">
              <router-link
                v-if="token"
                class="dropdown-item"
                :to="{ name: 'WishList' }"
                >Kívánság lista
              </router-link>
              <router-link
                v-if="!token"
                class="dropdown-item"
                :to="{ name: 'Signup' }"
                >Regisztráció
              </router-link>
              <router-link
                v-if="!token"
                class="dropdown-item"
                :to="{ name: 'Signin' }"
                >Bejelentkezés
              </router-link>
              <a class="dropdown-item" v-if="token" href="#" @click="signout"
                >Kilépés
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  <script>
  export default {
    name: "NavbarView",
    data() {
      return {
        token: null,
      };
    },
    methods: {
      signout() {
        localStorage.removeItem("token");
        this.token = null;
      },
    },
    mounted() {
      this.token = localStorage.getItem("token");
    },
  };
  </script>
  <style scoped>
  #logo {
    width: 150px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .nav-link {
    color: rgba(255, 255, 255);
  }
  </style>