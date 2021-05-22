var navside = document.getElementById('mySidenav');


/* Set the width of the side navigation to 250px */
function openNav() {
  navside.style.width = '250px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  navside.style.width = '0';
}

function omoss() { 
  document.getElementById("header").style.display="none";
  document.getElementById("innhold").style.display="none";
  document.getElementById("navbaromoss-head").style.display="block";
  document.getElementById("omoss-grid").style.display="block";
  document.getElementById("navbarref-head").style.display="none";
  document.getElementById("ref-content").style.display="none";
  } 

  function home() { 
    document.getElementById("header").style.display="block";
    document.getElementById("innhold").style.display="block";
    document.getElementById("navbaromoss-head").style.display="none";
    document.getElementById("omoss-grid").style.display="none";
    document.getElementById("navbarref-head").style.display="none";
    document.getElementById("ref-content").style.display="none";
    } 

    function referanser() { 
      document.getElementById("header").style.display="none";
      document.getElementById("innhold").style.display="none";
      document.getElementById("navbaromoss-head").style.display="none";
      document.getElementById("omoss-grid").style.display="none";
      document.getElementById("navbarref-head").style.display="block";
      document.getElementById("ref-content").style.display="block";
    } 
  

