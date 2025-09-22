console.log('Format library pack script loaded');

let load_article = () => {
    let temp = document.getElementById("article-data");
    let clon = temp.content.cloneNode(true);
    document.getElementById("article-load").innerHTML = '';
    document.getElementById("article-load").appendChild(clon);
}

window.addEventListener('load', ()=> {
    load_article();
});