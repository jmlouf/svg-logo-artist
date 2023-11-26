// Import required modules/functions/files.
const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { renderLogo } = require("./draft.js");

class CLI {
    constructor() {

        // Array of task objects e.g. [{ text: string, priority: bool }, ...]
        this.logoEl = [];
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter your name',
                },
            ])
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'output', 'tasks.html'),
                    renderLogo(this.logoEl)
                );
            })
            .then(() => console.log('Created tasks.html'))
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }

    addTask() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter task',
                },
                {
                    type: 'confirm',
                    name: 'priority',
                    message: 'Is this a priority task?',
                },
                {
                    type: 'confirm',
                    name: 'confirmAddTask',
                    message: 'Would you like to add another task?',
                },
            ])
            .then(({ text, priority, confirmAddTask }) => {
                this.tasks.push({ text, priority });
                if (confirmAddTask) {
                    return this.addTask();
                }
            });
    }
}

// Constructor "CLI" exported from file.
module.exports = CLI;