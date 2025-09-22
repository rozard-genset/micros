import {globe} from "scripts/blocks/general/hero/globe/jsx/loader.js"

let active = false;


document.addEventListener("touchmove", (event) => { 
    event.preventDefault();
    if ( active === false ) {
        globe();
        active = true;
    }
}, false);

window.addEventListener("mousemove", (event) => { 
    if ( active === false ) {
        globe();
        active = true;
    }
});