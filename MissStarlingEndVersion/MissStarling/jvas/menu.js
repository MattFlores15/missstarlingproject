//When you scroll the page
window.onscroll = function() {myFunction()};

function myFunction() {
    //When the page scrolled trough 50px it will get white and change the logo
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //change the background color and the image
    document.getElementById("navigation").style.backgroundColor = "green";
    document.getElementById("logoimage").src = "images/MS_Logo_Full_Transparent.png";
    //When the page is scrolled less then 50px it will get transparent and change the logo
  } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    //change the background color and the image
     document.getElementById("navigation").style.backgroundColor = "transparent";
     document.getElementById("logoimage").src = "images/MS_Logo_Compact_Transparent.png";
  
   }
}

function Hovering() {
    //When you hover we want the background to be white and the logo to be the full logo
    document.getElementById("navigation").style.backgroundColor = "green";
    document.getElementById("logoimage").src = "images/MS_Logo_Full_Transparent.png";
}

function NotHovering() {
    //We add this if to stop the not hovering effect when we passed 50px scrollheight
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) 
    {
        //When you dont hover we want the background to be transparent and the logo to be the compact logo
        document.getElementById("navigation").style.backgroundColor = "transparent";
        document.getElementById("logoimage").src = "images/MS_Logo_Compact_Transparent.png";
    }
}
