//criei um função
function fecharAssento(){
    const jantar = Number(prompt("Valor do Jantar R$:"))
    const garcom = jantar * 0.10
    const total = jantar + garcom
    alert(`Taxa Garçom R$:${garcom.toFixed(2)} - Total Jantar R$:${total.toFixed(2)}`)

}

