const inputNome = document.getElementById('primeiro')

const inputSobrenome = document.getElementById('sobrenome')

const botaoEnviar = document.querySelector('button')
botaoEnviar.addEventListener('click', () => {
    const nome = inputNome.value
    
    const sobrenome = inputSobrenome.value
    
    const coluna1 = document.createElement('td')
    coluna1.appendChild(document.createTextNode(nome))
    
    const coluna2 = document.createElement('td')
    coluna2.appendChild(document.createTextNode(sobrenome))
    
    const linha = document.createElement('tr')
    linha.appendChild(coluna1)
    linha.appendChild(coluna2)

    const table = document.querySelector('tbody')
    table.appendChild(linha)
    console.log(table);

})


function naoAtulaizar(e) {
    e.preventDefault()
}

const tabela = document.querySelector('tbody')
tabela.addEventListener('dblclick',e => {
    e.target.parentNode.remove()    
})