console.log('Xterm footer script loaded');
import XtermPlayer from 'scripts/format/xterm/_core/engine.js'

let webi_xterm_format = () => {
    let frames = document.getElementById("xterm-render");
    let caster = document.getElementById("xterm-player").getAttribute('data-uri');
    let videos = XtermPlayer.create(caster, frames);
    videos.play();
}
webi_xterm_format();