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

// Butterfly animation
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp=AdobeAn.getComposition("AB6DC8F2D6E73E42A6D5F86A41B8BE4C");
  var lib=comp.getLibrary();
  handleComplete({},comp);
}
function handleComplete(evt,comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib=comp.getLibrary();
  var ss=comp.getSpriteSheet();
  exportRoot = new lib.butterflyAnimation();
  stage = new lib.Stage(canvas);  
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    stage.addChild(exportRoot);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }     
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {    
    var lastW, lastH, lastS=1;    
    window.addEventListener('resize', resizeCanvas);    
    resizeCanvas();   
    function resizeCanvas() {     
      var w = lib.properties.width, h = lib.properties.height;      
      var iw = window.innerWidth, ih=window.innerHeight;      
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;      
      if(isResp) {                
        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
          sRatio = lastS;                
        }       
        else if(!isScale) {         
          if(iw<w || ih<h)            
            sRatio = Math.min(xRatio, yRatio);        
        }       
        else if(scaleType==1) {         
          sRatio = Math.min(xRatio, yRatio);        
        }       
        else if(scaleType==2) {         
          sRatio = Math.max(xRatio, yRatio);        
        }     
      }     
      canvas.width = w*pRatio*sRatio;     
      canvas.height = h*pRatio*sRatio;
      // canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';        
      // canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
      stage.scaleX = pRatio*sRatio;     
      stage.scaleY = pRatio*sRatio;     
      lastW = iw; lastH = ih; lastS = sRatio;            
      stage.tickOnUpdate = false;            
      stage.update();            
      stage.tickOnUpdate = true;    
    }
  }
  makeResponsive(false,'both',false,1); 
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.butterflyAnimation = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_41 = function() {
    ///* this.stop();*/
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(14));

  // Layer_1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#ABC8E0").s().p("ATAbEIAAghIgBgGQgTgDgKgZQgDgIAAgMIgBgVIgCgZQgNgRgKgeQgjhvgZhYQgFgJgDgMQgEgLgFgcIAAgBQgUhMgNg3QgRhQgKhLIh8nLQirqEhJklQhmmahHlbQgZI0gXIiIhHaSQgCAggKAWQgOAcgYgBQgbgBgVgqQgyhagfhfIgWgtQgag5glhoQhJjbggiTQgYhpgKhgQgKhbABhTQADijA0jZQAwivAdhyQAoj4AbiJQAgiqAjiRQjNGNjfIOQhiDoicGDIgBABQhVDRhnEAQhBCegoBTQg+CBhHBeQhaB3hYAAQhNAAhQhXQhghkhQiUQg6hshCirQhWjXhFjbIAAgBQg/jFg0jFIgBgCQh4nPg4niQgRiWAMhLQAai0CbiTIABAAIAfgbQB+hrDthpQJakFJThLQAfgIAsgHIAHgCQCQggBfgKIAEgCQAjgHAaAAIACAAIAAgCQAmAAARADIACABIAcAAIBhgBQAeAAARAEQAMACAKAGQAkgKA5AoQCHBgCSCIQBkBdCgCmIFmFrQCBCBA4BSQBpCYBNEXQCDHFAvHbIAHBFIAAABQAWETgMDoQgHB1gpAvQgfAigwAEQgxAEgYgjQgSgaAHhCQgDAAgCgCQg7gXg+hLQhPhchPirIgghEQgohGgshVIAAgBIhCiGQlnr6iKlBIh0kTIAUA6IE/N+QA8CsAWBSQAYBbAJBQQARA6AOA6QAKAmAIAlQBWFzgDFUQAAAwgNAaIgBADIAGAfQAOBagVBFQgJAfgQAGQgUghgEgygAEqY7IABACIAMARIABgbQgHAFgHADgAE5UrIABABIADAHIAAgOIgEAGg");
  this.shape.setTransform(152.2,1351.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#ABC8E0").s().p("EgGTApnQgCgFgEgSQgEgpgQg0IgPgwQgEAGgHAEIgMhRQgyibgcijQgTASgagDQAMBAALAxQASBJAtCeQgKAAgIgLQgFgHgHgPQhDi2gxjfQgniugljxQgkjqgLihIgDgyQgXilgBhUQgBiNAthnQA5iGCPhnQBHgxBwg1QgKgBgIgDIgtgVIgfgIQg6gCg7gGQhggHhFgWQAAANgCAMQgDAlgWAhQgNgUgJgdQgDgMgIgoIgEgUQgPgIgPgKIAKBlIAHA/QACANgEAKQgEANgKAAQgRgfgKgpQgGgbgGgxIgLhVIgJgGIANBrQAIBQglAVQgWgIgGgfQgBgJADgoQAAgYgJgnIgJgjIAJEMQACAtgHAYQgWgxgNhCQgHgogIhRIgWjvIgHgJIA5NiQgbgQgPglQgKgagIguQiDtfgbpAQgPkxAJkcQgFkDALjbQAUlfAylMQAVh/Ajg7QAagsAqgcQAsgcAvACQBNABBNBbQBYBnBUDJQDHHUCQJuQBVFzCALyIAIAxQCflGDQknQANgcAQgfQAmhGAxhPQA9hmAiguQASgZAsg3QAog0AUgdQA6hUALgOQAjguBJhDIA2gzQgEAbgPAeQAwgpBAguQAmgcAcgHQALgFALACQAGACADADQAgAJAYAoQAcAxAFBeQAGAaADAdQAKBOgBCpIABIoQAAFNgPDZQgcF0hgD3QgdBJgjAzIgNAhIhJC1QghBQgTAkQggA/gmApQAriSAziOIhGCiQgZg0AVhWQAGgYANgjIgHABQg4CHguBsQhpDxhnDGQgKgGAHgRQAQgvAJgWQAahLAYg/IA3iFQAfhOA8jAIAPgwIghgBQgKAWgIAOQgWAlgbACQAKgqAKgmIgJgCIgPAbQgLAUgPArQgQArgLAUQgLAYgaAcQALhHAIghQALgzAPgnQgGABgGgDQgFgEgBgEIgTAfQgEAIgEANIgHAVQgLAagUAAIgFgIQAKgHgBgQIgDgdQgBgTAMgZIASgqIADgLQgUgPgVgSQjojCjLjaQANAlAQAzQAeBeASAtQAjBfBeC3IBuDaQAfA8ANAeQAWAzAJArQAPBAgKBKQgLBWg9BxQgkBEgpBBQgzDOhYDQQhQDAhgCkQBmkhAziXIBCjFQgiAqgkAnQgPATgOAJQgQBRgbBZQgdBdgvB3IACgQQgLAggDAaQgQgLAEgjIAOh4QAKhYAHifIAEhCIgHgSQgUhCgLhuQgMh3gOkJIgRlgQgNlOgCheQgBhXgBgTQgCgygFgoIgaBrQipKaiuJ2IADCQIAOF2QAaCHAcCJIgGABQgHAAgHgJgAJkgGIAJAAIAAgCIgJgCIAAAEgAQJ0CIACAAIAAgDQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAg");
  this.shape_1.setTransform(162.2,947.9);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#ABC8E0").s().p("AIiSGIAWgSIgCgEQgEgIAAgLQAAgTACgZQgCgIgBgJIgIhEIgEgPQgUhvgXi7Qg4lUgbjAIgVicQgBBmgGBoQAEBcACB6QAABAgCAfQgDA1gJAqQgKAwgUAyQgXBAgbA1IgFAMQgGAPgJAKQgOAXgOAVIgBAIQgEAMgTAUIglAmQgXAVgKAGQgLAGgaAIQgZAIgLAGQgFgCAGgGIAGgFIgBgUQgCgPACgIIAJgQIACgNQgDgOACgXQA/nbBWnTQAQh8ATh9IgqA/QggAuh4CgQjvE4jcFZQgdAsgOASQgHAKgIAIQgDAGgEADQgPAOgPALQgFgGAAgJQgNhQANhPIAKgqIADghQAFgjAGggIgCgVIAFgBQALg7APg2QAShCAWgkQARgcAsgyIBMhSQhhBKhEA4QgsAklKEbIhYBKQgXgKgOgUQgZgfALhTQAhjiA2jRQgCgPAEgTIAJgkIAviJQA+i5AthoQAfhLA+iAQAihHATgYQAMgSAagdQAcggALgPQAPgUAWglIAjg7QARgcAWgMQgbBJhCB0QhLCGgYA1IglBcIgnBgIgUA5QAmgbAwgYIAHgRQANgfAQgVIATgZIAQgaQAJgcAIgNQAFgLAJgGQAKgGAKABIAehHQAbg6AfgNIhBCbQAGAIABAMQACASgMAdQgOAigMAXIAggKQAOgiASgoQBYi+A3hfQBYiZBkhlQimEoiOErQAjgLAkgJIAJgQQAXglAqgrQAygxAYgaQApgtBOhrIB/ivQiTDqh1DsQD9gwEIAYIAIANQAGgBAEgDIAJgHQAFgFAFgBQAOgDAMAYQAYAxAyBqIALAWIAHgyQAhjWgKhoQAIgEAIgBQAKB2AEBGQAEBmgGBVQgDAvgGAuIBJCSQAEgrAJgrIAOg7QAGgigBgaIASgFIgHEVIAAAUIAqBSQABgsACg6IAhqrQAZEkgCDpQgBBMgDBKIAKCBIAGhFIAMgFQAHAoADAyIABBbIACAxQATAjAGAVQAKAgAAAeQAWBEAHA6QAKBugcB0QgOA5gTA2QgCAcgQARQgBAEgCACQgfBEgqA9IgFAIQhBCShhBSQgYAUgRAAQgHAAgFgCgAJ7QiIAEgGIAVgfIgDAAg");
  this.shape_2.setTransform(220.3,702.4);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#ABC8E0").s().p("AhRGMIAngXIgLACIgRAFQgBgHgFgEIgGgBIgEgEIgIAHQgKAIgQAGIgYALQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIA5glIgCgBIAAABQgEAFgEABIgIABQgGACgCACIgFgDQgCgEAEgGIAHgFIgEAAIgFgCQgEgEAGgGIAHgFIgGgKIgGgKIABgEIgDAAIgDAAIgCgBQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgHgEIgEgEQg9gMhHgXQAOAYAVAtQgDADgCgGIgcguIAAABQgMgNgHgOIgBAAIgEAIQgEAGgHgHQgCgCgFgKIgCgEIgBAAIgJgIIAKAWQAJASAEAKIAHAaIAmA9QAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgDgCQgUgbgbg1QgLgVgPggIgLgaQgSgUgFgHQgHgJgKgVIgNgfQgEgMgCgNQgHgngBgdQABgDADgCQAIgFAKAFIANAMQASASAoAbQANALAhAhIAZAWIAWATIABABIAgAbIgFgHQgtg3gTggQgLgTgKgZIgBACQgBARACAGIACAHQgKAAgBgQQgDgWAAgYIgLgbIgFBAQgIgaAAgjQAAgQACgVIgHgaIAAAAQADgIAAgXIAEgvIAPhpQAKg0AXhCQANgaARgcIAJAGIAHAYQAxCfAXBBIAdBOQAjBfAjBuIBFgYIA4gSIA9gdQAmgSAxgUQADgDAGgDICmhDQALgEAGAEQACgDACAAQADgBADADQACADAAADQABAGgFAGIgdA0QgNAZgQAXIgMARIgXAgIgCACIgGAHIgMAQQgHALgFAGQgHAHgUAOQgTAMgHAKQgCgFAHgFQATgRASgWIgNAGIghAVIgpAnQgrApgjABQAEgEAKgHQAcgRAggeIABgBIhMAiQhAAZggAIQgdAHgWgEIgNAGIALAAQAYAAAMgCQAOgCAIAAIAVACIAcgEIAdgBQAeAAAPgCIAMAAQAHACgBAGQgBAEgGAEQgUAMgdAPQgFAIgPAHQggAOgeAKIgPAHIgTAHIAAAAQgVANgTAKQgWAMgaAJQAGgFAKgGgAhqFiIAKgBIgDgDIgHAEgABsEkQABgBAAAAQAAAAABgBQABAAAAAAQABAAABAAIgHAAIACACgAllDNIgEgFIgBgBIAFAGgAgvCUIACABQAFAAAEgDIABgBIgMADgAmOA7IACgCIgCgCIAAAEgAlllVQABgWAFgPIgGAmIAAgBg");
  this.shape_3.setTransform(321,566);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#ABC8E0").s().p("AAUBqIgRgIQgGgHgFgOQgGgQgDgFQgFgJgOgOQgLgQgFgRIgRg1QgHgSABgLQACgLAOgHQAMgHAOABQARAEAcAUQATAPAKARQACABAOAnIAQAsQAJAegNAUQgLAXgZAAIgNgBg");
  this.shape_4.setTransform(431.9,540.2);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#ABC8E0").s().p("AgtAAIgCgIIAQgYIAogLIALACIAHAFIAOAOIAFAHIACAIQAAAYgKASIg7AJQgPgUgJgYg");
  this.shape_5.setTransform(581.7,522.6);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#ABC8E0").s().p("AgGAiIgcgQIgEgFIgFgTIAEgIQAEgLAGgFQAFgEAOAAIARACIAJAAQAHACAHAKQAJALAFACQgFARgGAIIgKAHIgSAJIgGABg");
  this.shape_6.setTransform(934.7,517.2);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#ABC8E0").s().p("AgWA6IgNgHQgIgEAAgCQgHgEgEgNQgMgiAGgOQAEgTAXgOQATgHAYAAQAOAAAFAEIAQAKQAOARADALQAFAcgWAVQgUATgaAIIgNADg");
  this.shape_7.setTransform(1253.6,509.7);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#ABC8E0").s().p("AA7EVQgWgQgYgNIgBAAIgWgFQgegNgRgDQgLgBgFgDQgEgCgCgFQgCgFACgDQADgEAGgBIAPgEQAEgIANgCIg7gGIgrgIQgkgGgXgHIgHgCIglgZQgogdgXgYQgNgNgKgNIAAgBIACgDIgEAAIgGgHIgDgHIAAgBIACAAQALABATAGQAVAHAIABIADABQADgBAEACIATAEIABgCIAEAAQAXAEA0AQIDQAvQBFARAeALIAlhfQAMgdARgdIAXhCQASgxAWgzIAAgDIACgBQANgfAOgeIADgDQAFgDAFgNQAJgTARgQQAFAPACAmQAAAygEAYQgEAigRAzIgiA7IgHAQIgdA+IgjBNIAMgQQAhgsAOgOQAEgEADAAQAJgBABAMQABAKgGARIgHAWQAAAFgEAKQgTAvgHAOQgIANgGAEQgLAIgdgFIgbgGIgIgBIgDACQgNAKgNATIgYAhQgKAMgKACIAAAAQgJAAgPgLgADODIIALgBIACAAIgCAAgAkIBKIABgDIgEAAg");
  this.shape_8.setTransform(1398,555.6);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#ABC8E0").s().p("AkYL/IhXiuQgDgBgCgDQgEgGgEgMIhTimQgthZgQgrQgbhLgDhBQgDhzBOh6QAog9BIhNIgUAFQgeAGgzAaQgtAWgaAJQgHAIgCAFQgLgFAEgSIABgBQgHAFgBACIgGAHQgEADgJgEQABgJADgHIAJgLQAGgHACgKIADgMQACgEAIgGQgBgFACgIQAAgFAMgcIAEgHIAAgJIAWiHQAShzAVg4QAHgTALADQgPAkgHAyIgGBZIAAAEQAMgdARgWIADgTIAFgSIAHgLQAEgIAAgPQAAgRABgHQADgJAFgCQAGgCAFAEQACgQAFgKQAEgKAHACQgHASgCAaIgBAuIgBAKIAHgCQAGgCAKAAQABgwAGgzQAHhFAYiEQADgQAJgEQgHAugNCmQgFA7gGAxQBXADA6AUQAYAIAWANIAoAWIAbAOIAGAEQALAAALACIgSg6QgEgLACgGQAFgNARACQAJACANALIAhAZIgKgmIgmiSQgBgEADgFQACgFADADQA8BvAgB7IAWARIgIgRQgOghgUg+IgqiAQAFAAAEAJIBNCJQAoBFAXAwQALAWAFASQAaAYAMAQQAGAIAPAYIAEABQAIAFAIAQQAJAOAYAfQAWAcAJASIAPAhQAJASAMAJIgGADQgTgOgRgQQAAACgFAAQgVgDgHgFQgFgDgPgRQgLgMgigXIgPgLQgVgOgTgPIAWAnIAbAiIgEAHIBjCjIBzCjIAAg2QAAgogMgWQABgEAFACQAEABACAEQAPAYAJArIANBHIALAqIAOAWIgBgNIgChZQgChNgQhHQgBgDACgDQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAABQAJAYAHAXIgFgTIgPhCQgIgngDgdQgEgugFgOQgDgHAAgFQABgDACgCQADgCADABQASBQAOAoQAGAVAUA0QAsCAASCDIAEAaIADAEQAbAgAOAcIgsg/IAOBsIAmA3IgGAKQgKAOgMAHQg/hMhKhWQkGkvhniGQgQgUgLgHQgNgSgLgFIgIgDIgWgfQgiBlgLDUIghKGQgEBfgyASQgLADgLAAQg0AAgthagAHYDzQAAASgCAOIAVAdIgGghQgIgSgFgUIAAAKgAksncQAGACADAAQADABANAAQgSgGgPAAIAIADgAC+l9QgLgcgGgJIgHgKQgFgGgBgFQgBgLgCgGIgFgLIgGgMQgCgGADgGQADgHAFgBQAHgBAFAHQAEAFABAJIAJAnQABAGAIAVIALAdQAGAQgIAFg");
  this.shape_9.setTransform(1520.3,698.1);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#ABC8E0").s().p("AGVSFQgxg/gdghIgYgaIgJgMQgWglgdgmQgagjhGhRQinjFjKkBQhwiOj1lBIhGhbQAfBRAVAwQAjBRAtBdQBXC5AvBgQBMCaBEB5QhChdgzhkQgxhmgagxQgOgagbgvQgdgwgMgYQggg7gmhjQgziBgoh2Ih0ieIg3hPQBLDMBrDeQBwDpEOHqQl7oxj4p9QAQBOA2BzQBGCWAPAoQAGASgGAIQgEAFgIAAQBFCnAoB9QhijDhpjXQhgjIgzhzQhOiwgyiTQgEgMADgFIAAgBIgHgJIgYggIAAgGIgEgFIgDgEIEACGIAJAEQBYA+BeAxIB7BAQBFAmAtAlQA5AvA2BNQAfAsA5BjIA+BsIAHADIBCB2IAHAMIgBADIAkBFQAFALAGAEIAEACIDsGcIiDkNIAAgCQAAgIgFgKIgLgaIgBgKIgHgMIgGgKIgcg+QgCgNAIgHQAcgFAfAqICvDkIAIAKIAJAWIAAAAQAXAsATAqIAEARQADADADAHQAPApANA7IAGAaIAFANIARApIgYkQQgGhIAEgkQACgcANgzIALgrQAKhMAThDQAMgfAVgwQACAFAAAGIAAAAQAHgCACANIAHEoIANCcQASkAAej7QAUizAfhtQBCjkCmioQAagaAxguIAFgFIALgKIAKgKQBrhmB2hVIASgUIAQgMIADgDQACgCADgBIAsggQAKgIAGACQAEAAADAGQACAEgCAFIgJASQgEAHgGAUQgIAcgKAdIgBARIgDANQgiG6gpE6Qg7G/hgFwQA+nTAajWQAul9AakvIAAgBIhLD5IgvIkQgQDEgSBsQgWB8ghBdQgHgWAAgdQAAgRAEgiIBBrRIgKAhQgTEUgQCaQghFFg6D9QgMAzgQAVQAQhLAMhhQAHgyANh8QAgk9AOimIAGhGIgJAdIgJAdQh3EwhQE+IgKAdQgvCKgOAsIg3CzIgzCsQgJAEgKADQgPADgNAAIgDAAgAF1gtIABABIAAgEIgBADgAvCoQQgZhOgUhPQgBgFABgDIg+hRQAlBYBGCegARxxhIAIACIAEgLgAEIESIACgYIgBAiIgBgKg");
  this.shape_10.setTransform(1562.4,867.8);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#ABC8E0").s().p("EgPxAmPQgqgDgkgYQgxgdg9hZQh7i7hsk1IgRg1IAAgBQhmk2g+idQhnjwguh4QhFi7hdl3QgjiRgMg/QgXh2gEheQgDhxAWhzQADhvAmhrQAchHALgkIAYhTQAUhDAihQQAVgxAthdQAGgQALAAIglBvQggBdgNAzIgQBBIgDAOIAEgHIAWhHQAUhCBTjxQAFgLAFABQgCAcgIAfIgwDLQBqidCWiNQC4ivEci5IBSgzQjOA+jNBJQiAAthHAKQhWAJgkgmQgZgagBgwQAAgeAKg4QAOhIATjZQARi1AdhpQAOgxATgdQAUgeAhgTQAvg5Ayg4QApguAggcQAWgUAVgNQgqBlg9BYIATAAIANgQIArg3QAJgNAFgDQACAIgHALIgNASQgDAFgGAbIgHAUQAOAAAPADIAUAEQA9hWBChSQgaBQg4BYIgFAIIAdAHQC1AsCBAoQCmA1CEBAQA9AdBTAvIBpA5IAEhUQgBgLACgKIAFg7QALhzAYhaQAIgdAOgRQAMgOANgCIgbhSQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABABIAFAEIA5BhIADACQAcALAeAmQAZAdAkAxIguhTQhGh8g9hJQAEgGAGAJQA2A+BABTQAgArA9BYICUDZQBDBhAYA2IAMAcIAVAcIAmA0QAUAeANAXQARAdAcA+QAUAoAFAOQAEANACAMIArA4QAlAvgUAaQgJANgVACQgRAAgVgHQgjgMgmgRQClCkCqCfQCqCCC/CDQglg9g9h7Ijhm5QgEgLAAgIQAAgMAJgCIF7K8IBuBOIhlklQAHgBAGAMQBQCfBLCsIABACIArAiQgJgXgFgQQgHgXgXhdIgEgTQgihSgIgZQgDgIABgDQADgIAGADIADANIABgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQASA3AVA7IABACQAVAoAuBQIAgA8IAoBPIAIAPIAtAyQgQgtgTgwQiDlWgYhJQgUhAgghxIhNkOIBnECQARAbAQAeQAVAnAmBSQClFqCTFuIhFjrQgBgDABgDQABgBAAgBQABgBAAAAQABAAAAgBQABAAAAABIA4CNQAvB3AVA8QAWA+ARA2QA2BkA5CTIAlBkQAbAqAJAhQAGAUAAAWIBsFLQAYBPgOAvQAGAIADAJQAVAugMAWQgKASgYAFQgUAEgUgJQgTgJgfgoQgjgHgagZQgpgmgjhuIgFgQIjIkXQgJgKgJgNIgJgNIgdgpIq3sRIgfgdQhlheh8iGIjXjwQkylSlXk+IgBAVQgHBNgjCWQiyL3h1PeQguGEhQOBIAAABQgVDigWEEQgLCWhEAoQgcASgjAAIgOAAgAVtofIARAmQAYA5ATAoIhPi6IATAzgATwoUIACAAIgDgFIABAFgAiU6CIACgEIgWgRIAUAVg");
  this.shape_11.setTransform(1676.9,1249);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#ABC8E0").s().p("AntSoQgVgFgkgMIg6gTQgSgFgrgGQgmgGgVgHQgfgJg8gfQg6geghgIQgSgFgtgFQgogFgWgHQgUgIgdgQIgwgbQgvgUgWgMQgngUgOgcQgTgkAQgsQAQgqAlgYQAggUAugJQAfgGA1gDQDogJDjAlQAvAHBfASIAwAJIhogpQksh5iUg/Qg+gZlUiUQj0hqifg/Qh+gzgtgWQhegrhAgzQhCgyhAhOQgtg3g/heQiFjEhLiaQhhjHgdi3QgGgnADgaQADgkAUgWQAbgeA+gEQBFgFBSAYQA7ARBWAnQFPCWE7DWQCjBwESDaQEdDdCgCSQBCA9DkDmQC0C1B6BkICoCFIA0AqQAOgMAWgLIAogUQAmgVAtgkIBLhCQAxgrBohTQBLg8AyghIBAgjQBfhiB+hxQBOhGChiIQFOkfC+igQEjj0Dyi/QAVgQARgLIAYgPQAdgOAcgDQBYhHBbhBQAwgjAcgHQAXgEAVAHQAXAHALARQAWAjgjBDQg7B1hZCOQgqBBhaCIIgUAkIiHDkQgoBFgVAhQgkA2gkAmQgnAqg5AqQgfAXhLAwQkkC3iUBXQhaA1hRAtQhIA2hWAyQhsA+jXBmIkHB8IhGAyIgWAQIAGAAQBqgQA1gJQB8gXDJg0QD3hABNgRQApgKAbABQAlACAWAUQAbAagCAuQgDAggVArQg9B2huBMQg6AkgbAUQglAbgTAMQgiAWgcAHQgzAOhEgVIh1gtQh5guiwgJQjOAAhlgDIgaAAIgeARIivBiQgsAZgXALQgoARgiAEQgVADghgBIg5gCIhNADIgTAAQgjAAgYgEgEAlegPWIACABIAFgFIgHAEgEAmbgPsQAOACALAJIAlg4QgpARgwAdQAHgCAIAAIAMABg");
  this.shape_12.setTransform(1724.6,1303);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#ABC8E0").s().p("EgGuAneQgtgPgsgxQgqguglhEQgXgsglhSIhBiSIgohYIicldQgTgrgFgbQgHgoARgdQAegyBbAAQBlgCBxAiQBcAcBvA4IDCBnQBCAkA4AZQj/jAjei9QlMkZjajtQijiyhAiIQgxhtgni1QjZwPCZwWQAViTAdhcQApiBBFhWQA6hCA5AEQBDAHAuByQAoBiBsEdIFBNeQDlJjBuFAQC1IEB0GnQBIEFAWBEQAiBiAkBTICdvEQBpp7A/laQBQmzCztiIBVmaQABgKAEgHQgCg4APg4QAYhmBCgPQAygMAyAvQAmAlAcA+QE1KdBeLaQBJIphgGOQgcB7hEC5QhqEvheDIQiAELidDAIiUCrQhNBYguBFQAEAVgFASIgDAKIAjgYQE8jXA+gzIAKgIIAIgOIAJgOQAGgHAOgIIAWgOQANgKAPgUIAZghQATgUAagJQAZgKAbACQgBALgIAIQgHAHgLABQAIAHgDALQgCAKgIAGIgCADIgGApQgEAfgGAdIgJAyQAKAWACAQQAEAWgHAbQgEAQgLAgIjJIyIgHASQgxB6hEB1QgVAjgQASQgYAagbAJQgfAKg1gJQg1gMgYgQQgYgPgcgnQhbh0hdiCQgpg4gpg7IgVggQAAAOgCAOQgVgHgVgLIgFALIgWgBQgdA9gzBCIgXAbQgdAig8A9Qg9BAgbAfQhJBYgpApQhDBGhEAaQgoAQgkAAQgYAAgXgIgEAH/AgAIAUAcIAWAeQgGgRgIgNQgNgWgTgMIAEAGgAAsdjIAMgFIgKgCIgCAHgARnV9IAAACIACgEIgCACgASRUNIACADIAAgBIABgEIgDACg");
  this.shape_13.setTransform(1711.8,1216.7);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#ABC8E0").s().p("EAAJAjdQgtgFg5grQgqgdgvgrQgdgZg3g1IjcjUQhHhGiCiFIgmgnQgzg1gXggQghgugHguQgZgSgYgTQhDg2AJguQAEgUASgQQAQgOAWgHQAZgGA8AFQB4APB2AYIAhACQAiACBUAPIDVAiQhUgzhvgwQjhhbhugzQiyhVkEitQheg9hLg4QgZgRgYgQQhdg8gwgpQhKg/gqhCQg2hbgOiDIAAgIQgTg8gKhBQgQhhADh9QAChLAOiUICN4oQAUjEBcgqQBUgjBZBCQAzAnA+BpQDNFKC5F6QB9D+DKHXILWaRIBzqNQBNqlCBoaQAThSAchlIACgEIAhh8IAQg0QBEj0BllDICEmuQAph4A0ghQAsgcA5AJQA1AJArAjQA6AuA/B+QDTGrBMFYQAbB3AfDxQAXCWAFBYQAJCEgPBpQgLBEg+DaQgrC4gTA4QgwCTh2C6Qk2H5m4GOIBZgSQBrgUBKACQAaAAAeACIAggHQCCgeBOAHQAsAEANAWQAWAjg4A1IhMBIIgBADQgLAZgnAiQgmAhgSASQgeAegSAcQgLAPgQAfIgKARQgWAqgQAUIghAmQgWAXgKAOQgNATgPAgIgYA0QgUAkgtA4Qg0BAgRAbQgZApgNAUQgXAigZARQgjAXg/AHQhTAKgqgbQgjgVgehAQgphXgwigQgniFgahIIgOBxIg1FwQgGAtgNATQgOAZgeAKQgTAHgUAAQgJAAgKgCgEAJJAg3IgIAKIARgOQAXgUAZgnQgjAlgWAagADvX4QAGAWALAcIgFgVQgEgQgKgXIACAKgACNVaIAlAeQgLgYgGgUQgKAIgKAGgA2H/BIAHACIgHgJg");
  this.shape_14.setTransform(1720.3,1258.7);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},3).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(913.5,1868.8,397.6,363);
// library properties:
lib.properties = {
  id: 'AB6DC8F2D6E73E42A6D5F86A41B8BE4C',
  width: 1900,
  height: 1397,
  fps: 15,
  color: "#6E6D72",
  opacity: 0.00,
  manifest: [],
  preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
  createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
  this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
  an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
  an.bootstrapListeners.push(fnCallback);
  if(an.bootcompsLoaded.length > 0) {
    for(var i=0; i<an.bootcompsLoaded.length; ++i) {
      fnCallback(an.bootcompsLoaded[i]);
    }
  }
};

an.compositions = an.compositions || {};
an.compositions['AB6DC8F2D6E73E42A6D5F86A41B8BE4C'] = {
  getStage: function() { return exportRoot.getStage(); },
  getLibrary: function() { return lib; },
  getSpriteSheet: function() { return ss; },
  getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
  an.bootcompsLoaded.push(id);
  for(var j=0; j<an.bootstrapListeners.length; j++) {
    an.bootstrapListeners[j](id);
  }
}

an.getComposition = function(id) {
  return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;