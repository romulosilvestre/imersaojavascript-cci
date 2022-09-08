//Primeiramente você deve criar uma referência ao form e elementos de reposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit",e=>{
   
    e.preventDefault() //evita envio do form
    const nome = frm.leiaNome.value //obtém o nome do form
    const provaTeorica = Number(frm.leiaProvaTeorica.value)
    const provaPratica = Number(frm.leiaProvaTeorica.value)
    const media = (provaTeorica+provaPratica)/2

    if(media >= 85){
        resp2.innerText = `Parabéns ${nome} você obteve média: ${media} e foi aprovado com louvor!`
        resp2.style.color = "blue"
    }else{
        resp2.innerText = `Ops! ${nome} você obteve média: ${media} e foi reprovado sendo encaminhado a recuperação!`
        resp2.style.color = "red"
    }



   

})