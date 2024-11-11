// URL del backend desplegado en Heroku, Render o Railway
const backendUrl = 'https://mi-backend.herokuapp.com';

async function consultarBalance() {
    const username = document.getElementById("username").value;
    
    try {
        const response = await fetch(`${backendUrl}/balance/${username}`);
        const data = await response.json();
        document.getElementById("resultado").textContent = `Balance: ${data.balance}`;
    } catch (error) {
        console.error("Error al consultar balance:", error);
    }
}
