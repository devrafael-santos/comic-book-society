function validateForm() {

  let quantity = document.getElementById("quantity").value;
  let tel = document.getElementById("tel").value;

  for(let i = 0; i < 11; i++){
      if(tel.charAt(i) == '(' || tel.charAt(i) == ')' || tel.charAt(i) == '-') {
          alert("Por favor, informe um número de telefone com apenas números!");
          return;
      }
  }

  if(quantity < 1) {
      alert("Por favor, informe um número maior ou igual a 1!");
  } else if(tel.length != 11) {
      alert("Por favor, informe um número de telefone válido!!");
  } else {
      alert("Compra finalizada!");
  }
}