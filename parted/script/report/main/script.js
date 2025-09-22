let init_bugs = ()=> {

    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        return;
    }

    if (document.querySelector('.utterances-frame')) {

        let modes = localStorage.getItem("darkmode");
        let theme = 'github-light';

        if ( modes == 3 ) {
            theme = 'github-light';
        }
        else if ( modes == 2 ) {
            theme = 'dark-blue';
        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
            theme = 'dark-blue';
        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {
            theme = 'github-light';
        }
        else {
            theme = 'github-light';
        }
  
        let message = {
            type: 'set-theme',
            theme: theme
        };
        
        let iframe = document.querySelector('.utterances-frame');
        iframe.contentWindow.postMessage(message, 'https://utteranc.es');
    }
}


window.addEventListener( 'load', ()=> {
    init_bugs();
});