const url = 'https://intermediary-api.vercel.app/api'

fetch(url)
.then(response => response.json())
.then(data => {

    consumirDados(data)

})
.catch(error => {

    console.error('Error fetching data:', error);

});

let firstLeitura = {
    text: ''
}
let salmosDay = {
    text: ''
}
let secondLeitura = {
    text: ''
}
let liturgia = {
    text: ''
}

function consumirDados(dados) {

    //mostrando a data da liturgia
    date.textContent = `${dados.today.date}`
    liturgicalDay.textContent = `${dados.today.entry_title}`

    //coletando os dados da primeira leitura
    firstLeitura.text = dados.today.readings.first_reading.all_html

    //coletando os dados do salmo
    salmosDay.text = dados.today.readings.psalm.all_html

    //verificando se possui segunda leitura
    if(dados.hasOwnProperty('second_reading')){

        //coletando segunda leitura
        exibirSecondReading()
        secondLeitura.text = dados.today.readings.second_reading.all_html

    }else{

        ocultarSecondReading()
        console.log('Não há segunda leitura');

    }

    //coletando liturgia
    liturgia.text = dados.today.readings.gospel.all_html

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
    articleText.innerHTML = `${firstLeitura.text}`
    adequarEstilos()

}

liOneLeitura.addEventListener('click', () => {

    gerarFirstLeitura()

})

var liSalmos = document.querySelector('#liSalmos')
liSalmos.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = liSalmos
    articleText.innerHTML = `${salmosDay.text}`
    adequarEstilos()


})

var LiTwoLeitura = document.querySelector('#liTwoLeitura')
LiTwoLeitura.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = LiTwoLeitura
    articleText.innerHTML = `${secondLeitura.text}`
    adequarEstilos()

})

var liEvangelho = document.querySelector('#liEvangelho')
liEvangelho.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = liEvangelho
    articleText.innerHTML = `${liturgia.text}`
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
