const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const shareBtn = document.getElementById("shareButton");

shareBtn.addEventListener("click", () => {
  createShortLink();
});

function createShortLink() {
  const title = encodeURIComponent(titleInput.value);
  const content = encodeURIComponent(contentInput.value);
  const longUrl = `https://paste.fa6got.ca/display.html?title=${title}&content=${content}`;

  const apiKey = "d7ee98c3335e4c78994c0bc0842e0a32";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("apikey", apiKey);

  const body = JSON.stringify({
    destination: longUrl,
    domain: { fullName: "rebrand.ly" },
  });

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.shortUrl) {
        navigator.clipboard.writeText(data.shortUrl);
        alert("Copy this text: https://" + data.shortUrl);
      } else {
        alert("Failed to create a short link.");
      }
    })
    .catch((error) => {
      alert("Failed to create a short link.");
    });
}
const copyToClipboard = (text) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};
