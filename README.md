# SVG Logo Artist
[![License Badge](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## Description
    
This module provides functionality to dynamically render an SVG logo containing both shapes and text. The renderLogo() function takes in data about what shape, colors, and text should be rendered and outputs an SVG string with the appropriate elements generated based on that input data.

Some key capabilities:

- Renders circle, square, or triangle shapes.

- Allow setting dynamic fill color for shapes.

- Renders text element with customizable coloring.

- Outputs final SVG logo as a reusable string.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Usage

To use this module, run the following in terminal:

```
svg-logo-artist % node index.js
```

The CLI class handles prompting for input via Inquirer.js to configure the logo:

- Shape type (circle, square, triangle)
- Shape color
- Text (up to 3 characters)
- Text color

It then passes these values to the renderLogo function to generate the SVG markup. Finally, it writes the output to examples/logo.svg.

The following demonstrate the application's appearance:

```
? Please select a shape for your logo from the given list.

    Answer:  Circle
? Please enter a color value for your selected shape. You can use either a written color name (e.g. blue) 
or a hex code (e.g. #0000ff).
                    
    Answer:  blue
? Please enter text for your logo (up to 3 characters).
    
    Answer:  TGK
? Please enter a color value for your text input. You can use either a written color name (e.g. blue) or a
 hex code (e.g. #0000ff).
    
    Answer:  yellow
Generated logo.svg
```
![Screenshot](./assets/images/mockup-1.png)

The following video link demonstrates the application's functionality:

[Google Drive Video Link](https://drive.google.com/file/d/1NNWBikohIfEKzUOrcH1ksMi-yW1aq8Xd/view)

## Credits

This project was created for educational purposes as part of the KU Coding Bootcamp curriculum.

The following resources were utilized:

- KU Coding Bootcamp Spot - Provided project requirements and guidelines.
- W3Schools - https://www.w3schools.com/js/js_class_inheritance.asp
- MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/SVG
- Stack Overflow - https://stackoverflow.com/questions/64884535/can-you-make-multiple-constructors-in-es6-and-up
- jestjs.io - https://jestjs.io/docs/getting-started
- TESTIM - https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
- npmjs.com - https://www.npmjs.com/package/jest
- YouTube - https://www.youtube.com/watch?v=5AWRivBk0Gw

## Tests

This application contains 2 test suites, each containing 3 tests:

```
tests % npm test
```

Tests for this application are split into unit tests for the Shape and Text classes.

The Shape class tests check:

- Correct SVG render output for each shape type.
- Setting custom fill colors.

The Text class tests check:

- Rendering text based on different shape types.
- Setting custom text and fill colors.

These unit tests are designed to isolate each rendering module and validate:

- The rendered SVG markup matches what is expected.
- Input values like colors are applied correctly.

## Questions

For any questions, feel free to email me ([joem3847@gmail.com](mailto:joem3847@gmail.com)) or visit my GitHub profile ([jmlouf](https://github.com/jmlouf/)).

## License

This project is available under the following license: MIT. For more information on rights and limitations, please review the [LICENSE](./LICENSE) file.
