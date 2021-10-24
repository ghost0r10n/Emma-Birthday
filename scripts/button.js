let button = document.getElementById('info-button')
let infoContainer = document.getElementById('information-container')
let animateState = false




function waitingFun() {
let button = document.getElementById('info-button')

    setInterval(function () {
        if (!animateState) {
            button.style.bottom = '13px'
            button.style.fontSize = '16pt'
            animateState = true
        } else {
            button.style.bottom = '0px'
            button.style.fontSize = '14pt'
            animateState = false
        }
    }, 500)
}


function showInformation(state){

let infoContainer = document.getElementById('information-container')

if(state==0){
    
    infoContainer.style.zIndex=10
    infoContainer.style.opacity='1'
    
}else{
    infoContainer.style.zIndex=0
    infoContainer.style.opacity='0'
    
}



}