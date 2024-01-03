//Set the counter value of the background player to 2 to trick it to be set to 0 later on
var counterVal = 2;
if (counterVal == 2) 
    {
      counterVal = 0;
    }

function Information(x) {
    var element = document.getElementById("info");
    element.style.visibility ="visible";
}

function Normal(x) {
    var element = document.getElementById("info");
    element.style.visibility ="hidden";
}

function Information2(x) {
    var element = document.getElementById("info2");
    element.style.visibility ="visible";
}

function Normal2(x) {
    var element = document.getElementById("info2");
    element.style.visibility ="hidden";
}

function Information3(x) {
    var element = document.getElementById("info3");
    element.style.visibility ="visible";
}

function Normal3(x) {
    var element = document.getElementById("info3");
    element.style.visibility ="hidden";
}

function Information4(x) {
    var element = document.getElementById("info4");
    element.style.visibility ="visible";
}

function Normal4(x) {
    var element = document.getElementById("info4");
    element.style.visibility ="hidden";
}

function Information5(x) {
    var element = document.getElementById("info5");
    element.style.visibility ="visible";
}

function Normal5(x) {
    var element = document.getElementById("info5");
    element.style.visibility ="hidden";
}
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

///////////NAVBAR HIDE AND SHOW//////////////////
// function myHover() {
//   var x = document.getElementById("menu_navbar");
//   var y = 0;
//   if (x.style.display = "none") {
//     x.style.display = "block";
//     y = 2;
//   }
//   console.log(y);
// } 

// function myHover2() {
//   var x = document.getElementById("menu_navbar");
//   var y = 0;
//   if (x.style.display = "block") {
//     x.style.display = "none";
//     y = 2;
//   }
//   console.log(y);
// } 

// function myClick() {
//   var x = document.getElementById("menu_navbar");
//   var y = 0;
//   if (x.style.display = "block") {
//     x.style.display = "none";
//     y = 1;
//   } 
//   console.log(y);
// } 
//////////////////////////////////////////////////////////


/*/////////SLIDER CODE//////////*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
//////////////////////////////////////////////////////////////////
/*Hide and Show Container3 Home Page */
function myNews0(){
  var card1 = document.getElementById("p0");
  card1.style.display = "block";
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "none";
  if (screen.width < 600) {
    var Modal = document.getElementById("MyModal");
    Modal.style.display = "block";
  }

}

function myNews1(){
  document.getElementById("p0").style.display = "none";
  document.getElementById("p1").style.display = "block";
  document.getElementById("p2").style.display = "none";
  var Modal = document.getElementById("MyModal");
  Modal.style.display = "none";
}

function myNews2(){
  document.getElementById("p0").style.display = "none";
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "block";
  var Modal = document.getElementById("MyModal");
  Modal.style.display = "none";
}

function loadSong() {
    
    var player=document.getElementById('player');
    var sourceMp3=document.getElementById('player');
    var TitleChange = document.getElementById('Change');
    
    sourceMp3.src='Music/S U N.mp3';
    TitleChange.innerHTML = "S U N";
    
   player.load(); //just start buffering (preload)
   player.play(); //start playing
   //This is to make the volume lower
   player.volume = 0.1;
}
function loadSong2(){
    
    var player=document.getElementById('player');
    var sourceMp3=document.getElementById('player');
    var TitleChange = document.getElementById('Change');
    
    sourceMp3.src='Music/Healing.mp3';
    TitleChange.innerHTML = "Healing";
    
   player.load(); //just start buffering (preload)
   player.play(); //start playing
   //This is to make the volume lower
   player.volume = 0.1;
}

////MODAL CODE////
function loadSong3(){
    
    var player=document.getElementById('player');
    var sourceMp3=document.getElementById('player');
    var TitleChange = document.getElementById('Change');
    
    sourceMp3.src='Music/Bad Place.mp3';
    TitleChange.innerHTML = "Bad Place";
    
   player.load(); //just start buffering (preload)
   player.play(); //start playing
   //This is to make the volume lower
   player.volume = 0.1;
}
function loadSong4(){
    
    var player=document.getElementById('player');
    var sourceMp3=document.getElementById('player');
    var TitleChange = document.getElementById('Change');
    
    sourceMp3.src='Music/Dancing in Darkness.mp3';
    TitleChange.innerHTML = "Dancing in Darkness";
    
   player.load(); //just start buffering (preload)
   player.play(); //start playing
   //This is to make the volume lower
   player.volume = 0.1;
}


// Getting the modal
var Modal = document.getElementById("MyModal");
var Modal2 = document.getElementById("MyModal2");
var Modal3 = document.getElementById("MyModal3");

// Get the image for the modal to pop
var nimage0 = document.getElementById("nimage0");
var nimage1 = document.getElementById("nimage1")
var nimage2 = document.getElementById("nimage2")

//Get the span text for closing the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

//When the user clicks on the image open the modal
nimage0.onclick = function() {
	Modal.style.display = "block";
    var bgplayer=document.getElementById('BackgroundPlayer');
    bgplayer.pause();
    counterVal = 2;
    document.getElementById("play").setAttribute("name","volume-high-outline");
    if (counterVal == 2) 
    {
      counterVal = 0;
    }
}

nimage1.onclick = function() {
	Modal2.style.display = "block";
}

nimage2.onclick = function() {
	Modal3.style.display = "block";
}

//When the user clicks on close modal (X)
span.onclick = function() {
	Modal.style.display = "none";
    var player=document.getElementById('player');
        player.pause();
}

span2.onclick = function() {
	Modal2.style.display = "none";
}

span3.onclick = function() {
	Modal3.style.display = "none";
}

//When the user clicks anywhere outside the modal then close it
window.onclick = function(event) {
	if (event.target == Modal || event.target == Modal2 || event.target == Modal3) 
	{
		Modal.style.display = "none";
		Modal2.style.display = "none";
		Modal3.style.display = "none";
        var player=document.getElementById('player');
        player.pause();
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

// Background Music

var bgplayer=document.getElementById('BackgroundPlayer');

function MusicPlay() {
    
    var bgplayer=document.getElementById('BackgroundPlayer');
    var bgsourceMp3=document.getElementById('BackgroundPlayer');
    var pausePlayer = document.getElementById('Pause');
    var playPlayer =document.getElementById('play')
    
    bgsourceMp3.src='Music/Bad Place-Trimmed.mp3';
    
   bgplayer.load(); //just start buffering (preload)
   bgplayer.play(); //start playing
   //This is to make the volume lower
   bgplayer.volume = 0.1;
}

function incrementClick() {
    updateDisplay(++counterVal);
    if (counterVal == 2) 
    {
      counterVal = 0;
    }
}

function updateDisplay(val) {
    if (val == 1) 
    {
      bgplayer.play();
        document.getElementById("play").setAttribute("name","volume-mute-outline");
    }
    else if (val == 2) {
      bgplayer.pause();
        document.getElementById("play").setAttribute("name","volume-high-outline");
    }
    console.log(val);
}

window.onload = function() {
  MusicPlay();
}




 