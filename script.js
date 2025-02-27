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


const url = 'http://localhost:3000/showcase'
async function ListarT(){
    const resp = await fetch(url);
    if(resp.status === 200){
        const obj = await resp.json();
        for(var i=0;i < obj[1].info.length; i++){
            area1.innerHTML += `
                <div class="card-proj3">
                    <div><img class="card-image-proj3" src="${obj[1].info[i].img}" alt=""></div>
                    <div class="heading">${obj[1].info[i].nome}</div>
                </div>
    `;
            console.log(obj[1].info[i].nome)
        }
    }
}

function bPortSelect1(){
    area1.innerHTML = `
    <div class="flex-port">
        <div class="card-proj">
            <div><img class="card-image-proj" src="img/Moon_Scout_Spray.png" alt=""></div>
            <div class="category">Teste</div>
            <div class="heading"> A heading that must span over two lines
            <div class="author"> By <span class="name">Abi</span> 4 days ago</div></div>
        </div>
    </div>
    `;

}
function bPortSelect2(){
    area1.innerHTML = `
    <div class="flex-port">
        <div class="card-proj">
            <div><img class="card-image-proj" src="img/Coursera 4J1PIG0YXQ5D_page-0001.jpg" alt=""></div>
        </div>
    </div>
    `;
}
function bPortSelect3(){
    ListarT()
}

//json-server --watch db.json --port 3000
