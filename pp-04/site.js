var noScriptId = "#doorbell-nojs";
var scriptedId = "#doorbell-js";
var scriptedClass = "doorbell-button-js";

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

function replaceNoScript(controlId) {
  var control = document.querySelector(controlId);
  var parent = control.parentNode;
  var button = document.createElement('button');
  button.setAttribute("id", scriptedId);
  button.setAttribute("class", scriptedClass);
  button.textContent = "Ring!";
  // insert scripted button
  parent.insertBefore(button, control);
  // register an event listener
  button.addEventListener('click', ringDoorbell);
  // delete old control
  control.remove();
}

document.addEventListener("DOMContentLoaded", function(){
  replaceNoScript(noScriptId);
});
