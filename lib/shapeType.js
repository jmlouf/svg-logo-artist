// All shapes and their elements. 
const allShapes = {
    Circle: "circle cx='25' cy='75' r='20'",
    Square: "polygon points='0,0 100,0 100,100 0,100'",
    Triangle: "polygon points='50,0 100,100 0,100'",
};

// Match user selection; return corresponding element.
function getShapeType(selectedShape) {
    return allShapes[selectedShape];
};

module.exports = { getShapeType };