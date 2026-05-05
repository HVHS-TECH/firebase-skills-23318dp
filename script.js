/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
let user = "jack";
let score ="0"
function helloWorld(){
  console.log("Kia ora te ao()")
  firebase.database().ref('users/Ben').set(
    {
      
      age: 22,
      
      Been_to_epsteins_island: true,


    }
  )
}
function goodbyeWorld(){
  databaseOutput = 'hello'
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/users').once('value', DO_THIS )
}
function DO_THIS(snapshot){
  console.log (snapshot.val());
}
function simpleRead() {
    console.log("Reading message");
    firebase.database().ref('/game1/users/'+user).child('Jack').once('value', display, fb_readError);
    console.log("Leaving simpleRead")

}
function fb_readError() {
  console.log ("There was an error reading the message");
  console.error(error);
}
function setMessage() {
  firebase.database().ref('/users/Jack').set(
    {
      message: 'hi'
    }
  )
}


function display(snapshot) {
    console.log("Running display(), the message is: " + snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val();
}
highscoreTable = {
        game1: {
            users: {
                Dhruv: 99999,
                Jack: 10000,
                Michael: "3.141",
                Sasha: 0.5,
                Yug: 987654321
            }
        },
        game2: {
            users: {
                Dhruv: 13,
                Jack: 14,
                Mikaela: 7,
                Sasha: 3,
                Yug: 12
            }
        }
    }
    firebase.database().ref('/').set(highscoreTable)
