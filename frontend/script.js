async function loadResults() {
    const res = await fetch("../result.json");
    const data = await res.json();

    let html = `
        <h2>Target: ${data.target}</h2>
        <p>Open Ports: ${data.open_ports.join(", ")}</p>
        <p>Missing Headers: ${data.missing_headers.join(", ")}</p>
        <h3>Risk Level: ${data.risk_level}</h3>
    `;

    document.getElementById("output").innerHTML = html;
}