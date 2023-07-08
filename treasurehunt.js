const treasure = (location) => {
  if(location === gold) {
  document.getElementById(`${location}`).innerHTML = "&#x1f308"
  } else if(location === bomb) {
  document.getElementById(`${location}`).innerHTML = "&#x2620"
  } else {
 document.getElementById(`${location}`).innerHTML = "&#x1f332"
}
}
const gold = Math.floor(Math.random()*8) + 1
const bomb = Math.floor(Math.random()*8) + 1

//const treasure = (location) => {
 // var randomNum = Math.floor(Math.random()*8)
  //if(location === "Clue1") {
  //document.getElementById("Clue1").innerHTML = "&#x1f332"
  //} else if(location === "Clue2") {
  //document.getElementById("Clue2").innerHTML = "&#x1f308"
  //} else if(location === "Clue3") {
  //document.getElementById("Clue3").innerHTML = "&#x1f332" 
  //} else if(location === "Clue4") {
 // document.getElementById("Clue4").innerHTML = "&#x2620" 
  //} else if(location === "Clue5") {
  //  document.getElementById("Clue5").innerHTML = "&#x1f332" 
  //} else if(location === "Clue6") {
  //  document.getElementById("Clue6").innerHTML = "&#x1f332" 
  //} else if(location === "Clue7") {
 //   document.getElementById("Clue7").innerHTML = "&#x1f332" 
  //} else if(location === "Clue8") {
  //  document.getElementById("Clue8").innerHTML = "&#x2620" 
  //}
//}  
