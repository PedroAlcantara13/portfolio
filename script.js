let cont = 0
let limit = 2
const estilo = document.querySelector('body')
const imga = document.querySelector('#img-avatar')
const imgs = document.querySelector('#img-social')

function prox(){
    cont += 1

    if(cont == 1){
    imga.src = "img/goku.gif"
    imgs.src = "img/goku.jpg"
    estilo.classList.add('goku')
    }

    if(cont == limit){
    imga.src = "img/zenitsu.gif"
    imgs.src = "img/zenitsu.jpg"
    estilo.classList.remove('goku')
    estilo.classList.add('zenitsu')
    }

    if(cont == limit+1 || cont == 0){
    imga.src = "img/download.gif"
    imgs.src = "img/sasuke.jpg"
    estilo.classList.remove('zenitsu')
    estilo.classList.add('sasuke')
    cont = 0
    }
}

function ante(){
    cont -= 1

    if(cont == 1){
    imga.src = "img/goku.gif"
    imgs.src = "img/goku.jpg"
    estilo.classList.remove('zenitsu')
    estilo.classList.add('goku')
    }

    if(cont == limit || cont< 0){
    imga.src = "img/zenitsu.gif"
    imgs.src = "img/zenitsu.jpg"
    estilo.classList.add('zenitsu')
    cont = limit
    }

    if(cont == limit+1 || cont == 0){
    imga.src = "img/download.gif"
    imgs.src = "img/sasuke.jpg"
    estilo.classList.remove('goku')
    estilo.classList.add('sasuke')
    cont = 0
    }
}

const bport1 = document.querySelector('[bot-port1]')
const bport2 = document.querySelector('[bot-port2]')
const bport3 = document.querySelector('[bot-port3]')
bport1.addEventListener('click', bPortSelect1)
bport2.addEventListener('click', bPortSelect2)
bport3.addEventListener('click', bPortSelect3)
const area1 = document.getElementById("a1")
const area2 = document.getElementById("a2")
const area3 = document.getElementById("a3")
area2.style.display = "none"
area3.style.display = "none"

function bPortSelect1(){
    bport2.classList.remove('botao-port-select')
    bport3.classList.remove('botao-port-select')
    bport1.classList.add('botao-port-select')
    console.log("B1")

    area1.style.display = "flex"
    area2.style.display = "none"
    area3.style.display = "none"
}
function bPortSelect2(){
    bport1.classList.remove('botao-port-select')
    bport3.classList.remove('botao-port-select')
    bport2.classList.add('botao-port-select')

    area1.style.display = "none"
    area2.style.display = "flex"
    area3.style.display = "none"
}
function bPortSelect3(){
    bport1.classList.remove('botao-port-select')
    bport2.classList.remove('botao-port-select')
    bport3.classList.add('botao-port-select')

    area1.style.display = "none"
    area2.style.display = "none"
    area3.style.display = "flex"

}