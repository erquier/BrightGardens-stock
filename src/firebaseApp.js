import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyC_n16pjD50IrspjpjeFO8-PQO582ACfLY",
    authDomain: "brightgardens-67ee6.firebaseapp.com",
    databaseURL: "https://brightgardens-67ee6.firebaseio.com",
    projectId: "brightgardens-67ee6",
    storageBucket: "brightgardens-67ee6.appspot.com",
    messagingSenderId: "748850868943"
  };

  export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('events')