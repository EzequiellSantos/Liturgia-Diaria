const url = 'https://api-liturgia-diaria.vercel.app/'

fetch(url, {
    method: 'GET'
})
    .then(response => {

        if (!response.ok) {
            throw new Error('Erro na chamada de API')
        }

        return response.json()
    })
    .then(data => {

        consumirDados(data)

    })
    .catch(error => {

        console.error(error.message);

    })

let firstLeitura = {
    text: {}
}
let salmosDay = {
    text: {}
}
let secondLeitura = {
    text: {}
}
let liturgia = {
    text: {}
}

function consumirDados(dados) {

    //mostrando a data da liturgia
    date.textContent = `${dados.today.date}`
    liturgicalDay.textContent = `${dados.today.entry_title}`

    //coletando os dados da primeira leitura
    firstLeitura.text = dados.today.readings.first_reading.all_html

    //coletando os dados do salmo
    salmosDay.text = dados.today.readings.psalm.all_html

    //coletando segunda leitura
    secondLeitura.text = dados.today.readings.second_reading.all_html

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

var liLiturgia = document.querySelector('#liLiturgia')
liLiturgia.addEventListener('click', () => {

    oldSectionActive = sectionActive
    sectionActive = liLiturgia
    articleText.innerHTML = `${liturgia.text}`
    adequarEstilos()

})

function adequarEstilos() {

    /*  if(item.contains.classList('button-active')){
         item.clasList.remove('button-active')
     } */


    if (oldSectionActive != sectionActive) {
        oldSectionActive.classList.remove('button-active')
        sectionActive.classList.add('button-active')
    } else {
        sectionActive.classList.add('button-active')
    }

}
