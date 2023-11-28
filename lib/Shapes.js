const Component = require('./component.js');
const { getShapeType } = require("./shapeType.js");

// Constructor "Shapes" created.
class Shapes extends Component {
    constructor(children, shapeTypeInput, shapeColorInput) {
        super(children);
        this.shapeTypeInput = shapeTypeInput;
        this.shapeColorInput = shapeColorInput;
    }
    render(shapeTypeInput, shapeColorInput) {
        return `<${getShapeType(shapeTypeInput)} fill='${shapeColorInput}' />`;
    }
};

// Constructor "Shapes" exported from file.
module.exports = Shapes;