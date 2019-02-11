<template>
<div class="form-inline">
    <h2>Escribe tu correo</h2>
    <h4>Para reestablecer tu contraseña</h4>
    <div class="form-goup">
         <input
      id="email"
      type="text"
      placeholder="email"
      class="form-control"
      v-model="email"
      />

    </div>
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
