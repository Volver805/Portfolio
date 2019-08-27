var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff < 0 ) {
            if (i > 1) {
                hideProjectReversed(i);
                i--;
                updateColors();
                showProject(i);
                window.removeEventListener('wheel',changeProject,true);
                setTimeout(()=>{window.addEventListener('wheel',changeProject,true);},1000);
                }

        } else {    
            if(i < 3) {
                hideProject(i);
                i++;
                updateColors();
                showProject(i);
                window.removeEventListener('wheel',changeProject,true);
                setTimeout(()=>{window.addEventListener('wheel',changeProject,true);},1000);
                }        }                                                                 
    }

    /* reset values */
    xDown = null;
    yDown = null;     
};