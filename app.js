// Balance inicial predeterminado en BTC
const BALANCE_INICIAL = 0.10;

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const username = document.getElementById("username").value;

    if (!username) {
        alert("Por favor, introduce un nombre de usuario.");
        return;
    }

    // Verificar si el usuario ya existe
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[username]) {
        alert("El usuario ya existe. Por favor elige otro nombre.");
    } else {
        // Registrar al usuario con el balance inicial
        usuarios[username] = { balance: BALANCE_INICIAL };
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert(`Usuario "${username}" registrado con un balance de ${BALANCE_INICIAL} BTC.`);
    }

    // Limpiar el campo de entrada
    document.getElementById("username").value = "";
}

// Función para consultar el balance de un usuario
function consultarBalance() {
    const consultaUsuario = document.getElementById("consultaUsuario").value;

    if (!consultaUsuario) {
        alert("Por favor, introduce el nombre de usuario para consultar el balance.");
        return;
    }

    // Obtener los usuarios desde Local Storage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[consultaUsuario]) {
        const balance = usuarios[consultaUsuario].balance;
        document.getElementById("resultado").textContent = `Balance de ${consultaUsuario}: ${balance} BTC`;
    } else {
        document.getElementById("resultado").textContent = "Usuario no encontrado.";
    }

    // Limpiar el campo de entrada
    document.getElementById("consultaUsuario").value = "";
}
