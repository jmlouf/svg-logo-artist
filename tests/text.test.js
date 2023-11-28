const Text = require("../lib/text.js");

describe('Text', () => {
    test('should render JMM text string, not for triangle, and orange fill, but not within triangle', () => {
        const shapeTypeInput = 'Circle';
        const textType = 'JMM';
        const textColor = 'orange';
        
        const text = new Text(textType, textColor);
        expect(text.render(shapeTypeInput)).toEqual('<text x="150" y="100" font-size="70" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="orange">JMM</text>');
    });

    test('should render TGK text string, for triangle, and purple fill', () => {
        const shapeTypeInput = 'Triangle';
        const textType = 'TGK';
        const textColor = 'purple';

        const text = new Text(textType, textColor);
        expect(text.render(shapeTypeInput)).toEqual('<text x="150" y="157" font-size="70" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="purple">TGK</text>');
    });
});
