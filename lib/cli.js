const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { renderLogo } = require("./draft.js");

class CLI {
    constructor() {
    }

    run() {
        return inquirer
            .prompt([
                {
                    name: 'shapeTypeInput',
                    type: 'list',
                    message: `Please select a shape from the given list.

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
                    message: `Please enter a color for your selected shape.
    
    Answer: `,
                    validate: function (input) {
                        if (!input) {
                            return 'Error: Please enter a valid GitHub username.';
                        } else {
                            return true;
                        }
                    }
                },
                {
                    name: 'textTypeInput',
                    type: 'input',
                    message: `Please enter text for your logo (up to 3 characters).
    
    Answer: `,
                    validate: function (input) {
                        if (!input) {
                            return 'Error: Please enter a valid email.';
                        } else {
                            return true;
                        }
                    }
                },
                {
                    name: 'textColorInput',
                    type: 'input',
                    message: `Please enter a color for your text input.
    
    Answer: `,
                    validate: function (input) {
                        if (!input) {
                            return 'Error: Please enter a valid GitHub username.';
                        } else {
                            return true;
                        }
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
module.exports = CLI;
