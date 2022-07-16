// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD-02fg9GHzqZV_LUceFBl6OkESzTMNfhI",
      authDomain: "kwitt-ebe5c.firebaseapp.com",
      databaseURL: "https://kwitt-ebe5c-default-rtdb.firebaseio.com",
      projectId: "kwitt-ebe5c",
      storageBucket: "kwitt-ebe5c.appspot.com",
      messagingSenderId: "850896957358",
      appId: "1:850896957358:web:d278eba485a252165de23f"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
