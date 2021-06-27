var triggerId = document.getElementById("trigger");
triggerId.addEventListener("click", myMove);

var id = null;
function myMove() {
  var elem = document.getElementById("redAnm");   
  var elem2 = document.getElementById("greedAnm");  
  var elem3 = document.getElementById("blueAnm"); //
  var elem4 = document.getElementById("chartAnm");

  var elem5 = document.getElementById("chocoAnm");
  

  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem2.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 

      elem3.style.top = pos + 'px'; 
      elem3.style.left = pos + 'px'; 

      elem4.style.top = pos  + 'px'; 
      elem4.style.left = (pos - 100) + 'px'; 

      elem5.style.top =  pos   + 'px'; 
      elem5.style.left = (pos + 100) + 'px'; 

    }
  }

}