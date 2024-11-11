// Balance inicial en BTC
const BALANCE_INICIAL = 0.10;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerButton").addEventListener("click", registrarUsuario);
    document.getElementById("checkBalanceButton").addEventListener("click", consultarBalance);
    document.getElementById("placeBetButton").addEventListener("click", realizarApuesta);
    document.getElementById("transferButton").addEventListener("click", transferirBTC);
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
        document.getElementById("registrationResult").textContent = "El usuario ya existe.";
    } else {
        usuarios[username] = { balance: BALANCE_INICIAL };
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        document.getElementById("registrationResult").textContent = `Usuario "${username}" registrado con un balance de ${BALANCE_INICIAL} BTC.`;
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

    // Simula la consulta de balance
    fetch('/balance')
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").textContent = `Saldo de ${consultaUsuario}: ${data.balance} BTC`;
        })
        .catch(error => {
            document.getElementById("resultado").textContent = "No se pudo obtener el saldo.";
        });

    document.getElementById("consultaUsuario").value = "";
}

// Función para realizar una apuesta
function realizarApuesta() {
    const username = document.getElementById("betUsername").value.trim();
    const montoApuesta = parseFloat(document.getElementById("montoApuesta").value.trim());

    if (!username || isNaN(montoApuesta) || montoApuesta <= 0) {
        alert("Por favor, ingresa un nombre de usuario válido y una apuesta en BTC.");
        return;
    }

    // Simula la realización de una apuesta
    document.getElementById("apuestaResultado").textContent = `Apuesta realizada: ${montoApuesta} BTC.`;
    document.getElementById("betUsername").value = "";
    document.getElementById("montoApuesta").value = "";
}

// Función para transferir BTC
function transferirBTC() {
    const amount = parseFloat(document.getElementById("amountToTransfer").value.trim());
    const address = document.getElementById("transferAddress").value.trim();

    if (!amount || !address) {
        alert("Por favor, ingresa una cantidad y una dirección válida.");
        return;
    }

    // Simula la transferencia de BTC
    document.getElementById("transferResult").textContent = `Transferencia de ${amount} BTC realizada a ${address}.`;
    document.getElementById("amountToTransfer").value = "";
    document.getElementById("transferAddress").value = "";
}
