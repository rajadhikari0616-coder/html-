// app.js
var name= localStorage.getItem("name");
localStorage.setItem("name","Raj");
console.log(name);
// output; Raj 

var sesionstorage= sessionStorage.getItem("name");
sessionStorage.setItem("name","Raj");
console.log(sessionstorage);    
// output; Raj 