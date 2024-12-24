const url = 'https://intermediary-api.vercel.app/api'

fetch(url)
.then(response => response.json())
.then(data => {

    consumirDados(data)
    console.log(data)

})
.catch(error => {

    console.error('Error fetching data:', error);

});

let firstLeitura = {
    text: '',
    referencia:'',
    titulo:''

}
let salmosDay = {
    text: '',
    referencia:'',
    refrao:''
}
let secondLeitura = {
    text: '',
    referencia:'',
    titulo:''
}
let liturgia = {
    text: '',
    referencia:'',
    titulo:''
}

let color = {
    cor: '',
    hexLight: '',
    hexDark: ''
}

function consumirDados(dados) {

    //mostrando a data da liturgia
    date.textContent = `${dados.data}`
    liturgicalDay.textContent = `${dados.liturgia}`

    //coletando os dados da primeira leitura
    firstLeitura.text = dados.primeiraLeitura.texto
    firstLeitura.referencia = dados.primeiraLeitura.referencia
    firstLeitura.titulo = dados.primeiraLeitura.titulo

    //coletando os dados do salmo
    salmosDay.text = dados.salmo.texto
    salmosDay.referencia = dados.salmo.referencia
    salmosDay.refrao = dados.salmo.refrao

    //verificando se possui segunda leitura
    if(dados.segundaLeitura != "Não há segunda leitura hoje!"){
        //coletando segunda leitura
        exibirSecondReading()
        secondLeitura.text = dados.segundaLeitura.texto
        secondLeitura.referencia = dados.segundaLeitura.referencia
        secondLeitura.titulo = dados.segundaLeitura.titulo

    }else{

        ocultarSecondReading()
        console.log('Não há segunda leitura');

    }

    //coletando liturgia
    liturgia.text = dados.evangelho.texto
    liturgia.referencia = dados.evangelho.referencia
    liturgia.titulo = dados.evangelho.titulo

    //coletar a cor liturgica
    color.cor = dados.cor
    colectCollors()

    gerarFirstLeitura()

}

var articleText = document.getElementById('texto')
var ulButtons = document.querySelector("#buttonsMenu")

var liOneLeitura = document.querySelector('#liOneLeitura')
var sectionActive = liOneLeitura
var oldSectionActive = ''

function gerarFirstLeitura() {

    oldSectionActive = sectionActive
    sectionActive = liOneLeitura
    articleText.innerHTML = `${firstLeitura.referencia} <br> ${firstLeitura.titulo} <br> ${firstLeitura.text}`
    adequarEstilos()
    exibirLoad()

    liOneLeitura.textContent = '1° Leitura'
    liSalmos.textContent = 'Salmos'
    liEvangelho.textContent = 'Evangelho'

}

liOneLeitura.addEventListener('click', () => {

    gerarFirstLeitura()

})

var liSalmos = document.querySelector('#liSalmos')
liSalmos.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = liSalmos
    articleText.innerHTML = `${salmosDay.referencia} <br> ${salmosDay.refrao} <br> ${salmosDay.text}`
    adequarEstilos()


})

var LiTwoLeitura = document.querySelector('#liTwoLeitura')
LiTwoLeitura.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = LiTwoLeitura
    articleText.innerHTML = `${secondLeitura.referencia} <br> ${secondLeitura.titulo} <br> ${secondLeitura.text}`
    adequarEstilos()

})

var liEvangelho = document.querySelector('#liEvangelho')
liEvangelho.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = liEvangelho
    articleText.innerHTML = `${liturgia.referencia} <br> ${liturgia.titulo} <br> ${liturgia.text}`
    adequarEstilos()

})

function adequarEstilos() {

    /*  if(item.contains.classList('button-active')){
         item.clasList.remove('button-active')
        }  
    */

    if (oldSectionActive != sectionActive) {

        oldSectionActive.classList.remove('button-active')
        sectionActive.classList.add('button-active')

    } else {

        sectionActive.classList.add('button-active')

    }

}

function ocultarSecondReading(){

    LiTwoLeitura.style.display = 'none'
    LiTwoLeitura.textContent = ''

}

function exibirSecondReading(){

    LiTwoLeitura.style.display = 'block'
    LiTwoLeitura.textContent = '2° Leitura'

}

function colectCollors() {

    //definindo cor liturgica para adequar ao site
    switch(color.cor){

        case 'Branco':
            color.hexLight = '#bebebe'
            color.hexDark = '#828a94'
            break
        case 'Roxo':
            color.hexLight = '#a56db9'
            color.hexDark = '#674175'
            break
        case 'Vermelho':
            color.hexLight = '#d88989'
            color.hexDark = '#7a4c4c'
            break
        case 'Verde':
            color.hexLight = '#83ac7e'
            color.hexDark = '#557052'
            break
        case 'Rosa':
            color.hexLight = '#f1a3d7'
            color.hexDark = '#996482'
            break   
        case 'Preto':
            color.hexLight = '#838182'
            color.hexDark = '#504f4f'
            break

    }

    adequarColor(color.hexLight, color.hexDark)

}

function adequarColor(corLight, corDark){

    document.documentElement.style.setProperty('--color-main00', `${corDark}`)

    document.documentElement.style.setProperty('--color-main01', `${corLight}`)

}

/* 
    tela de carregamento
*/
var loadItem = document.querySelector(".loading")
function exibirLoad(){

    if(articleText.hasChildNodes()){

        loadItem.style.display = 'none'

    } else{

        loadItem.style.display = 'flex'

    }

}

exibirLoad()