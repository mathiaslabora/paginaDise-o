
const showResult = document.getElementById('showResult')

const sueldo = document.getElementById('sueldo')
const creditoSolicitado = document.getElementById('creditoSolicitado')
const cuotas = document.getElementById('cuotas')



const calculate = () => {
    //calcula porcentaje inventado de prestamo si lo solicitado no supera el 80%
    let aux = sueldo.value * 0.8
    if (aux >= creditoSolicitado.value) {
        let result = (sueldo.value) * cuotas.value
        showResult.innerHTML = `Se le otorgaran: ${result}`
    } else {
        showResult.innerHTML = `El monto solicitado no puede superar el 80% del sueldo!!`
    }
}