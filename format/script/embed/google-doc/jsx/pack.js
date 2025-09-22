console.log('Format: google slide footer script loaded');



window.addEventListener('load', ()=> {


    let starter = document.getElementById('format-google-slide');

    let embed_google_slide_format = () => {

        let button = starter.querySelector("#covers");
        let player = starter.querySelector("#player");
        let frames = starter.querySelector("#iframe");

        button.addEventListener('click', ()=> {
            button.classList.add('hide');
            player.classList.remove('hide');
        });
    }

    embed_google_slide_format();
});
