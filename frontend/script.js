async function loadResults() {
    const input = document.getElementById("urlInput").value.trim();

    // Validate input
    if (!input) {
        alert("Please enter a website (e.g., google.com)");
        return;
    }

    // Show loading state
    document.getElementById("output").innerHTML = "<p>⏳ Scanning...</p>";

    try {
        // Fetch result.json (must be in same folder)
        const res = await fetch("result.json");

        if (!res.ok) {
            throw new Error("Failed to load result.json");
        }

        const data = await res.json();

        // Determine risk color
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
        console.error(error);
        document.getElementById("output").innerHTML =
            "<p style='color:red;'>❌ Error loading scan results. Make sure result.json exists.</p>";
    }
}