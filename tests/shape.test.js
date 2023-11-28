const { Circle, Square, Triangle } = require("../lib/shape.js");

describe('Shape', () => {
    test('should render string for circle with coordinates and red fill', () => {
        const shape = new Circle();
        shape.setColor("red");

        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="82" fill="red" />');
    });

    test('should render string for square with coordinates and green fill', () => {
        const shape = new Square();
        shape.setColor("green");

        expect(shape.render()).toEqual('<rect x="56" y="18" width="164" height="164" fill="green" />');
    });

    test('should render string for polygon with points and blue fill', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
