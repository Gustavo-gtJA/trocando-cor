'use strict'

const ButtonTrocaCor = document.getElementById('trocar-cor')



function trocaCor(){
    const cor = document.getElementById('cor', ).value

    const cores = {
        vermelho : 'red',
        azul : 'blue',
        laranja : 'orange',
        vermelho : 'red'
    }

if(cores[cor]){
    document.documentElement.style.setProperty('--cor-bg', cores[cor])
}else{alert("erro")}
   
    

}
ButtonTrocaCor.addEventListener('click', trocaCor)





