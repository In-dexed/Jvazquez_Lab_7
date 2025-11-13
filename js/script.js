function init(){
  var alert = document.getElementById("entrybutton").addEventListener("click", alertFunction);
  //object variable that point to the red text box
}
//add your javascrip between these two lines of code
 

function alertFunction() {
  var txt = document.getElementById("entryinput").value;
  //Grabs the text that is inputed
  document.getElementById("textoutput").innerHTML = txt;
  //Change the text after the button click

  alert("John Vazquez: " + txt);
}

window.addEventListener('load', init);





