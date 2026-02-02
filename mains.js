'use strict'

const ButtonTrocaCor = document.getElementById('trocar-cor')

function trocaCor(){
    const cor = document.getElementById('cor').value 
    document.documentElement.style.setProperty('--cor-bg', cor)

}
ButtonTrocaCor.addEventListener('click', trocaCor)





