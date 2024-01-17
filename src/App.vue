<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:wgth@300;400;500;600;700;800;900&display=swap");
* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "sans-serif";
    box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
