<template>
<div>

     
     <div id="inbox-container" class="sombra roundify">


          <div id="inbox-messages">

                 
             <div class="inbox-message roundify sombra" v-for="(message,inbox) in messages" :key='inbox'>  
                 <img src="../assets/user.png" class="inbox-message-img">
                 
                 <div class="inbox-message-user">
                 <h3 class="inbox-message-name">{{message.name}}</h3>
                 <br>
                 <p class="inbox-message-text">{{message.msg}}</p>
                 </div>

                 <small class="inbox-message-status">{{message.status}}</small>
             </div><!--inbox message-->


          </div><!--inbox messages-->


          <div id="inbox-chat">

              <div class="inbox-chat-header" v-for="(chat,dataChat) in chats" :key='dataChat'>
                
                <img src="../assets/user.png" class="inbox-message-img"> 
                <h3 class="inbox-message-name">{{chat.name}}</h3>
                <button><i class='uil uil-ellipsis-v'></i></button>

              </div><!--inbox chat header-->



                <div class="inbox-chat-content">

                    <div class="inbox-chat-content-render"  v-for="(content,dataTalks) in talks" :key='dataTalks'>

                       
                         <p class="inbox-chat-contact inbox-chat-message"> {{content.contact}}</p>
     
                         <p class="inbox-chat-me inbox-chat-message">{{content.me}} </p>


                     </div>
                </div>




              <div class="inbox-chat-footer">
                  
                  <div class="inbox-chat-footer-left">
                  <button><i class='uil uil-grin'></i></button>
                  </div>

                  <input type="text">
                  
                  <div class="inbox-chat-footer-right">
                     <button><i class='uil uil-paperclip'></i></button>
                     <button><i class='uil uil-message'></i></button>
                  </div>
              
              </div>
              
          </div><!---inbox chat-->



     </div>








</div>
</template>

