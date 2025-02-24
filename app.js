let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
  
    if (nombre === "") {
      alert("Digite el nombre de sus amigos");
      return;
    }
  
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
  }


  function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
  
    for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement("li");
      li.textContent = amigos[i];
      lista.appendChild(li);
    }
  }
  
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos para sortear.");
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const lista = document.getElementById("listaAmigos");
    const listaResultado = document.getElementById("resultado");

    lista.innerHTML = "";
    listaResultado.innerHTML = "";
  
    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    listaResultado.appendChild(li);

    amigos = [];
  }
  