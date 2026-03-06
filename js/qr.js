export async function renderQr(container, url, size = 220) {
  container.innerHTML = "";
  const canvas = document.createElement("canvas");
  await QRCode.toCanvas(canvas, url, { width: size, margin: 2 });
  container.appendChild(canvas);
}