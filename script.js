function sendMessage() {
    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // ضع رابط Webhook الخاص بك هنا
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
            alert("Failed to send message.");
        }
    })
    .catch(error => console.error("Error:", error));
}
