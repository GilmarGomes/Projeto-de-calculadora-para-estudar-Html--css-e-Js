function insert(num) {
  let numero = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = numero + num;
}
function clean() {
  document.getElementById("result").innerHTML = "";
}
function back() {
  let resultado = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular() {
  let resultado = document.getElementById("result").innerHTML;
  if (resultado) {
    document.getElementById("result").innerHTML = eval(resultado);
  } else {
    document.getElementById("result"), (innerHeight = "0");
  }
}
