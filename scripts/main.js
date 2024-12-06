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
let mortgageAmount = 0
let mortgageTerm = 0
let interest = 0
resultsMonthly = 0
resultsTotal = 0
function getResults() {
    mortgageAmount = parseFloat(amountData.value)
    mortgageTerm = parseInt(amountYears.value)
    interest = parseFloat(interestRate.value)
    if (mortgageAmount !== 0 && mortgageTerm !== 0 && interest !== 0){
        p = mortgageAmount;
        int = interest / 100;
        r = int / 12;
        n = mortgageTerm * 12;
        let rs = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        form.addEventListener('click',(e)=>{
            let target = e.target
            if(target.tagName === "INPUT" && target.id === "repayment"){
                send.addEventListener('click', ()=>{
                    resultsMonthly.textContent = `${rs.toFixed(2)}`
                    resultsTotal.textContent = `${rs.toFixed(3) * n}`
                    toggleModal()
                    toggleModalResults()
                })
            } else if(target.tagName === "INPUT" && target.id === "interest-only"){
                send.addEventListener('click', ()=>{
                    let interesT = rs * n - p
                    resultsMonthly.textContent = `${interesT.toFixed(3)}`
                    resultsTotal.textContent = `${rs.toFixed(3) * n}`
                    toggleModal()
                    toggleModalResults()
                })
            }
        })
    }
}

/* getRetults()
function interesTotal(resultsMonthly, resultsTotal, n) {
    let iTotal = resultsMonthly * resultsTotal - n
} */
    /* function operation() {   
    }
     */

    amountYears.addEventListener('input', getResults)
    amountData.addEventListener('input', getResults)
    interestRate.addEventListener('input', getResults)
    
    function toggleModal() {
        empty.classList.toggle('d-none')
    }
    function toggleModalResults() {
        ModalfinalResult.classList.toggle('d-none')
    }
    getResults() 