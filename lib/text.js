class Text {
    constructor(textTypeInput = '', textColorInput = '') {
        this.textType = textTypeInput;
        this.textColor = textColorInput;
    }
    render(shapeTypeInput) {

        if (shapeTypeInput === 'Triangle') {
            return `<text x="150" y="157" font-size="70" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.textType}</text>`;
        } else {
            return `<text x="150" y="100" font-size="70" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.textType}</text>`;
        }
    }
};

module.exports = Text;
