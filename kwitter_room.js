
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAJrM5gb_ib53FcwREkY_xo-Wuj97_sqds",
      authDomain: "kwitter-e30de.firebaseapp.com",
      databaseURL: "https://kwitter-e30de-default-rtdb.firebaseio.com",
      projectId: "kwitter-e30de",
      storageBucket: "kwitter-e30de.appspot.com",
      messagingSenderId: "518557924455",
      appId: "1:518557924455:web:eac5b578e7322de2c028c2"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ username + "!";
    function addroom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redricToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redricToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location - "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}