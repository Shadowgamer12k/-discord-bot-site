function sendMessage() {
    const webhookURL = "https://discord.com/api/webhooks/1351700670075371651/tp3byHb85gA-A2uQ7NPbhSl28hI3zU1MhthpaGxi1D3fizwoFCPMn3eSlX-8en4OwdCw"; // استبدله برابطك الجديد
    const message = document.getElementById("message").value;

    if (message.trim() === "") {
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
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("message").value = "";
        } else {
            alert("Failed to send message. Check the webhook URL and permissions.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Check the console for details.");
    });
}
