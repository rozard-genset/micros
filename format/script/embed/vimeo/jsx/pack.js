console.log('Format: Youtube footer script loaded');



window.addEventListener( "load", ()=> {

    let vimeos = document.getElementById('format-vimeo');


    let webi_vimeo_format = () => {

        let button = vimeos.querySelector("#covers");
        let player = vimeos.querySelector("#player");
        let frames = vimeos.querySelector("#iframe");

        button.addEventListener('click', ()=> {
            button.classList.add('hide');
            player.classList.remove('hide');
            frames.src = player.getAttribute('data-uri');
        });
    }
    webi_vimeo_format();
});



