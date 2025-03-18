function sendMessage() {
    const webhookURL = "https://discord.com/api/webhooks/1351700670075371651/tp3byHb85gA-A2uQ7NPbhSl28hI3zU1MhthpaGxi1D3fizwoFCPMn3eSlX-8en4OwdCw"; // ضع هنا رابط Webhook الجديد
    const message = document.getElementById("message").value.trim();

    if (!message) {
        alert("Please enter a message.");
        return;
    }

    const payload = {
        content: message // صيغة صحيحة للرسالة
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload) // تأكد أن البيانات بصيغة JSON
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("message").value = "";
        } else {
            return response.text().then(text => { throw new Error(text) });
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to send message. Check the console for details.");
    });
}
