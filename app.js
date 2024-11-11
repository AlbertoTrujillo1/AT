// Balance inicial en BTC
const BALANCE_INICIAL = 0.10;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerButton").addEventListener("click", registrarUsuario);
    document.getElementById("checkBalanceButton").addEventListener("click", consultarBalance);
});

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Por favor, introduce un nombre de usuario.");
        return;
    }

    // Recupera usuarios desde Local Storage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[username]) {
        alert("El usuario ya existe.");
    } else {
        usuarios[username] = { balance: BALANCE_INICIAL };
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert(`Usuario "${username}" registrado con un balance de ${BALANCE_INICIAL} BTC.`);
    }

    document.getElementById("username").value = "";
}

// Función para consultar el balance de un usuario
function consultarBalance() {
    const consultaUsuario = document.getElementById("consultaUsuario").value.trim();

    if (!consultaUsuario) {
        alert("Por favor, introduce el nombre de usuario.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[consultaUsuario]) {
        const balance = usuarios[consultaUsuario].balance;
        document.getElementById("resultado").textContent = `Balance de ${consultaUsuario}: ${balance} BTC`;
    } else {
        document.getElementById("resultado").textContent = "Usuario no encontrado.";
    }

    document.getElementById("consultaUsuario").value = "";
}
