let rei = 'Pode andar uma casa para todas as direções'
let dama = 'Pode andar quantas casas quiser para qualquer direção'
let torre = 'Pode andar quantas casas quiser somente na horizal e na vertical'
let cavalo = 'Faz um movimento em L'
let bispo = 'Pode andar quantas casas quiser somente na diagonal'
let peao = 'Só pode andar uma casa na vertical para frente'

let nomePeca = prompt('Digite o nome de uma peça de xadrez')

    nomePeca = nomePeca.toLowerCase()

switch (nomePeca) {
    case 'dama':
        alert(dama)
        break;

    case 'rei':
        alert(rei)
        break;

    case 'torre':
        alert(torre)
        break;

    case 'cavalo':
        alert(cavalo)
        break;

    case 'bispo':
        alert(bispo)
        break;

    case 'peão':
        alert(peao)
        break;
        
    default:
        alert('peça invalida');
        break;
}