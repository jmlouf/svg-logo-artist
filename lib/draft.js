// Import required files.
const { getShapeType } = require('./shapeType.js');
const Shapes = require('./shapes.js');
const Text = require("./text.js");

function renderLogo(data) {

  const {
    shapeTypeInput,
    shapeColorInput,
    textTypeInput,
    textColorInput,
  } = data;

  const textData = new Text().render(shapeTypeInput, textTypeInput, textColorInput);
  const shapeData = new Shapes().render(shapeTypeInput, shapeColorInput);

  return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

  ${shapeData}

  ${textData}

</svg>
`;
};

module.exports = { renderLogo };
