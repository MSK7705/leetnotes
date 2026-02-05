console.log("[LeetSync] content script loaded");


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


  const title =
    document.querySelector('div[data-cy="question-title"]')?.innerText ||
    document.title;


  const lines = document.querySelectorAll(".view-lines > div");
  let code = "";
  lines.forEach(line => {
    code += line.innerText + "\n";
  });

  console.log("[LeetSync] Problem:", title);
  console.log("[LeetSync] Code:\n", code);


  chrome.runtime.sendMessage({
    type: "LEETCODE_CODE",
    title: title,
    code: code
  });
});
