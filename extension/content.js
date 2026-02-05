console.log("[LeetSync] content script loaded");

// Helper: wait until Monaco editor loads
function waitForEditor(callback) {
  const interval = setInterval(() => {
    const editor = document.querySelector(".monaco-editor");
    if (editor) {
      clearInterval(interval);
      callback();
    }
  }, 1000);
}

waitForEditor(() => {
  console.log("[LeetSync] Editor detected");

  // 1️⃣ Get problem title
  const title =
    document.querySelector('div[data-cy="question-title"]')?.innerText ||
    document.title;

  // 2️⃣ Get code from Monaco editor
  const lines = document.querySelectorAll(".view-lines > div");
  let code = "";
  lines.forEach(line => {
    code += line.innerText + "\n";
  });

  console.log("[LeetSync] Problem:", title);
  console.log("[LeetSync] Code:\n", code);

  // 3️⃣ SEND DATA TO BACKGROUND (⬅️ THIS PART)
  chrome.runtime.sendMessage({
    type: "LEETCODE_CODE",
    title: title,
    code: code
  });
});
