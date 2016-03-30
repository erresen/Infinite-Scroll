var timer = null;
var nearEndOffset = 700;

$(document).ready(function(){
    var sf = new ScreenFiller();
    sf.fillScreen();
    
    $(window).scroll(function() {
    if(!timer) {
        timer = setTimeout(function(){
            if ($(document).height() <= $(window).scrollTop() + $(window).height() + nearEndOffset) { 
                appendImage();
            }
                timer = null;
            }, 250);
        }
    });
});

function ScreenFiller(){
    var docY = $(window).height();
    var elementsAdded = 0;
    var approxContentHeight = 700;
    var elementsToAdd = Math.ceil(docY / approxContentHeight);
    var self = this;
     
    this.fillScreen = function(){
        if(elementsAdded < elementsToAdd){
            setTimeout(function(){
                appendImage();
                elementsAdded++;
                self.fillScreen();
            }, 1000);
        }
    }
}

function appendImage(){
    var image = randomImage();
    var content = '<div class="content">' + image + '</div>';
    $(content).appendTo('#content-container');
}

function randomImage(){
    return '<img src="https://unsplash.it/g/650/650?random&t=' + (new Date).getTime() + '" />';
}


