// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
let cleanningNedded = false;

function agregarAmigo() {
  if (cleanningNedded) {
    document.getElementById("resultado").textContent = "";
  }

  const amigo = document.getElementById("amigo").value;
  if (amigo) {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    const listaAmigos = document.getElementById("listaAmigos");
    li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  } else {
    alert("Por favor, ingresa un nombre de amigo.");
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoGanador = amigos[indiceAleatorio];
  result = document.getElementById("resultado");
  result.textContent = `Tú amigo secreto es: ${amigoGanador}`;
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista de amigos
  amigos.length = 0; // Vaciar el array de amigos
  cleanningNedded = true;
}
