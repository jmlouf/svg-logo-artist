const Component = require('./component.js');

// Constructor "Text" created.
class Text extends Component {
    constructor(children) {
        super(children);
        this.textTypeEl = textTypeEl;
        this.textColorEl = textColorEl;
    }
    render() {
        return `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.textTypeEl}</text>`;
    }
};

// Constructor "Text" exported from file.
module.exports = Text;