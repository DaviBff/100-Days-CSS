function moveDivs() {
  var divUm = document.getElementById("um");
  var divDois = document.getElementById("dois");
  var divTres = document.getElementById("tres");

  divDois.classList.toggle("shrink");


  if (divUm.classList.contains("closerU") && divTres.classList.contains("closerT")) {
      divUm.classList.remove("closerU");
      divUm.classList.add("closerU", "reverse");
      divTres.classList.remove("closerT");
      divTres.classList.add("closerT", "reverse");
      window.location.href = "Day2.html";
      
  } else {
      divUm.classList.remove("closerU", "reverse");
      divUm.classList.add("closerU");
      divTres.classList.remove("closerT", "reverse");
      divTres.classList.add("closerT");
      
  }
 
 
}




