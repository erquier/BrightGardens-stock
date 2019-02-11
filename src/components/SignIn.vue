<template>
  <div class="form-inline">
    <h3>Inicia Sesion</h3>
    <div class="form-grop">
      <input
      id="email"
      type="text"
      placeholder="email"
      class="form-control"
      v-model="email"
      />
         <input
         id="password"
      type="password"
      placeholder="password"
      class="form-control"
      v-model="password"
      />
      <br><br>
      <button class="btn btn-primary" @click="signIn">Inicia Sesion</button>
    </div>
    <br><br>
    <router-link to="/signup" >No estas registrado? Registrate Aqui</router-link>
    <p>{{error.message}}</p>
    <br>
  </div>
</template>

<script>
import {firebase, firebaseApp} from '../firebaseApp'
  export default{
    data(){
      return{
        email:'',
        password:'',
        error:{
          message:''
        }
      }
    },
          methods: {
        signIn(){
          firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(error=>{
            this.error = error
          })
        }
      }
  }
</script>

<style scoped>

#form-inline{

      width:30%;
      margin:auto;
      display: inline-block;
      align-self: middle;
      border-right:solid thin rgba(0,0,0,0.1);
      padding:22px;
      min-height: inherit;
      height: inherit;
      overflow: hidden;
      overflow-y: auto;
}
</style>
