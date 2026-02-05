console.log("[LeetSync] Background worker running");

chrome.runtime.onMessage.addListener((message) => {
  console.log("[LeetSync] Message received in background:", message);

  if (message.type === "LEETCODE_CODE") {
    console.log("[LeetSync] ABOUT TO CALL BACKEND");

    fetch("http://127.0.0.1:8000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: message.title,
        code: message.code
      })
    })
    .then(res => {
      console.log("[LeetSync] FETCH RESPONSE STATUS:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("[LeetSync] FETCH RESPONSE DATA:", data);
    })
    .catch(err => {
      console.error("[LeetSync] FETCH ERROR:", err);
    });
  }
});
