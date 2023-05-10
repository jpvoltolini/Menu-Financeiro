let saldo = prompt("Informe a quantidade inicial:")
saldo = parseFloat(saldo)
let opcao = ''

do {
    opcao = prompt('Saldo dispoível: R$' + saldo+
    "\n1. Depositar" + 
    "\n2. Solicitar Resgate" + 
    "\n3. Sair" 
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat (prompt("insira o valor desejado" ))
            break;
        case "2": 
            saldo -= parseFloat (prompt("Valor a ser resgatado: ")) 
            break;
        case "3":
            prompt("Encerrando")
            break;
        
        default:
            prompt("favor tente novamente")
            break;
    }
} while (opcao !== "3");
/* + 
"\n1. Até 1.000 reias" +
"\n2. De 1.001 reais à 10.000 reias" +
"\n3. De 10.001 reias à 100.000 reias" +
"\n4. Valor superior a 100.000 reais" )
    switch (opcao) {
        case "1":
            if(saldo <= 1000){
                prompt("Saldo Insuficiente");
            }
            break;

        case "2":
            if(saldo > 1000 && saldo <10000){
                prompt("Insira o valor desejado");
            }else{
                prompt ("Saldo insuficiente ou superior em relação a opção selecionada")
            }
            break;
            
        case "3":
            if(saldo > 10000 && saldo <=100000){
                prompt("Insira o valor desejado");
            }else{
                prompt ("Saldo insuficiente ou superior em relação a opção selecionada")
            }
            break;

        case "4":
            if(saldo > 100000){
                prompt("Insira o valor desejado");
            }else{
                prompt ("Saldo insuficiente ou superior em relação a opção selecionada")
            }
            break;
        default:
            prompt(" -- ERRO -- ")
            break;
    } */