function validar() {
  const valor = parseFloat(document.getElementById("valor").value);
  const unidadOne = document.getElementById("unidadOne").value;
  const unidadTwo = document.getElementById("unidadTwo").value;

  if (unidadOne === unidadTwo) {
    document.getElementById("resultado").innerHTML = '';
      document.getElementById("resultado").innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error:</strong> Debes seleccionar dos unidades diferentes para la conversión.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      `;
    return;
  }

  const conversion = {
    mm: 0.1,
    cm: 1,
    in: 2.54,
    ft: 30.48,
    m: 100,
    yd: 91.44,
    km: 1000,
    mi: 160934,
  };

  let resultado = valor * conversion[unidadOne] / conversion[unidadTwo];

  document.getElementById("resultado").innerHTML = `Tu resultado es: ${resultado.toFixed(2)} ${unidadTwo}`;
}

function validateInput(){

  if (!document.getElementById('valor').value){

    document.getElementById('errorNoValue').style.display = 'block';

  } else {

    document.getElementById('errorNoValue').style.display = 'none';

  }

}
