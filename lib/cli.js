const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { renderLogo } = require("./draft.js");

class CLI {

    run() {
        return inquirer
            .prompt([
                {
                    name: 'shapeTypeInput',
                    type: 'list',
                    message: `Please select a shape for your logo from the given list.

    Answer: `,
                    choices: [
                        'Circle',
                        'Square',
                        'Triangle',
                    ],
                },
                {
                    name: 'shapeColorInput',
                    type: 'input',
                    message: `Please enter a color value for your selected shape. You can use either a written color name (e.g. blue) or a hex code (e.g. #0000ff).
                    
    Answer: `,
                    validate(input) {
                        if (!input) {
                            return 'Error: Input cannot be empty.';
                        } else {
                            return true;
                        };
                    }
                },
                {
                    name: 'textTypeInput',
                    type: 'input',
                    message: `Please enter text for your logo (up to 3 characters).
    
    Answer: `,
                    validate(input) {
                        if (!input) {
                            return 'Error: Input cannot be empty.';
                        } else if (input.length > 3) {
                            return 'Error: Input exceeds 3 characters.';
                        } else {
                            return true;
                        };
                    }
                },
                {
                    name: 'textColorInput',
                    type: 'input',
                    message: `Please enter a color value for your text input. You can use either a written color name (e.g. blue) or a hex code (e.g. #0000ff).
    
    Answer: `,
                    validate(input) {
                        if (!input) {
                            return 'Error: Input cannot be empty.';
                        } else {
                            return true;
                        };
                    }
                },
            ])
            .then(data => {
                const svg = renderLogo(data);
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    svg,
                    console.log('Generated logo.svg')
                );
            })
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }
};

// Constructor "CLI" exported from file.
module.exports = { CLI };
