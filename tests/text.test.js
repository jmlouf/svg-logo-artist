const { Text } = require("../lib/text.js");

describe('Text', () => {
    test('should render JMM text string, for circle, and black fill', () => {
        const shapeTypeInput = 'Circle';
        const textType = 'JMM';
        const textColor = 'black';
        
        const text = new Text(textType, textColor);
        expect(text.render(shapeTypeInput)).toEqual('<text x="150" y="100" font-size="50" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="black">JMM</text>');
    });

    test('should render TGK text string, for square, and orange fill', () => {
        const shapeTypeInput = 'Square';
        const textType = 'TGK';
        const textColor = 'orange';

        const text = new Text(textType, textColor);
        expect(text.render(shapeTypeInput)).toEqual('<text x="140" y="105" font-size="50" text-anchor="middle" dominant-baseline="middle" fill="orange">TGK</text>');
    });

    test('should render VJM text string, for triangle, and purple fill', () => {
        const shapeTypeInput = 'Triangle';
        const textType = 'VJM';
        const textColor = 'purple';

        const text = new Text(textType, textColor);
        expect(text.render(shapeTypeInput)).toEqual('<text x="150" y="157" font-size="50" lengthAdjust="spacingAndGlyphs" text-anchor="middle" dominant-baseline="central" fill="purple">VJM</text>');
    });
});
