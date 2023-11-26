// Import required files.
const { getShapeType } = require("./shapeType.js");
const Shapes = require('./shapes.js');
const Text = require("./text.js");

function renderLogo(logoEl = []) {
  const selectedShape = shapeTypeInput;
  const shapeTypeEl = getShapeType(selectedShape);

  const shapeEl = new Shapes(shapeTypeEl, shapeColorInput).render();
  const textEl = new Text(textTypeInput, textColorInput).render();

  return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

  ${shapeEl}

  ${textEl}

</svg>`;
}

module.exports = { renderLogo };
