const amountData = document.querySelector('#amount-data')
const amountYears = document.querySelector('#amount-years')
const interestRate = document.querySelector('#interest-rate')
const send = document.querySelector('#enviar')
const form = document.querySelector('#form')
const resultsMonthly = document.querySelector('#results-monthly')
const resultsTotal = document.querySelector('#results-total')
const empty = document.querySelector('.empty')
const ModalfinalResult = document.querySelector('.final-result')
const repayment = document.querySelector('#repayment')
const interestOnly = document.querySelector('#interest-only')
const clear = document.querySelector('#clear')
const alertas = document.querySelector('.msj-alert')
const alertasTerm = document.querySelector('.msj-term')
const alertasAll = document.querySelector('.msj-all')
const libra = document.querySelector('.libra ')
const years = document.querySelector('.years ')
const porcentaje = document.querySelector('.porcentaje')
const fieldAlert = document.querySelector('.alerta-field')
const fieldAlertTerm = document.querySelector('.alerta-field-term')
const fieldAlertAll = document.querySelector('.alerta-field-all')
let mortgageAmount = 0
let mortgageTerm = 0
let interest = 0
let pause = false
function getResults() {
    mortgageAmount = parseFloat(amountData.value)
    mortgageTerm = parseInt(amountYears.value)
    interest = parseFloat(interestRate.value)
    p = mortgageAmount;
    int = interest / 100;
    r = int / 12;
    n = mortgageTerm * 12;
    let rs = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    if (repayment.checked && mortgageAmount !== 0 && mortgageTerm !== 0 && interest !== 0) {
        resultsMonthly.textContent = `₤${rs.toLocaleString('en')}`
        total = rs * n
        resultsTotal.textContent = `₤${total.toLocaleString('en')}`
        toggleModalResults()
    } else if (interestOnly.checked && mortgageAmount !== 0 && mortgageTerm !== 0 && interest !== 0) {
        let interesT = rs * n - p
        resultsMonthly.textContent = `₤${interesT.toLocaleString('en')}`
        total = rs * n
        resultsTotal.textContent = `₤${total.toLocaleString('en')}`
        toggleModalResults()
    } else if (!repayment.checked || !interestOnly.checked && amountData.value === "" && amountYears.value === "" && interestRate.value === "") {
        alertas.style = "border: 1.4px solid hsl(4, 69%, 50%);"
        alertasTerm.style = "border: 1.4px solid hsl(4, 69%, 50%);"
        alertasAll.style = "border: 1.4px solid hsl(4, 69%, 50%);"
        libra.style = "background-color: hsl(4, 69%, 50%); color:white;"
        years.style = "background-color: hsl(4, 69%, 50%); color:white;"
        porcentaje.style = "background-color: hsl(4, 69%, 50%); color:white;"
        fieldAlert.classList.remove('d-none')
        fieldAlertTerm.classList.remove('d-none')
        fieldAlertAll.classList.remove('d-none')
    }

}

function clearTablero() {
    console.log("borrando");
    amountData.value = ""
    amountYears.value = ""
    interestRate.value = ""
    alertas.style = ""
    alertasTerm.style = ""
    alertasAll.style = ""
    libra.style = ""
    years.style = ""
    porcentaje.style = ""
    ModalfinalResult.classList.add('d-none')
    empty.classList.remove('d-none')

}
amountYears.addEventListener('input', () => {
    if (amountYears.value) {
        alertas.style = ""
        alertasTerm.style = ""
        alertasAll.style = ""
        libra.style = ""
        years.style = ""
        porcentaje.style = ""
        fieldAlert.classList.add('d-none')
        fieldAlertTerm.classList.add('d-none')
        fieldAlertAll.classList.add('d-none')
    }
})
amountData.addEventListener('input', () => {
    if (amountData.value) {
        alertas.style = ""
        alertasTerm.style = ""
        alertasAll.style = ""
        libra.style = ""
        years.style = ""
        porcentaje.style = ""
        fieldAlert.classList.add('d-none')
        fieldAlertTerm.classList.add('d-none')
        fieldAlertAll.classList.add('d-none')
    }
})
interestRate.addEventListener('input', () => {
    if (interestRate.value) {
        alertas.style = ""
        alertasTerm.style = ""
        alertasAll.style = ""
        libra.style = ""
        years.style = ""
        porcentaje.style = ""
        fieldAlert.classList.add('d-none')
        fieldAlertTerm.classList.add('d-none')
        fieldAlertAll.classList.add('d-none')
    }
})
clear.addEventListener('click', clearTablero)
function toggleModal() {
    empty.classList.toggle('d-none')
}
function toggleModalResults() {
    ModalfinalResult.classList.remove('d-none')
    empty.classList.add('d-none')
}
send.addEventListener('click', getResults)

