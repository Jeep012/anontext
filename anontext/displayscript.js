const urlParams = new URLSearchParams(window.location.search);
const title = decodeURIComponent(urlParams.get("title"));
const content = decodeURIComponent(urlParams.get("content"));

const titleDisplay = document.getElementById("titleDisplay");
const contentDisplay = document.getElementById("contentDisplay");
const copyButton = document.getElementById("copyButton");

titleDisplay.textContent = title;
contentDisplay.value = content;

copyButton.addEventListener("click", () => {
  contentDisplay.select();
  document.execCommand("copy");
  alert("Text copied to clipboard.");
});
