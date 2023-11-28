class Text {
    constructor(textTypeInput, textColorInput) {
        this.textType = textTypeInput;
        this.textColor = textColorInput;
    }
    render(shapeTypeInput) {

        if (shapeTypeInput === 'Circle') {
            return `<text x="150" y="100" font-size="50" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.textType}</text>`;
        } else if (shapeTypeInput === 'Square') {
            return `<text x="140" y="105" font-size="50" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.textType}</text>`;
        } else if (shapeTypeInput === 'Triangle') {
            return `<text x="150" y="157" font-size="50" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.textType}</text>`;
        };
    }
};

module.exports = { Text };
