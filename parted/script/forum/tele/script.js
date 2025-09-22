let forum_telegram = ()=> {

    const darkmod = localStorage.getItem( 'darkmode' );
    const contain = document.querySelector( '#forum-telegram' );
    const frameid = contain.getAttribute('data-title');
    const appuniq = contain.getAttribute('data-uniqe');
    const telebox = document.createElement( 'script' );

    telebox.src = 'https://comments.app/js/widget.js?3';
    telebox.setAttribute('data-comments-app-website', appuniq );
    telebox.setAttribute('data-limit', 5 );
    telebox.setAttribute('title', frameid );
    telebox.setAttribute('data-dislikes', 1 );

    if ( darkmod == 2 ) {
        telebox.setAttribute('data-dark', 1 );
    }
    else if ( darkmod == 3 ) {
        telebox.setAttribute('data-dark', 0 );
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
        telebox.setAttribute('data-dark', 1 );
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {
        telebox.setAttribute('data-dark', 0 );
    }
    else {
        telebox.setAttribute('data-dark', 0 );
    }

    contain.appendChild(telebox);

    return new Promise((resolve) => {
        setTimeout(function() {
            resolve("opened"); 
        }, 2000); 
    });

}

let forum_loader = async() => {

    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        return;
    }
    
    const parent = document.querySelector( '#forum-telegram' );
    const result = await forum_telegram();
   
    if ( result == "opened" ) {
        let frame = parent.firstElementChild;
        frame.setAttribute('title', parent.getAttribute('data-title') );
    }
}


window.addEventListener( 'load', ()=> {

    forum_loader();
});
