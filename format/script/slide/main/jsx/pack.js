console.log('slide footer script loaded');

let webi_slide_format = () => {

    let button = document.getElementById("slide-opening");
    let player = document.getElementById("slide-players");
    let frames = document.getElementById("slide-iframes");

    button.addEventListener('click', ()=> {
        button.classList.add('hide');
        frames.src = player.getAttribute('data-uri');
    });
}
webi_slide_format();