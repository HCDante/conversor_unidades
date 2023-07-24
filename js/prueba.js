function validar() {
    const valor = parseFloat(document.getElementById("valor").value);
    const unidadOne = document.getElementById("unidadOne").value;
    const unidadTwo = document.getElementById("unidadTwo").value;

    const conversion = {
        mm: 0.1,
        cm: 1,
        in: 2.54,
        ft: 30.48,
        m: 100,
        yd: 91.44,
        km: 1000,
        mi: 160934
    };

    const resultado = valor * conversion[unidadOne] / conversion[unidadTwo];
    
    document.getElementById("resultado").innerHTML = `Tu resultado es: ${resultado.toFixed(2)} ${unidadTwo}`

}