const Component = require('./component.js');

// Constructor "Text" created.
class Text extends Component {
    constructor(children, textColorInput, textTypeInput) {
        super(children);
        this.textColorInput = textColorInput;
        this.textTypeInput = textTypeInput;
    }
    render(shapeTypeInput, textTypeInput, textColorInput) {

        if (shapeTypeInput === 'Triangle') {
            return `<text x='150' y='165' font-size='90' textLength='190' lengthAdjust='spacingAndGlyphs' text-anchor='middle' dominant-baseline='central' fill='${textColorInput}'>${textTypeInput}</text>`;
        } else {
            return `<text x='150' y='100' font-size='90' textLength='190' lengthAdjust='spacingAndGlyphs' text-anchor='middle' dominant-baseline='central' fill='${textColorInput}'>${textTypeInput}</text>`;
        }
    }
};

// Constructor "Text" exported from file.
module.exports = Text;