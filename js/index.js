const interesFijo = 1.75

function cuotaMensual(valor, meses, interes) {
    console.log("Información de las cuotas")
    let cuota = (valor * interes) / meses
    for (let i = 1; i <= meses; i++) {
        console.log("Cuota: " + i + ": USD " + cuota.toFixed(0))
    }
    console.log("Estimado cliente, si está de acuerdo con la información brindada, favor confirmar. Gracias.")
}

function simularPrestamo() {
    let valor = parseInt(prompt("Estimado cliente, favor ingresar el valor a solicitar. Gracias:"))
    let cuotas = parseInt(prompt("Estimado cliente, por favor indique la cantidad de cuotas que desea. Gracias:"))

    if (cuotas >= 12 && cuotas <= 24) {
        if (valor >= 1000 && valor <= 10000) {
            cuotaMensual(valor, cuotas, interesFijo)
        }
        else {
            console.error("Estimado cliente, el valor mínimo a solicitar es de USD 1000 y el máximo es de USD 10000. Gracias.")
        }
    }
    else {
        console.error("Estimado cliente, la cantidad de cuotas debe estar comprendida entre 12 y 24. Gracias.")
    }
}






