var inputNome = document.getElementById('primeiro')

var inputSobrenome = document.getElementById('sobrenome')

var botaoEnviar = document.querySelector('button')
botaoEnviar.addEventListener('click', function() {
    var nome = inputNome.value
    
    var sobrenome = inputSobrenome.value
    
    var coluna1 = document.createElement('td')
    coluna1.appendChild(document.createTextNode(nome))
    
    var coluna2 = document.createElement('td')
    coluna2.appendChild(document.createTextNode(sobrenome))
    
    var linha = document.createElement('tr')
    linha.appendChild(coluna1)
    linha.appendChild(coluna2)

    var table = document.querySelector('tbody')
    table.appendChild(linha)
    console.log(table);

})


function naoAtulaizar(e) {
    e.preventDefault()
}

var tabela = document.querySelector('tbody')
tabela.addEventListener('dblclick',function(e) {
    e.target.parentNode.remove()    
})