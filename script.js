function sendMessage() {
    const webhookURL = "https://corsproxy.io/?" + encodeURIComponent("https://discord.com/api/webhooks/1351700670075371651/tp3byHb85gA-A2uQ7NPbhSl28hI3zU1MhthpaGxi1D3fizwoFCPMn3eSlX-8en4OwdCw"); // استخدم Proxy
    const message = document.getElementById("message").value.trim();

    if (!message) {
        alert("Please enter a message.");
        return;
    }

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: message })
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
        document.getElementById("message").value = "";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Check the console for details.");
    });
}
