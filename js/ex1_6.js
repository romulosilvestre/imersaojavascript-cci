
function mostrarManutencao(){

    const manutencao={    
        aeronave:"Bandeirante",
        observacao:"Esta em manutenção até segunda-feira",
        valorDasPecas:1500,
        valorDoServico:5000
    }
//Template String
    document.getElementById("aeronave").innerHTML = `Aeronave: ${manutencao.aeronave}`
    document.getElementById("observacao").innerHTML=`Observação:${manutencao.observacao}`
    document.getElementById("valorDasPecas").innerHTML=`Valor das Peças: R$ ${manutencao.valorDasPecas}`
    document.getElementById("valorDoServico").innerHTML=`Valor do Serviço: R$ ${manutencao.valorDoServico}`

    /* + - * /    */
    //PROCESSAMENTO
    const total = manutencao.valorDasPecas+manutencao.valorDoServico
    document.getElementById("valorTotal").innerHTML=`Total: R$ ${total}`    

}

