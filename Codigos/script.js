let proyectos = [];

function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (user && pass) {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("panel").classList.remove("hidden");
    } else {
        alert("Completa los datos");
    }
}

function logout() {
    document.getElementById("panel").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function agregarProyecto() {
    let input = document.getElementById("nuevoProyecto");
    let nombre = input.value;

    if (!nombre) return;

    proyectos.push(nombre);
    mostrarProyectos();
    input.value = "";
}

function mostrarProyectos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    proyectos.forEach((proyecto, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${proyecto}
            <button onclick="eliminar(${index})">X</button>
        `;

        lista.appendChild(li);
    });
}

function eliminar(index) {
    proyectos.splice(index, 1);
    mostrarProyectos();
}