function handleInput(event) {
    if (event.key === "Enter") {
        loadResults();
    }
}

async function loadResults() {
    const input = document.getElementById("urlInput").value.trim();

    if (!input) {
        alert("Enter a website (e.g., google.com)");
        return;
    }

    // Show loading
    document.getElementById("output").innerHTML = "<p>⏳ Scanning...</p>";

    try {
        // IMPORTANT: result.json must be in SAME folder
        const res = await fetch("result.json");
        const data = await res.json();

        let riskClass = data.risk_level.toLowerCase();

        const ports = data.open_ports.length > 0 
            ? data.open_ports.join(", ") 
            : "None";

        const headers = data.missing_headers.length > 0 
            ? data.missing_headers.join(", ") 
            : "None";

        let html = `
            <div class="card">
                <h2>🌐 Target: ${input}</h2>
                <p><strong>🔓 Open Ports:</strong> ${ports}</p>
                <p><strong>⚠️ Missing Headers:</strong> ${headers}</p>
                <h3 class="${riskClass}">Risk Level: ${data.risk_level}</h3>
            </div>
        `;

        document.getElementById("output").innerHTML = html;

    } catch (error) {
        document.getElementById("output").innerHTML =
            "<p style='color:red;'>❌ Error loading results</p>";
    }
}