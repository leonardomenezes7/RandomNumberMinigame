// Variavéis
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const error = document.querySelector(".error")
const inputNumber = document.querySelector("#inputNumber")
//Função para capturar o valor do input e verificar se é igual ao número gerado aleatóriamente
function clickButton(event) {
  event.preventDefault()
 

  if(Number(inputNumber.value == randomNumber)) {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    error.classList.add('hide')
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  } 
  
  if(Number(inputNumber.value != randomNumber)) {
    if(inputNumber.value === "") {
      return
    }
    error.classList.remove('hide')
  } 

  if(inputNumber.value != "") {
    xAttempts++
  }
  
  inputNumber.value = ""
}

btnTry.addEventListener("click",clickButton)

// Função para resetar o programa por completo e voltar a primeira tela
function resetClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}
btnReset.addEventListener("click",resetClick)

// Função anônima para resetar o programa por completo usando enter na segunda tela
document.addEventListener("keydown", function(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    resetClick()
  }
})

function removeError() {
  error.classList.add("hide")
}
