let list_nums_random = [];
let num_limit = 100;
let num_sec = gerar_random();
let tentativas = 1;
function exibir_texto(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
} 
function exibir_mensagem_inicio(){
    exibir_texto('h1', 'jogo do numero secreto');
    exibir_texto('p', 'Escolha um numero entre 1 e 10');
}aaaaaaa
exibir_texto('h1', 'jogo do numero secreto');
exibir_texto('p', 'Escolha um numero entre 1 e 10');

function btn_verificar_chute() {
    let chute = document.querySelector('input').value;
    if(chute == num_sec){
       exibir_texto('h1','Acertou!');
       let palavra_tentativas = tentativas  > 1 ? 'tentativas' : 'tentativa';
       let mensagem_tentativas = `voce acertou com ${tentativas} ${palavra_tentativas}`;
       exibir_texto('p', mensagem_tentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
       if(chute < num_sec){ 
            exibir_texto('p','O numero secreto e maior!');
        } else{
            exibir_texto('p', 'O numero secreto e menor!');
        }
        tentativas++;
        clear();
    }
}
function gerar_random(){
    let num_escolhido = parseInt(Math.random() * num_limit + 1 );
    let qtde_element_list = list_nums_random.length;
    if(qtde_element_list == 10){
       list_nums_random = [];
    }
    if(list_nums_random.includes(num_escolhido)){

        return gerar_random();
    }else{
        list_nums_random.push(num_escolhido);
        console.log(list_nums_random);
        return num_escolhido;
    }
} 
function clear(){
    chute = document.querySelector('input');
    chute.value = '';
}
function btn_reiniciar(){
    num_sec = gerar_random();
    clear();
    tentativas = 1; 
    exibir_mensagem_inicio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


