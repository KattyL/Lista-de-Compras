<script>
  function salvarTexto(botao, idLista) {
    var campoTexto = botao.previousElementSibling;
    var texto = campoTexto.value;

    if (texto.trim() !== "") {
      var textosSalvos = localStorage.getItem(idLista);
      textosSalvos = textosSalvos ? JSON.parse(textosSalvos) : [];

      textosSalvos.push(texto);
      localStorage.setItem(idLista, JSON.stringify(textosSalvos));

      campoTexto.value = "";
      exibirItensSalvos(idLista);
    

  function exibirItensSalvos(idLista) {
    var textosSalvos = localStorage.getItem(idLista);
    textosSalvos = textosSalvos ? JSON.parse(textosSalvos) : [];

    var listaTextos = document.getElementById(idLista);
    listaTextos.innerHTML = "";

    for (var i = 0; i < textosSalvos.length; i++) {
      var textoSalvo = document.createElement("li");
      textoSalvo.textContent = textosSalvos[i];
      textoSalvo.classList.add("texto-salvo");
      listaTextos.appendChild(textoSalvo);
    }
  }

  function limparLista(idLista) {
    localStorage.removeItem(idLista);
    exibirItensSalvos(idLista);
  }

  function verificarTecla(event, campoTexto, idLista) {
    if (event.key === "Enter") {
      salvarTexto(campoTexto.nextElementSibling, idLista);
  }

  window.onload = function() {
    exibirItensSalvos('listadecompras');
  }
</script>
