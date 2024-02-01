'use strict'

function onBallClick(elBall) {
    const maxDiameter = 400
    // const elBall = document.querySelector('.ball')
    var size = (+elBall.innerText + 50 > maxDiameter) ? 100 : +elBall.innerText + 50


    elBall.innerText = size
    elBall.style.width = size + 'px'
    elBall.style.height = size + 'px'
    elBall.style.backgroundColor = getRandomColor()
}