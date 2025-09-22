console.log('Format: Youtube footer script loaded');

let starter = document.getElementById('format-youtube');

let webi_youtube_format = () => {

    let button = starter.querySelector("#covers");
    let player = starter.querySelector("#player");
    let frames = starter.querySelector("#iframe");

    button.addEventListener('click', ()=> {
        button.classList.add('hide');
        player.classList.remove('hide');
        frames.src = player.getAttribute('data-uri');
    });
}
webi_youtube_format();


