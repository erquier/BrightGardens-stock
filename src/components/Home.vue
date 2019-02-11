<template>
 <div>



   <div id="home-welcome" class="sombra roundify">
     <h1> Hello  {{name}}!</h1>
     <h3>Welcome to BrightGardens</h3>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia reprehenderit facere doloribus! Voluptatibus ullam nisi tempore quis fugiat, aliquid ratione et. Repudiandae libero eos, eveniet perspiciatis odit doloribus officiis neque!</p>
     <button class="roundify">Iniciar tour guiado</button>
   </div>






    <div id="dashboard" class="sombra roundify row">



        
        <div id="dashboard-header" class="dashboard-item">
          <div class="dashboard-item-header"><h1>DASHBOARD</h1></div>

          <div class="dashboard-item-content">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos voluptatem alias impedit repudiandae? Laborum, praesentium. Quam sequi illo placeat praesentium vero, animi, assumenda possimus laboriosam, quis quibusdam doloremque quae!</p>

          </div>
        </div><!---dashboard item-->


        <div id="dashboard-messages" class="dashboard-item">
          <div class="dashboard-item-header"><h1>MENSAJES</h1></div>

          <div class="dashboard-item-content">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos voluptatem alias impedit repudiandae? Laborum, praesentium. Quam sequi illo placeat praesentium vero, animi, assumenda possimus laboriosam, quis quibusdam doloremque quae!</p>

          </div>
        </div><!---dashboard item-->


        <div id="dashboard-events" class="dashboard-item">
          <div class="dashboard-item-header"><h1>EVENTOS</h1></div>

          <div class="dashboard-item-content">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos voluptatem alias impedit repudiandae? Laborum, praesentium. Quam sequi illo placeat praesentium vero, animi, assumenda possimus laboriosam, quis quibusdam doloremque quae!</p>

          </div>
        </div><!---dashboard item-->
     



     



    </div><!---dashboard--->
    
















 </div>   
</template>




<script>
export default {
    name: 'Home',
    data(){
        return{


          name: 'Luis Melo',





        }
    }
}
</script>




<style scoped>


    #home-welcome{
      width:80%;
      margin:auto auto 122px auto;
      padding: 50px;
    }
    #home-welcome h1{
      font-size:40px;
    }
    #home-welcome h3{
      font-size:26px;
      margin: 22px auto 22px auto;
    }
    #home-welcome p{
      width:40%;
      margin: auto;
      text-align: justify;
      text-justify: inter-word;
    }
    #home-welcome button{
      padding: 10px 22px;
      margin: 32px auto auto auto;
    }





    #dashboard{
      width:90%;
      margin:auto auto 100px auto;
    }
    #dashboard-header{
      width: 100%;
      margin:auto;
      border-bottom: solid thin rgba(0,0,0,0.2);
    }
    #dashboard-messages{
      width:50%;
      border-right:solid thin rgba(0,0,0,0.1);
    }
    #dashboard-events{
      width:50%;
      border-left: solid thin rgba(0,0,0,0.1);
    }

    .dashboard-item{
      margin: auto;
      display: inline-block;
      align-self: center;
      justify-self: center;
      padding:22px;
    }
    .dashboard-item-header{
      width:100%;
      display:flex;
      padding:10px;
    }
    .dashboard-item-header h1{
      align-self: middle;
      margin:auto;
      padding: 10px;
      font-size:22px;
    }
    .dashboard-item-content{

      padding:18px;

    }


</style>