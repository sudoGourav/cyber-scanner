async function loadResults() {
    const input = document.getElementById("urlInput").value;

    if (!input) {
        alert("Please enter a website");
        return;
    }

    try {
        const res = await fetch("../result.json");
        const data = await res.json();

        let riskClass = data.risk_level.toLowerCase();

        let html = `
            <div class="card">
                <h2>Target: ${input}</h2>
                <p><strong>Open Ports:</strong> ${data.open_ports.join(", ") || "None"}</p>
                <p><strong>Missing Headers:</strong> ${data.missing_headers.join(", ") || "None"}</p>
                <h3 class="${riskClass}">Risk Level: ${data.risk_level}</h3>
            </div>
        `;

        document.getElementById("output").innerHTML = html;

    } catch (error) {
        document.getElementById("output").innerHTML = "<p>Error loading results</p>";
    }
}