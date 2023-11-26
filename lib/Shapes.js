const Component = require('./component.js');

// Constructor "Shapes" created.
class Shapes extends Component {
    constructor(children) {
        super(children);
        this.shapeTypeEl = shapeTypeEl;
        this.shapeColorEl = shapeColorEl;
    }
    render() {
        return `<${this.shapeTypeEl} fill='${this.shapeColorEl}' />`;
    }
};

// Constructor "Shapes" exported from file.
module.exports = Shapes;