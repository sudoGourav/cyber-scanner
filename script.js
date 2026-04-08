function handleInput(event) {
    if (event.key === "Enter") {
        loadResults();
    }
}

async function loadResults() {
    const input = document.getElementById("urlInput").value.trim();

    if (!input) {
        alert("Please enter a website (e.g., google.com)");
        return;
    }

    // Show loading message
    document.getElementById("output").innerHTML = "<p>⏳ Scanning...</p>";

    try {
        // IMPORTANT: result.json must be in ROOT folder
        const response = await fetch("result.json");

        if (!response.ok) {
            throw new Error("Failed to load result.json");
        }

        const data = await response.json();

        // Determine risk class
        let riskClass = "low";
        if (data.risk_level.toLowerCase() === "medium") {
            riskClass = "medium";
        } else if (data.risk_level.toLowerCase() === "high") {
            riskClass = "high";
        }

        // Handle empty values
        const ports = data.open_ports.length > 0
            ? data.open_ports.join(", ")
            : "None";

        const headers = data.missing_headers.length > 0
            ? data.missing_headers.join(", ")
            : "None";

        // Build UI
        const html = `
            <div class="card">
                <h2>🌐 Target: ${input}</h2>
                <p><strong>🔓 Open Ports:</strong> ${ports}</p>
                <p><strong>⚠️ Missing Headers:</strong> ${headers}</p>
                <h3 class="${riskClass}">Risk Level: ${data.risk_level}</h3>
            </div>
        `;

        document.getElementById("output").innerHTML = html;

    } catch (error) {
        console.error(error);

        document.getElementById("output").innerHTML = `
            <p style="color:red;">
                ❌ Error loading results. Make sure result.json exists in root folder.
            </p>
        `;
    }
}