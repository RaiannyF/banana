var total = 100;

function caixa(valor) {
    total = total - valor;
    document.getElementById("box").innerHTML = total;
}

function soma() {
    var n1 = parseInt(document.getElementById('n1').value, 10);
    var n2 = parseInt(document.getElementById('n2').value, 10);
    document.getElementById("soma").innerHTML = n1 + n2;
  }
  function sub() {
    var n1 = parseInt(document.getElementById('n1').value, 10);
    var n2 = parseInt(document.getElementById('n2').value, 10);
    document.getElementById("sub").innerHTML = n1 - n2;
  }
  function mult() {
    var n1 = parseInt(document.getElementById('n1').value, 10);
    var n2 = parseInt(document.getElementById('n2').value, 10);
    document.getElementById("mult").innerHTML = n1 * n2;
  }
  function div() {
    var n1 = parseInt(document.getElementById('n1').value, 10);
    var n2 = parseInt(document.getElementById('n2').value, 10);
    document.getElementById("div").innerHTML = n1 / n2;
  }