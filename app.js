// Balance inicial en BTC
const BALANCE_INICIAL = 0.10;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerButton").addEventListener("click", registrarUsuario);
    document.getElementById("checkBalanceButton").addEventListener("click", consultarBalance);
    document.getElementById("placeBetButton").addEventListener("click", realizarApuesta);
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

// Función para realizar una apuesta
function realizarApuesta() {
    const username = document.getElementById("consultaUsuario").value.trim();
    const montoApuesta = parseFloat(document.getElementById("montoApuesta").value.trim());

    if (!username || isNaN(montoApuesta) || montoApuesta <= 0) {
        alert("Por favor, ingresa un nombre de usuario válido y una apuesta en BTC.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[username]) {
        const balanceUsuario = usuarios[username].balance;

        if (montoApuesta > balanceUsuario) {
            alert("No tienes suficiente saldo para realizar esta apuesta.");
        } else {
            usuarios[username].balance -= montoApuesta;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            document.getElementById("apuestaResultado").textContent = `Apuesta realizada: ${montoApuesta} BTC. Nuevo balance: ${usuarios[username].balance} BTC.`;
        }
    } else {
        document.getElementById("apuestaResultado").textContent = "Usuario no
