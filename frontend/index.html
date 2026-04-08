import socket
import json
import requests

# input target
target = input("Enter website (example: google.com): ")

# ----------------------------
# INITIAL RESULT STRUCTURE
# ----------------------------
results = {
    "target": target,
    "open_ports": [],
    "missing_headers": [],
    "risk_level": "Low"
}

# ----------------------------
# PORT SCANNING
# ----------------------------
ports = [21, 22, 80, 443]

print(f"\nScanning {target}...\n")

for port in ports:
    try:
        sock = socket.socket()
        sock.settimeout(1)

        result = sock.connect_ex((target, port))

        if result == 0:
            print(f"Port {port} is OPEN")
            results["open_ports"].append(port)
        else:
            print(f"Port {port} is CLOSED")

        sock.close()

    except Exception as e:
        print(f"Error scanning port {port}: {e}")

# ----------------------------
# HTTP SECURITY HEADERS CHECK
# ----------------------------
print("\nChecking HTTP Security Headers...\n")

required_headers = [
    "X-Frame-Options",
    "Content-Security-Policy",
    "Strict-Transport-Security"
]

try:
    response = requests.get(f"https://{target}", timeout=5)

    for header in required_headers:
        if header not in response.headers:
            print(f"{header} is MISSING ❌")
            results["missing_headers"].append(header)
        else:
            print(f"{header} is PRESENT ✅")

except Exception as e:
    print("Error checking headers:", e)

# ----------------------------
# RISK ANALYSIS
# ----------------------------
risk = "Low"

# High risk: sensitive ports open
if 21 in results["open_ports"] or 22 in results["open_ports"]:
    risk = "High"

# Medium risk: multiple headers missing
elif len(results["missing_headers"]) >= 2:
    risk = "Medium"

results["risk_level"] = risk

print(f"\n⚠️ Risk Level: {risk}")

# ----------------------------
# SAVE RESULT
# ----------------------------
with open("result.json", "w") as f:
    json.dump(results, f, indent=4)

print("\n✅ Scan results saved to result.json")