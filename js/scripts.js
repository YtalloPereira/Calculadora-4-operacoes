//selecionando os components da view
const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

//Defino uma classe para a calculadora
class Calculator{
    constructor(previousOperationText, currentOperationText){
        //valores impressos na tela 
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        //valor que o usuário está digitando no momento
        this.currentOperation = ''
    }
    //Adicionando digito na tela
    addDigit(digit){
        //checando se a operação atual ja tem um ponto/
        if(digit === '.' && this.currentOperationText.innerText.includes('.')){
            return
        }
        this.currentOperation = digit
        this.updateScren()
    }

    //Atualiza os valores na tela ou seja mostra os valores dos botões que o usuário clicoi
    updateScren(){
        this.currentOperationText.innerText += this.currentOperation
    }
}

const calc = new Calculator(previousOperationText,currentOperationText)

//iterando  todos os botões para adicionar os listeners
buttons.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        //valor do botão que o usuário clicou
        const value = e.target.innerText
        //verificando se o valor é um número ou uma operação
        if(+value >= 0 || value === '.'){
            calc.addDigit(value)
        }else{
            console.log('Op: '+ value)
        }
    })
})