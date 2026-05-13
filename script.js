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
    firebase.database().ref('/game1/users/'+user).child('Jack').once('value', goodbyeWorld, fb_readError);
    console.log("Leaving simpleRead")
    

}
function fb_readHighScores(){
console.log("Reading High scores");
HTML_OUTPUT.innerHTML = "Reading High Scores";
firebase.database().ref('highscoreTable/game2/users').orderByValue().limitToLast(3).once('value', displayHighScore, fb_readError);
}

function displayHighScore(snapshot){
  snapshot.forEach(fb_showOneScore)
  

function fb_showOneScore(child){
  console.log(child.key+" got "+ child.val()+" points");
  HTML_OUTPUT.innerHTML = child.key+" recieved "+ child.val()+" puntitos"

}
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
var HS = {};
function fb_logDataBase(snapshot){
    console.log(snapshot.val());
    HTML_OUTPUT.innerHTML = snapshot.val();
    HS = snapshot.val();
}
function display(snapshot) {
    console.log("Running display(), the message is: " + snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val();
}
function display(snapshot) {
    var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('No message');
    }
    else {
        console.log("PlaqboyMax's message is: " + dbData)
        HTML_OUTPUT.innerHTML = "";
    }
}
function fb_displayHighScores(snapshot) {
  snapshot.forEach(fb_showOneScore)

}
function fb_showOneScore(child){
  console,log(child.val());
}
HTML_OUTPUT.innerHTML = "";
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
    firebase.database().ref('/highscoreTable').set(highscoreTable)
