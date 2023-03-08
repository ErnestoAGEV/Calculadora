function limpiar() {
    document.reset();
    alert('se limpiaron los campos');
}

function obtenerlineal() {
    var x =parseInt( document.getElementById("valor0").value);
    var x0 =parseInt( document.getElementById("valor1").value); 
    var fx0 =parseInt( document.getElementById("valor2").value);
    var x1 =parseInt( document.getElementById("valor3").value);
    var fx1 =parseInt( document.getElementById("valor4").value);
    alert(`Tu resultado es: ${(x-x1/x0-x1)*fx0+((x-x0)/(x1-x0))*fx1}`);
}