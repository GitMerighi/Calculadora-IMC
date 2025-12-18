var resultado;

function alerta(mensaje, tipo = 'warning') {
    var contenedor = document.querySelector('form');
    var divAlerta = document.createElement('div');
    divAlerta.classList.add('alert', `alert-${tipo}`, 'fade', 'show', 'my-2');

    divAlerta.textContent = mensaje;
    contenedor.prepend(divAlerta);

    setTimeout(() => {
        divAlerta.remove();
    }, 4000);
}

function imc() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (peso === '' || altura === '') {
        alerta('Recuerde que los valores no pueden estar vacíos', 'danger');
        return;
    }

    var pesoNum = parseFloat(peso);
    var alturaNum = parseFloat(altura);

    if (pesoNum <= 0 || alturaNum <= 0) {
        alerta('Recuerde que los valores no pueden ser menores a 0 ni tener el valor 0.', 'danger');
        return;
    }

    resultado = pesoNum / (alturaNum ** 2);
    document.getElementById("resultado").value = resultado.toFixed(2);

    function estadoimc() {
        let estado = "";
        if (resultado >= 18.5 && resultado <= 24.9) {
            estado = "Normal";
        } else if (resultado < 18.5) {
            estado = "Delgadez";
        } else {
            estado = "Sobrepeso";
        }
        document.getElementById("estado").value = estado;
    }

    document.getElementById("div-resultados").classList.remove("oculto");
    estadoimc();
}
