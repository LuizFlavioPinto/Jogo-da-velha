let jogador = 'X'
let tabuleiro = ["","","","","","","","",""]

// Setar Atributo no Tabuleiro e Validar Jogada

function jogada(posClicada) { 
    let divClicada = document.getElementById(posClicada)
    if(tabuleiro[posClicada-1] === ""){
        
        tabuleiro[posClicada-1]= jogador
        
        divClicada.innerHTML = jogador
        divClicada.style.cursor = 'auto'

        checarVencedor()
        mudarJogador()
    }else {
        alert('Jogada inválida')
    }
}

// Reiniciar página

const reStart = () => location.reload() 

// Mudar jogador 

function mudarJogador (){
    jogador = jogador === 'X' ? 'O' : 'X'
    let jogadorDaVez = document.getElementById('rodada')
    jogadorDaVez.innerHTML = `<p>Vez Do Jogador: ${jogador}</p>`
}

// Setar Vencedor 

function checarVencedor () {

    let possVit = [false,false,false,false,false,false,false,false,false]
    
    // Horizontal
    possVit[0] = (tabuleiro[0] === jogador) && tabuleiro[0] === tabuleiro[1] && tabuleiro[1] === tabuleiro[2]? true: false
    possVit[1] = (tabuleiro[3] === jogador) && tabuleiro[3] === tabuleiro[4] && tabuleiro[4] === tabuleiro[5]? true: false
    possVit[2] = (tabuleiro[6] === jogador) && tabuleiro[6] === tabuleiro[7] && tabuleiro[7] === tabuleiro[8]? true: false
    
    // Vertical
    possVit[3] = (tabuleiro[0] === jogador) && tabuleiro[0] === tabuleiro[3] && tabuleiro[3] === tabuleiro[6]? true: false
    possVit[4] = (tabuleiro[1] === jogador) && tabuleiro[1] === tabuleiro[4] && tabuleiro[4] === tabuleiro[7]? true: false
    possVit[5] = (tabuleiro[2] === jogador) && tabuleiro[2] === tabuleiro[5] && tabuleiro[5] === tabuleiro[8]? true: false
    
    // Cruzado
    possVit[6] = (tabuleiro[0] === jogador) && tabuleiro[0] === tabuleiro[4] && tabuleiro[4] === tabuleiro[8]? true: false
    possVit[7] = (tabuleiro[4] === jogador) && tabuleiro[2] === tabuleiro[4] && tabuleiro[4] === tabuleiro[6]? true: false

    if(tabuleiro.indexOf("", 0) === -1){
        setTimeout(reStart, 500)
        alert('Deu velha!!')
    } else{
        for(let i = 0; i < 8; i++){
            if(possVit[i]){
                setTimeout(reStart, 500)
                alert(`Jogador ${jogador} ganhou!!!`)
            }    
        }  
    } 
}