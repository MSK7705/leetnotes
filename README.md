# LeetCode Local Sync 🚀

A Chrome extension + backend system that automatically saves LeetCode solutions to your local system whenever you solve a problem.

This project was built to solve a personal problem:  
👉 *keeping a permanent, offline record of solved LeetCode problems with code saved locally.*

---

## ✨ Features

- 📌 Extracts **problem title** and **code** directly from LeetCode
- 🧩 Chrome Extension runs on LeetCode problem pages
- 🔄 Uses a **FastAPI backend** to bypass browser file-system restrictions
- 💾 Automatically saves solutions to a local file
- 🛡️ Fully local (no cloud, no external storage)
- ⚡ Real-time syncing

---

## 🏗️ Architecture

LeetCode Website
↓
Chrome Extension (content.js)
↓
Service Worker (background.js)
↓
FastAPI Backend (server.py)
↓
Local Notes File (leetcode_notes.txt)



---

## 📁 Project Structure

leetnotes/
├── extension/<br>
│ ├── manifest.json<br>
│ ├── content.js<br>
│ └── background.js<br>
│<br>
└── backend/<br>
├── server.py<br>
└── leetcode_notes.txt<br>


---


## 🔧 Tech Stack

- **Frontend (Extension)**: JavaScript, Chrome Extensions (Manifest V3)
- **Backend**: Python, FastAPI, Uvicorn
- **Storage**: Local file system (`.txt`)
- **Communication**: HTTP (fetch API)


---


## 🚀 How It Works

1. You open a LeetCode problem
2. The Chrome extension extracts:
   - Problem title
   - Code from the editor
3. The extension sends this data to a local FastAPI server
4. The backend appends the solution to a local notes file

---


## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash 
git clone https://github.com/MSK7705/leetnotes.git
cd leetnotes
```

### 2️⃣ Backend Setup


```bash
cd backend
pip install fastapi uvicorn 
python -m uvicorn server:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```


Check Swagger UI:
```bash
http://127.0.0.1:8000/docs
```


### 3️⃣ Load Chrome Extension

Open Chrome

Go to:
```bash
chrome://extensions
```

```bash
Enable Developer Mode
Click Load Unpacked
Select the extension/ folder
```

---

✅ Usage
* Keep the backend running
* Open any LeetCode problem
* Write or paste your solution
* Refresh the page (or submit)
* Check leetcode_notes.txt for saved code

---

📌 Example Output
====================
Problem: Add Two Numbers - LeetCode
Time: 2026-02-05 14:32:10

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    ...
}

---
 
🔒 Security & Privacy
1. Runs entirely on localhost
2. No data is sent to external servers
3. No credentials or cookies are accessed
4. Safe for personal use
