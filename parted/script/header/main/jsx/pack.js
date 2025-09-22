console.log('Parted : main | shift : deffered | scope : navs | source : default | type : script | status : loaded')

let darkmode = document.getElementById('darkmodes');
let darkproc = ()=> {
    let darkitem = darkmode.querySelectorAll('.mode');
    let darkelem = Array.prototype.slice.call(darkitem);

    darkelem.forEach( element => {

        let mode = element.getAttribute('data-mode');
        let nows = localStorage.getItem('darkmode');

        if ( nows == 2 ) {
            darkmode.querySelector('.darks .icon').classList.add('open');
        }
        else if ( nows == 3 ) {
            darkmode.querySelector('.light .icon').classList.add('open');
        }
        else {
            darkmode.querySelector('.systo .icon').classList.add('open');
        }

        element.addEventListener('click', ()=> {

            if ( mode == 1 ) {
                darkmode.querySelector('.systo .icon').classList.remove('open');
                darkmode.querySelector('.darks .icon').classList.add('open');
                document.documentElement.setAttribute("dark-mode", "dark");
                localStorage.setItem('darkmode', '2');
            }
            else if (  mode == 2 ) {
                darkmode.querySelector('.darks .icon').classList.remove('open');
                darkmode.querySelector('.light .icon').classList.add('open');
                document.documentElement.setAttribute("dark-mode", "light");
                localStorage.setItem('darkmode', '3');
            }
            else if ( mode == 3 ) {
                darkmode.querySelector('.light .icon').classList.remove('open');
                darkmode.querySelector('.systo .icon').classList.add('open');

                if (window.matchMedia &&  window.matchMedia('(prefers-color-scheme: dark)').matches ) {
                    document.documentElement.setAttribute("dark-mode", "dark");
                }
                else {
                    document.documentElement.setAttribute("dark-mode", "light");
                }
                localStorage.removeItem('darkmode');
            }
        });
    });

}
if ( darkmode ) { darkproc(); } 
