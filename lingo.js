var speed = 0;
var id = "";
var text = "";

function lingoStart(params) {
 if (params.speed == null || isNaN(params.speed)) {
  speed = 500
 } else {
  speed = params.speed;
 }
 if (params.id == null) {
  console.error("No id is specified for Lingo.");
  return;
 } else {
  id = params.id;
 }
 if (params.text == null) {
  console.error("No text is specified for Lingo.");
  return;
 } else {
  text = params.text;
 }

 //Split text characters into array entries...
 var letters = params.text.split("");

 //Start the typing loop...
 var i = 0;
 function type () {
  setTimeout(function () {
   var holder = document.getElementById(id);
   if (letters[i] == "`") {
    holder.innerHTML = holder.innerHTML.slice(0, -1) + "<br/> ";
   } else {
   	holder.innerHTML = holder.innerHTML.slice(0, -1) + letters[i] + "_";
   }
   i++;
   if (i < letters.length) {
    type(); 
   }
  }, speed)
 }
 type();   
}