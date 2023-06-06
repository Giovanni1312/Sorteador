let dado = document.getElementById('dadoimg')
let button = document.getElementById('botao')
let resultado = document.getElementById('resultado')
let imagem = document.createElement("img")

let rolagem = () => {
    let roll = Math.floor(Math.random() * 6) + 1
    resultado.textContent = `Deu ${roll}`
    imagem.src = `face${roll}.png`
    resultado.innerHTML = ''
    resultado.appendChild(imagem)
}

button.addEventListener('click', rolagem)