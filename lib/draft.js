const { Shape } = require("./shape.js")
const { Text } = require("./text.js");

function renderLogo(data) {

  // Destructure data object.
  const {
    shapeTypeInput,
    shapeColorInput,
    textTypeInput,
    textColorInput,
  } = data;

  const textData = new Text(textTypeInput, textColorInput)
    .render(shapeTypeInput);
  const shapeData = new Shape(shapeTypeInput, shapeColorInput)
    .render();

  return `<svg
  version="1.1"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">

  ${shapeData}

  ${textData}
</svg>
  `;
};

module.exports = { renderLogo };
