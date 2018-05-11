run();

function run() {
    document.body.addEventListener('keydown', onKeyDown);
}


function onKeyDown(e) {
    var key = document.querySelector('.key[data-key="' + e.keyCode +'"]');
    key.classList.add('playing');
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();


}

const keys = document.querySelectorAll('.keys');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
    e.target.classList.remove('playing');
}