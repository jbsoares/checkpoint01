/*1 ͦ Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto.É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.Veja abaixo os requisitos do projeto:

 - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré - definidos. 
1 - Pipoca – 10 segundos(padrão);
2 - Macarrão – 8 segundos(padrão);
3 - Carne – 15 segundos(padrão);
4 - Feijão – 12 segundos(padrão);
5 - Brigadeiro – 8 segundos(padrão);

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/


function listaAlimentos(){
    return("1-Pipoca 2-Macarrao 3-carne 4-Feijão 5-Brigadeiro");
}
let opcao = prompt ("Digite a opção desejada:", listaAlimentos());
let tempoEscolhido = prompt ("Escolha o tempo para preparo:");
tempoPreparo();
var tempoPadrao1, tempoPadrao2, tempoPadrao3,tempoPadrao4,tempoPadrao5 ;

function tempoPreparo(){
    
    if(opcao==1){
        tempoPadrao1=10;
    }else if(opcao==2){
        tempoPadrao2=8;
    }else if(opcao==3){
        tempoPadrao3=15
    }else if(opcao==4){
        tempoPadrao4=12;
    }else if(opcao==5){
        tempoPadrao5=8;
    }
}
if((tempoEscolhido == tempoPadrao1 )){
    console.log("Prato pronto, bom apetite!!!");
}else if (tempoEscolhido < tempoPadrao1 ){
    console.log("Tempo insuficiente.Adicione mais tempo para cozimento adequado.");
}else if(tempoEscolhido >= tempoPadrao1*2){
    console.log("A comida está queimada!");
}else if(tempoEscolhido >= tempoPadrao1*3){
    console.log("Kabuum! Você explodiu seu microondas!");
}else if((tempoEscolhido == tempoPadrao2 )){
    console.log("Prato pronto, bom apetite!!!");
}else if (tempoEscolhido < tempoPadrao2 ){
    console.log("Tempo insuficiente.Adicione mais tempo para cozimento adequado.");
}else if(tempoEscolhido >= tempoPadrao2*3){
    console.log("Kabuum! Você explodiu seu microondas!");
}else if(tempoEscolhido >= tempoPadrao2*2){
    console.log("A comida está queimada!");
}else if((tempoEscolhido == tempoPadrao3 )){
    console.log("Prato pronto, bom apetite!!!");
}else if (tempoEscolhido < tempoPadrao3 ){
    console.log("Tempo insuficiente.Adicione mais tempo para cozimento adequado.");
}else if(tempoEscolhido >= tempoPadrao3*2){
    console.log("A comida está queimada!");
}else if(tempoEscolhido >= tempoPadrao3*3){
    console.log("Kabuum! Você explodiu seu microondas!");
}else if((tempoEscolhido == tempoPadrao4 )){
    console.log("Prato pronto, bom apetite!!!");
}else if (tempoEscolhido < tempoPadrao4 ){
    console.log("Tempo insuficiente.Adicione mais tempo para cozimento adequado.");
}else if(tempoEscolhido >= tempoPadrao4*2){
    console.log("A comida está queimada!");
}else if(tempoEscolhido >= tempoPadrao4*3){
    console.log("Kabuum! Você explodiu seu microondas!");
}else if((tempoEscolhido == tempoPadrao5 )){
    console.log("Prato pronto, bom apetite!!!");
}else if (tempoEscolhido < tempoPadrao5 ){
    console.log("Tempo insuficiente.Adicione mais tempo para cozimento adequado.");
}else if(tempoEscolhido >= tempoPadrao5*2){
    console.log("A comida está queimada!");
}else if(tempoEscolhido >= tempoPadrao5*3){
    console.log("Kabuum! Você explodiu seu microondas!");
}





