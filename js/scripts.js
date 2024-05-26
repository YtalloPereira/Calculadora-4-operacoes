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
        this.updateScreen()
    }

    //processando todas as operações da calculadora
    processOperation(operation){
        //checando se o valor atual é vazio para tornar possivel a mudança de operação
        if(this.currentOperationText.innerText ===''){
            //Mudando a operação
            if(this.previousOperationText.innerText !== ''){
                this.changeOperation(operation)
            }
            return
        }
        //pegando os valores atuais e anteriores
        let operationValue
        const previous = +this.previousOperationText.innerText.split(' ')[0]
        const current = +this.currentOperationText.innerText

        switch(operation){
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '*':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case 'DEL':
                this.processDelOperator()
                break
            case 'CE':
                this.processClearCurrentOperation()
                break
           
            default:
                return
        }
    }

    //Atualiza os valores na tela ou seja mostra os valores dos botões que o usuário clicoi
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
    ){
        console.log(operationValue, operation, current, previous)
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation
        }else{
            //checando se o valor é zero, se sim, é adicionado ao atual
            if(previous === 0){
                operationValue = current
            }
            //adicionando o valor atual para ao anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ''
        }
    }

    //método que vai efetivamente mudar as operações
    changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];
    
        if (!mathOperations.includes(operation)) {
          return;
        }
    
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
      }
      //deleta  o último dígito
      processDelOperator(){
        this.currentOperationText.innerText  = this.currentOperationText.innerText.slice(0, -1)
      }
      //limpa a operação atual
      processClearCurrentOperation(){
        this.currentOperationText.innerText  = ''
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
            calc.processOperation(value)
        }
    })
})