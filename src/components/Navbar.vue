<template>
    <div>


        <nav id="navbar" class="sombra">

            <div id="navbar-menu-logo">
              <a class="navbar-item"  v-on:click="isSideBarHidden = !isSideBarHidden">  <i class='uil uil-user'></i> MENU </a>
              
            </div>


         <div id="navbar-links">
              <router-link to="/">          <a class="navbar-item">    <i class='uil uil-home-alt'></i>     INICIO   </a>  </router-link>
              <router-link to="/search">    <a class="navbar-item">    <i class='uil uil-search-alt'></i>   BUSCAR   </a>  </router-link>
              <a class="navbar-item" v-on:click="isNotificationBoxHidden = !isNotificationBoxHidden">  <i class='uil uil-envelope-alt'></i> NOTIFICACIONES </a>
              <router-link to="/signin">    <a class="navbar-item">    <i class='uil uil-user'></i>     INICIA SESIÓN   </a>  </router-link>
              <router-link to="/help">      <a class="navbar-item">    <i class='uil uil-life-ring'></i>    AYUDA    </a>  </router-link> 
         </div>
        
        </nav>









       <div id="notifications-box" v-if="!isNotificationBoxHidden">

          <div class="notification sombra roundify">  
              <div class="notification-contact">
                  <img src="../assets/user.png">
              </div>
              <div class="notification-message">
                  <p>hello new user and welcome to bright gardens</p>
              </div>
          </div>



          <div class="notification sombra roundify">  
              <div class="notification-contact">
                  <img src="../assets/user.png">
              </div>
              <div class="notification-message">
                  <p>enjoy the tour</p>
              </div>
          </div>

       </div>















        <div id="sidebar" class="sombra" v-if="!isSideBarHidden">

            <div id="sidebar-user-info">
                
                <div id="sidebar-user-img">
                    <img src="../assets/user.png">
                </div>

                <h1>USER NAME</h1>
                <p>useremail@gmail.com</p>

            </div>


          <div id="sidebar-links">
              <router-link to="/perfil">      <a class="sidebar-item">    <i class='uil uil-home-alt'></i>       PERFIL        </a>   </router-link> 
              <router-link to="/inbox">       <a class="sidebar-item">    <i class='uil uil-mailbox'></i>        INBOX         </a>   </router-link>   
              <router-link to="/calendar">    <a class="sidebar-item">    <i class='uil uil-calendar-alt'></i>   CALENDARIO    </a>   </router-link>   
              <router-link to="/clients">     <a class="sidebar-item">    <i class='uil uil-users-alt'></i>      CLIENTES      </a>   </router-link>   
              <router-link to="/suppliers">   <a class="sidebar-item">    <i class='uil uil-truck'></i>          SUPLIDORES    </a>   </router-link>   
              <router-link to="/notes">       <a class="sidebar-item">    <i class='uil uil-notes'></i>          NOTAS         </a>   </router-link>   
              <router-link to="/reports">     <a class="sidebar-item">    <i class='uil uil-clipboard-alt'></i>  REPORTES      </a>   </router-link>   
              <router-link to="/documents">   <a class="sidebar-item">    <i class='uil uil-document'></i>       DOCUMENTOS    </a>   </router-link>   
              <router-link to="/themes">      <a class="sidebar-item">    <i class='uil uil-layer-group'></i>    PERSONALIZAR  </a>   </router-link>   
              <router-link to="/settings">    <a class="sidebar-item">    <i class='uil uil-cog'></i>            AJUSTES       </a>   </router-link>   
             <a class="sidebar-item">   <i class='uil uil-sign-out-alt'></i>CERRAR SESION    </a>
          </div>
        
        </div>




    </div>    
</template>




<script>
export default {
    name: 'Navbar',
    data(){
        return{


          isSideBarHidden: true,
          isNotificationBoxHidden: true



        }
    }
}
</script>






<style scoped>


  #navbar{
      width: 100%;
      margin: auto;
      padding: 0px 22px;

      position:fixed;
      top:0;

      z-index: 12;

      display: flex;

      justify-content: space-between;

      background: white;
      white-space: nowrap;
      overflow: hidden;
      overflow-x: auto;
      overflow-y: hidden;
  }
  .navbar-item{
      padding: 10px 16px;
      font-size:14px;

      display: inline-block;
      align-self: middle;

      outline:none;
      cursor:pointer;
  }
  #navbar-menu-logo{
      font-size:2px;
      padding: 0 30px 0 0;
  }


  #sidebar{
      width:280px;
      height: 100vh;
      border:solid thin rgba(0,0,0,0.1);
      margin:auto;
      position:fixed;
      top:0;
      left:0;
      padding:44px 0;
      display: flex;
      flex-direction: column;
      text-align: justify;
      z-index: 11;
      background: white;
      

  }
  .sidebar-item{
      display: inline-block;
      padding: 10px 32px;
      width: 100%;
      margin: 2px auto 2px auto;
      font-size:14px;
      cursor:pointer;
      outline:none;
      align-self: middle;
  }
  #sidebar-user-img{
      width: 60%;
      margin: 0px auto 22px auto;
      overflow: hidden;
  }
  #sidebar-user-info{
      width: 100%;
      text-align:center;
      padding:22px;
      font-size:14px;
      margin: 1px auto 2px auto;
  }
  #sidebar-user-info h1{
      font-size:22px;
      letter-spacing: 0.5px;
  }



 




 /*animations*/

 .navbar-item:hover{
     padding:10px 26px;
     margin: auto 5px auto 5px;
     background: rgba(100,100,100,0.1);
 }
 .sidebar-item:hover{
     padding: 18px 32px;
     margin:  5px auto 5px auto;
     background: rgba(100,100,100,0.1);
 }





/* notifications */


#notifications-box{
    width: 364px;
    padding:10px;

    display: flex;
    flex-direction: column;
    
    margin: -72px 0 auto auto;
    position:fixed;
    right:0;
    top:0;
    margin-top:45px;
    
}

.notification{
    display:flex;
    width:auto;
    max-width:100%;
    padding:12px;
    justify-content: space-between;
    align-self: middle;
    cursor:pointer;
    background: white;
    margin: 2px auto 10px auto;
}

.notification-contact{
    width:15%;
    align-self: middle;
    margin:auto;
    padding:0;
    display: inline-block;
}
.notification-message{
    width: 70%;
    align-self: middle;
    margin:auto;
    overflow: hidden;
    text-align:justify;
    white-space: nowrap;
    overflow-x: auto;
    padding:0;
    display: inline-block;
}
.notification-message::-webkit-scrollbar{
    display:none;
}
.notification-message p{
    align-self: middle;
    margin:auto;
    display:inline-block;
}
</style>
