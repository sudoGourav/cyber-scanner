# 🔐 Web Vulnerability Scanner with Dashboard

## 🚀 Project Overview

This project is a basic cybersecurity tool that scans a target website for common vulnerabilities such as open ports and missing HTTP security headers. The results are analyzed and displayed in a web-based dashboard hosted on GitHub Pages.

---

## 🧠 Architecture

```
Python Scanner → JSON Output → Frontend Dashboard (GitHub Pages)
```

---

## ⚙️ Tech Stack

* Python
* Socket Programming
* Requests Library
* HTML, CSS, JavaScript
* GitHub Pages

---

## 🔍 Features

* 🔹 Port scanning (21, 22, 80, 443)
* 🔹 HTTP security header analysis
* 🔹 Risk level classification (Low / Medium / High)
* 🔹 JSON-based result storage
* 🔹 Web dashboard to visualize results

---

## 📂 Project Structure

```
cyber-scanner/
│
├── scanner.py
├── result.json
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ▶️ How to Run

### 1. Run the Scanner

```
python scanner.py
```

### 2. Generate Results

* Enter a website (e.g., google.com)
* Results will be saved in `result.json`

### 3. View Dashboard

* Open `frontend/index.html`
* Click **Load Scan Results**

---

## 🌐 Live Demo

(After enabling GitHub Pages)

```
https://sudoGourav.github.io/cyber-scanner/
```

---

## 📊 Sample Output

```json
{
    "target": "example.com",
    "open_ports": [80, 443],
    "missing_headers": ["Content-Security-Policy"],
    "risk_level": "Low"
}
```

---

## 🎯 Key Learnings

* Basics of network scanning using sockets
* Understanding HTTP security headers
* Risk assessment in cybersecurity
* JSON-based data handling
* Building and hosting frontend using GitHub Pages

---

## ⚠️ Limitations

* Static dashboard (no real-time scanning online)
* Limited to basic vulnerability checks

---

## 🔥 Future Improvements

* Add real-time scanning using backend API
* Expand vulnerability checks (XSS, SQL Injection basics)
* Improve UI with risk visualization
* Add user input field in frontend

---

## 👨‍💻 Author

* Gourav
* B.Tech CSE Student | Aspiring Data Engineer & Cybersecurity Enthusiast
