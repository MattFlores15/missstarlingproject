//////////NAVBAR FADE//////////////////

//When you scroll the page
window.onscroll = function() {myFunction(),  scrollFunction()};

function myFunction() {
    //When the page scrolled trough 50px it will get white and change the logo
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //change the background color and the image
    
    document.getElementById("navigation").style.backgroundColor = "#420488";
    document.getElementById("navigation").style.borderBottomColor = "#100311";
    document.getElementById("logoimage").src = "images/MS_Logo_Compact.png";
    document.getElementById("nav_title").style.fontWeight = "450";
    //When the page is scrolled less then 50px it will get transparent and change the logo
  } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    //change the background color and the image
     
     document.getElementById("navigation").style.backgroundColor = "transparent";
     document.getElementById("navigation").style.borderBottomColor = "transparent";
     document.getElementById("logoimage").src = "images/MS_Logo_Compact_Transparent.png";
     document.getElementById("nav_title").style.fontWeight = "150";
   }
}

function Hovering() {
    //When you hover we want the background to be indigo and the logo to be the full logo
    
    document.getElementById("navigation").style.backgroundColor = "#420488";
    document.getElementById("navigation").style.borderBottomColor = "#100311";
    document.getElementById("logoimage").src = "images/MS_Logo_Compact.png";
    document.getElementById("nav_title").style.fontWeight = "450";
}

function NotHovering() {
    //We add this if to stop the not hovering effect when we passed 50px scrollheight
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) 
    {
        //When you dont hover we want the background to be transparent and the logo to be the compact logo
        
        document.getElementById("navigation").style.backgroundColor = "transparent";
        document.getElementById("navigation").style.borderBottomColor = "transparent";
        document.getElementById("logoimage").src = "images/MS_Logo_Compact_Transparent.png";
        document.getElementById("nav_title").style.fontWeight = "150";

    }
}

///////////////////////////////////////////////
  /* SCROLL TOP BUTTON */


// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
  //Get the button:
  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

/////////////////////////////////////////////////////