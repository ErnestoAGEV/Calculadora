function limpiar() {
    document.reset();
    alert('se limpiaron los campos');
}

function obtenerCuadratica() {
  var x =parseInt( document.getElementById("valor0").value);
  var x0 =parseInt( document.getElementById("valor1").value); 
  var fx0 =parseInt( document.getElementById("valor2").value);
  var x1 =parseInt( document.getElementById("valor3").value);
  var fx1 =parseInt( document.getElementById("valor4").value);
  var x2 = parseInt(document.getElementById('valor5').value);
  var fx2 = parseInt(document.getElementById('valor6').value);

  let b0 =fx0;
  let b1 =(fx1-fx0)/(x1-x0);
  let b2 =(((fx2-fx1)/(x2-x1))-((fx1-fx0)/(x1-x0)))/(x2-x0);

  alert(`Tu resultado es: ${b0+b1(x-x0)+b2(x-x0)(x-x1)}`);
}
