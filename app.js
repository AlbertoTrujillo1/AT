// URL de ejemplo del backend
const backendUrl = 'https://mi-backend.herokuapp.com';

async function consultarBalance() {
    const username = document.getElementById("username").value;
    
    try {
        const response = await fetch(`${backendUrl}/balance/${username}`);
        const data = await response.json();
        document.getElementById("resultado").textContent = `Balance: ${data.balance} BTC`;
    } catch (error) {
        document.getElementById("resultado").textContent = "Error al consultar balance.";
        console.error("Error:", error);
    }
}

async function realizarApuesta() {
    const username = document.getElementById("username").value;
    const amount = parseFloat(document.getElementById("betAmount").value);
    
    try {
        const response = await fetch(`${backendUrl}/bet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, amount })
        });
        
        const data = await response.json();
        document.getElementById("resultado").textContent = data.message;
    } catch (error) {
        document.getElementById("resultado").textContent = "Error al realizar apuesta.";
        console.error("Error:", error);
    }
}
