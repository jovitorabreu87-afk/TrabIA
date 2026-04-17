let especialidade = "";
let horario = "";

function proximaTela(num){
  document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
  document.getElementById("tela" + num).classList.add("ativa");

  if(num === 5){
    let data = document.getElementById("data").value;
    document.getElementById("resumo").innerText =
      "Especialidade: " + especialidade +
      "\nData: " + data +
      "\nHorário: " + horario;
  }
}

function selecionar(valor){
  especialidade = valor;
}

function selecionarHora(h){
  horario = h;
}

function finalizar(){
  alert("Consulta agendada com sucesso!");
}