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

let mortgageAmount = 0
let mortgageTerm = 0
let interest = 0
let pause = false
function getResults() {
    mortgageAmount = parseFloat(amountData.value)
    mortgageTerm = parseInt(amountYears.value)
    interest = parseFloat(interestRate.value)
    if (mortgageAmount !== 0 && mortgageTerm !== 0 && interest !== 0) {
        p = mortgageAmount;
        int = interest / 100;
        r = int / 12;
        n = mortgageTerm * 12;
        let rs = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
       send.addEventListener('click', () => {
            if (repayment.checked && mortgageAmount !== 0 && mortgageTerm !== 0 && interest !== 0) {
                resultsMonthly.textContent = `₤${rs.toLocaleString('en')}`
                total = rs * n
                resultsTotal.textContent = `₤${total.toLocaleString('en')}`
                toggleModal()
                toggleModalResults()
            } else if(interestOnly.checked && mortgageAmount !== 0 && mortgageTerm !== 0 && interest !== 0){            
                let interesT = rs * n - p
                resultsMonthly.textContent = `₤${interesT.toLocaleString('en')}`
                total = rs * n
                resultsTotal.textContent = `₤${total.toLocaleString('en')}`
                toggleModal()
                toggleModalResults()
            }
       }) 
    }
}

function clearTablero() {
    amountData.value = ""
    amountYears.value = ""
    interestRate.value = ""
    resultsMonthly = ""
    resultsTotal = ""
    toggleModal()
}
amountYears.addEventListener('input', getResults)
amountData.addEventListener('input', getResults)
interestRate.addEventListener('input', getResults)
clear.addEventListener('click', clearTablero)
function toggleModal() {
    empty.classList.toggle('d-none')
}
function toggleModalResults() {
    ModalfinalResult.classList.toggle('d-none')
}
