// browser-update callback
var $buoop = {
  vs: {i:11,f:35,o:25,s:7},
  c:2,
  reminder: 0
};
function $buo_f(){
  var e = document.createElement("script");
  e.src = "https://browser-update.org/update.min.js";
  document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}