const botonMostrar = document.getElementById("botonMostrarMensaje")
if (botonMostrar !== null) { 
  botonMostrar.addEventListener("click", function() {
    alert("Hola, mundo!")
  })
}

const botonIncrementar = document.getElementById("botonIncrementar")
const botonDecrementar = document.getElementById("botonDecrementar")
const botonReiniciar = document.getElementById("botonReiniciar")
const contador = document.getElementById("contador")

botonIncrementar.addEventListener("click", function() {
  contador.textContent = Number(contador.textContent) + 1
})

botonDecrementar.addEventListener("click", function() {
  contador.textContent = Number(contador.textContent) - 1
})

botonReiniciar.addEventListener("click", function() {
  contador.textContent = 0
})

const botonCargarUsuarios = document.getElementById("botonCargarUsuarios")
const listaUsuarios = document.getElementById("listaDeUsuarios")

botonCargarUsuarios.addEventListener("click", function() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json()
  })
  .then(data => {
    data.forEach(usuario => listaUsuarios.innerHTML += `<li>${usuario.id} - ${usuario.name}</li>`)
  })
})
