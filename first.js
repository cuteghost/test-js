function first(){
     $.getscript("https://cdn.jsdelivr.net/gh/cuteghost/test-js/second.js", function(){
         secondTest();
     });
}
function second(){
    alert("radi dvica");
  }