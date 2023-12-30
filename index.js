// index.js
function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${"000000".slice(0, 6 - randomColor.length)}${randomColor}`;
}

module.exports = generateRandomColor;
