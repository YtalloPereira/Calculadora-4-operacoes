//selecionando os components da view
const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

//iterando  todos os botões para adicionar os listeners
buttons.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        //valor do botão que o usuário clicou
        const value = e.target.innerText
        //verificando se o valor é um número ou uma operação
        if(+value >= 0 || value === '.'){
            console.log(value)
        }else{
            console.log('Op: '+ value)
        }
    })
})