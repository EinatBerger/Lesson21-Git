'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var size = (+elBall.innerText + 50 > 400) ? 100 : +elBall.innerText + 50


    elBall.innerText = size
    elBall.style.width = size + 'px'
    elBall.style.height = size + 'px'
}