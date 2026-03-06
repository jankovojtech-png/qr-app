export function showStatus(element, message, type = "info") {
  element.className = `status show ${type}`;
  element.textContent = message;
}

export function clearStatus(element) {
  element.className = "status";
  element.textContent = "";
}

export function setBoxStatus(element, message, type = "") {
  element.className = `box${type ? ` ${type}` : ""}`;
  element.textContent = message;
}

export function setLoading(button, isLoading, loadingText, defaultText) {
  button.disabled = isLoading;
  button.textContent = isLoading ? loadingText : defaultText;
}