<script>
export default {
    name: 'Inbox',
    data(){
        return{


          messages: [
              {name: 'Chat Bot', msg: 'hola usuario', status: '10:40 AM'},
              {name: 'Carlos', msg: 'lorem ipsum blah lbah lbah', status: '10:40 AM'},              {name: 'Chat bot', msg: 'hola usuario', status: '10:40 AM'},
              {name: 'Jose Ramirez Vasquez', msg: 'lorem ipsum blah lbah lbah', status: '10:40 AM'},              {name: 'Chat bot', msg: 'hola usuario', status: '10:40 AM'},
              {name: 'Bright Gardens Especial Services', msg: 'lorem ipsum blah lbah lbah', status: '10:40 AM'},              {name: 'Chat bot', msg: 'hola usuario', status: '10:40 AM'},
              {name: 'Carlos', msg: 'lorem ipsum blah lbah lbah', status: '10:40 AM'},              {name: 'Chat bot', msg: 'hola usuario', status: '10:40 AM'},
              {name: 'Carlos', msg: 'lorem ipsum blah lbah lbah', status: '10:40 AM'},              {name: 'Chat bot', msg: 'hola usuario', status: '10:40 AM'},
              {name: 'Carlos', msg: 'lorem ipsum blah lbah lbah', status: '10:40 AM'},
              
          ],

          chats: [
              {name: 'Chat Bot'},
          ],

          talks: [ 
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah'},
              {me:'blah blah blah'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                           {me:'blah blah blah'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit tempora omnis, aliquid quis odio molestias corporis dicta, repellat eum ipsam enim aliquam consequatur perferendis nesciunt officia perspiciatis soluta harum!'},
              {me:'blah blah blah'},
              {me:'blah blah blah'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah'},
              {me:'blah blah blah Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit tempora omnis, aliquid quis odio molestias corporis dicta, repellat eum ipsam enim aliquam consequatur perferendis nesciunt officia perspiciatis soluta harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit tempora omnis, aliquid quis odio molestias corporis dicta, repellat eum ipsam enim aliquam consequatur perferendis nesciunt officia perspiciatis soluta harum!'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                           {me:'blah blah blah'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah'},
              {me:'blah blah blah'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
                            {me:'blah blah blah',contact:'ahsfkasfjashf'},
              {me:'blah blah blah',contact:'ahsfkasfjashf'},
          ]





        }
    }
}
</script>

<style scoped>


  #inbox-container{
      width:80%;
      margin: auto;
      display:flex;
      justify-content: space-between;
      align-content: center;
      min-height:420px;
      height: 840px;
  }
  #inbox-messages{
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
  #inbox-messages::-webkit-scrollbar{
      padding:0;
      display:none;
  }
  #inbox-chat{
      width:75%;
      margin: auto;
      display: inline-block;
      min-height:300px;
      align-self: middle;
      padding:22px;
      position: relative;
  }



  .inbox-message{
      width: 100%;
      display: flex;
      align-self: middle;
      justify-content: space-between;
      margin:10px auto 22px auto;
      padding:10px;
  }
  .inbox-message img{
      width: 50px;
      height: 50px;
      margin:auto 2px auto 2px;
  }
  .inbox-message img,h3,p,small{
      display: inline-block;
      align-self: middle;
  }
  .inbox-message-user{
      text-align: left;
      width: 70%;
      overflow: hidden;
      overflow-x: auto;
      margin:auto 5px auto 5px;
  }
  .inbox-message h3{
      font-size:18px;
      width: 100%;
      white-space: nowrap;
      margin: auto;
  }
  .inbox-message p{
      font-size:12px;
      width: 100%;
      white-space: nowrap;
      margin: auto;
  }
  .inbox-message-user::-webkit-scrollbar{
      display: none;
      padding:0;
  }
  .inbox-message small{
      font-size:10px;
      width:10%;
      margin:auto 1px auto 1px;
  }



  .inbox-chat-header{
      width:100%;
      display:flex;
      justify-content: space-between;
      padding: 10px 22px;
      border-bottom: solid thin rgba(0,0,0,0.1);
      position: absolute;
      top:-89%;
      left: 0;
      right:0;
      margin:0 auto auto auto;
      background:white;
      z-index: 3;
  }
  .inbox-chat-header img,h3,button{
      display:inline-block;
      margin:auto;
      align-self: middle;
  }
  .inbox-chat-header img{
      width:50px;
      height:50px;
  }
  .inbox-chat-header h3 {
      font-size:22px;
      width:100%;
      text-align:left;
      margin: auto 32px auto 32px;
  }
  .inbox-chat-header button{
      background:none;
      border:none;
      font-size:22px;
  }
  .inbox-chat-footer{
      width:100%;
      border-top: solid thin rgba(0,0,0,0.1);
      display:flex;
      justify-content: space-between;
      position:absolute;
      bottom:-91%;
      left:0;
      right:0;
      background:white;
      z-index: 3;
  }
  .inbox-chat-footer button, input{
      align-self: middle;
      margin:auto;
      display: inline-block;
      border:none;
      outline:none;
      padding: 10px 12px;
      background: none;
      font-size:22px;
  }
  .inbox-chat-footer input{
      border-left: solid 0.5px rgba(0,0,0,0.2);
      border-right: solid 0.5px rgba(0,0,0,0.2);
      width: 80%;
      text-align:center;
  }
  .inbox-chat-footer-right{
      width:15%;
      display: flex;
      justify-content: space-between;
  }


  .inbox-chat-content{
      position: absolute;
      top:20px;
      bottom:0;
      left:0;
      right:0;
      width:100%;
      margin: auto;
      align-self: middle;
      height: 718px;
      max-height: 718px;
      overflow: hidden;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      z-index: 2;
      padding:50px;
  }
  .inbox-chat-content::-webkit-scrollbar{
      display: none !important;
      padding:0;
      width:0;
  }
  .inbox-chat-content-render{
      position: relative;
  }



   .inbox-chat-message{
      padding: 10px 22px;
      width: 100%;
      padding: 0px 22px;
      margin: 50px auto 50px auto;
   }
  .inbox-chat-contact{
      text-align: right;
      border-right: solid thin rgba(0,0,0,0.2);
  }
  .inbox-chat-me{
      text-align:left;
      border-left:solid thin rgba(0,0,0,0.2);
  }


</style>
