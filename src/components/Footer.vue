<template>
    <footer>
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-4 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold pb-2"><h3>Tudj meg rólunk többet!</h3></li>
              <li><a class="footer-link font-weight-light" href="#">Rólunk</a></li>
              <li><a class="footer-link font-weight-light" href="#">Android App</a><br></li>
            </ul>
          </div>
  
          <div class="col-md-4 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold"><h3>Kapcsolatok</h3></li>
              <li><a class="footer-link font-weight-light" href="#">Facebook</a></li>
              <li><a class="footer-link font-weight-light" href="#">Twitter</a><br></li>
              <li><a class="footer-link font-weight-light" href="#">Instagram</a><br></li>
            </ul>
          </div>
  
          <div class="col-md-4 col-6">
            <ul style="list-style-type: none">
              <li class="text-light font-weight-bold"><h3>Egyéb</h3></li>
              <li><a class="footer-link font-weight-light" href="#">Visszatérítés</a></li>
              <li><a class="footer-link font-weight-light" href="#">súgó</a><br></li>
            </ul>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <div class="text-center py-5">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name : "FooterView"
  }
  </script>
  
  <style>
  footer {
    margin-top : 100px;
    background-color:#232F3E;
    font-size:16px;
  }
  
  li {
    padding-left: 0;
    padding-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    font-size: 15.75px;
  }

  a:hover {
    text-decoration: none;
    font-size: 16px;
    color:  #ffc7c7;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
  
  #logo {
    width: 150px;
  }
  
  footer {
    font-family: 'Roboto', sans-serif;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 550;
  }
  </style>