<template>
  <div id="app">
 

      <Navbar/>  
      <router-view  style="margin: -22px auto auto auto;"/>


  </div>
</template>





<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {

    Navbar
 
    
  }
}
</script>









<style>

 @import url('https://fonts.googleapis.com/css?family=Roboto');


#app,html {
  font-family: 'Roboto', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  user-select: none;
}

  a,p,li,h1,h2,h3,small,li,i,ul,div{
    color: #2c3e50 !important;
    text-decoration: none !important;
    transition: all ease-in-out 0.6s;
  }

  .sombra{
    box-shadow: 0 1px 10px 2px rgba(0,0,0,0.1);
  }

  img{
    max-width: 100%;
    max-height: auto;
    width:100%;
    height: auto;
    object-fit: cover;
  }

  .roundify {
    border:none;
    outline:none;
    border-radius:8px;
  }


</style>
