console.log('Parted : main | shift : critical | scope : navs | source : default | type : script | status : loaded')

let darkmodes = localStorage.getItem('darkmode');

if ( ! darkmodes )
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
        document.documentElement.setAttribute("dark-mode", "dark");
    }
    else {
        document.documentElement.setAttribute("dark-mode", "light");
    }
else if ( darkmodes == 2 ) {
    document.documentElement.setAttribute("dark-mode", "dark");
}
else if ( darkmodes == 3 )  {
    document.documentElement.setAttribute("dark-mode", "light");
}