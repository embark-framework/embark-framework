function escapeHtml(message) {
  if(typeof message !== "string") return message;

  return message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#39;");
}

module.exports = escapeHtml;
