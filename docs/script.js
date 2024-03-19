function ejecutarAccion() {
    var texto = document.getElementById("texto").value;
    var accion = document.querySelector('input[name="accion"]:checked').value;

    if (accion === "encriptar") {
        document.getElementById("resultado").value = encriptar(texto);
    } else {
        document.getElementById("resultado").value = desencriptar(texto);
    }
}

function copiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
}

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}
