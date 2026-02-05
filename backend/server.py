from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LeetCodeData(BaseModel):
    title: str
    code: str

@app.post("/save")
def save_code(data: LeetCodeData):
    print("🔥 RECEIVED DATA FROM EXTENSION 🔥")
    print("Title:", data.title)
    print("Code:\n", data.code)

    with open("leetcode_notes.txt", "a", encoding="utf-8") as f:
        f.write("\n====================\n")
        f.write(f"Problem: {data.title}\n")
        f.write(f"Time: {datetime.now()}\n\n")
        f.write(data.code)
        f.write("\n")

    return {"status": "saved"}
