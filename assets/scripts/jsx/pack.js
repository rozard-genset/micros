console.log('Script : core | shift : deffered | scope : all  | source : default | type : script | status : loaded');


let proto_render = ( elem, data )=> {
    let clon = data.content.cloneNode(true);
    elem.innerHTML = '';
    elem.appendChild(clon);
    elem.removeAttribute('data-target');
    data.remove( elem, data );
}


let proto_remove = ( elem, data )=> {
    elem.remove();
    data.remove();
}


let proto_loader = ()=> {

    if ( document.querySelector('.proto')  ) {

        let proto = Array.prototype.slice.call(document.querySelectorAll('.proto') );
        proto.forEach( element => {

            let data = document.getElementById( element.getAttribute('data-target') );
       
            if ( window.innerWidth < 420 )  {
                ( element.classList.contains ( "lazy-xs" ) ) ? proto_render( element, data ) : proto_remove( element, data );
                console.log('show in xs scale');
            }
            else if ( window.innerWidth < 768 ) {
                ( element.classList.contains ( "lazy-sm" ) ) ? proto_render( element, data ) : proto_remove( element, data );
                console.log('show in sm scale');
            }
            else if ( window.innerWidth < 1024 ) {
                ( element.classList.contains ( "lazy-md" ) ) ? proto_render( element, data ) : proto_remove( element, data );
                console.log('show in md scale');
            }
            else if ( window.innerWidth < 1280 ) {
                ( element.classList.contains ( "lazy-lg" ) ) ? proto_render( element, data ) : proto_remove( element, data );
                console.log('show in lg scale');
            }
            else if ( window.innerWidth > 1280 ) {
                ( element.classList.contains ( "lazy-xl" ) ) ? proto_render( element, data ) : proto_remove( element, data );
                console.log('show in xl scale');
            }
        });
    } 
}


let proto_valids = ()=> {
    document.querySelector("noscript").remove();
}


window.addEventListener('load', ()=> {
    proto_loader();
    proto_valids();
})