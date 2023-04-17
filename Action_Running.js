function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  }
// Code that we wrote before...
var element = document.getElementById('mainbox');
element.classList.remove('animate');

 // Code that we wrote before...
  //...
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);