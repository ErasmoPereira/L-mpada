window.onload = () => {
    //seleção de elementos
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

//função

function isLampBroken (){
    return lamp.src.indexOf('quebrada3') > -1
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.src ='./img/ligada3.jpg';
    }
    
    
}
function lampOff (){
    if (!isLampBroken ()) {
        lamp.src = './img/desligada.jpg';
}
}
function lampBroken (){
    if (!isLampBroken ()) {
        lamp.src = './img/quebrada3.jpg'
}
}


//eventos
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn) // quando o mouse passar por cima da lampada ela ira ligar
lamp.addEventListener('mouseleave', lampOff) // quando o mouse sair de cima da lampada ela ira desligar
lamp.addEventListener('dblclick', lampBroken)
}

