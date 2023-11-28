class Shape {
    constructor(shapeTypeInput, shapeColorInput) {
        this.shapeType = shapeTypeInput;
        this.shapeColor = shapeColorInput;
    }
    setColor(color) {
        this.shapeColor = color;
    }
    render() {
        if (this.shapeType === "Circle") {
            return new Circle(this.shapeType, this.shapeColor).render();
        } else if (this.shapeType === "Square") {
            return new Square(this.shapeType, this.shapeColor).render();
        } else if (this.shapeType === "Triangle") {
            return new Triangle(this.shapeType, this.shapeColor).render();
        };
    }
};

class Circle extends Shape {
    constructor(shapeTypeInput, shapeColorInput) {
        super(shapeTypeInput, shapeColorInput);
    }
    render() {
        return `<circle cx="150" cy="100" r="82" fill="${this.shapeColor}" />`;
    }
};

class Square extends Shape {
    constructor(shapeTypeInput, shapeColorInput) {
        super(shapeTypeInput, shapeColorInput);
    }
    render() {
        return `<rect x="56" y="18" width="164" height="164" fill="${this.shapeColor}" />`;
    }
};

class Triangle extends Shape {
    constructor(shapeTypeInput, shapeColorInput) {
        super(shapeTypeInput, shapeColorInput);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
};

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};
