// All shapes and their elements. 
const shapeTypes = {
    Circle: "circle cx='150' cy='100' r='100'",
    Square: "rect x='50' y='0' width='200' height='200'",
    Triangle: "polygon points='0, 200 300, 200 150, 0'",
};

// Match user selection; return corresponding element.
function getShapeType(shapeTypeInput) {
    return shapeTypes[shapeTypeInput];
};

module.exports = { getShapeType };
