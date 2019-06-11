# Pacman Simulator

This is a simple CLI application written in Node.js to simulate the movement of Pacman on a 5x5 grid. 

## How to Run

### Dependencies

- Node.js
- jest (if you would like to run the unit test)

Please install [Node.js](https://nodejs.org/en/download/) if you do not currently have it.

### Start

Install the dependencies by running `npm i` within the program directory.

Simply run `node pacmanSimulator.js` to start the program within the program directory. You can also run the unit test by running `npm test`.

### Quit

Quit the program by pressing `Ctrl + D`. 

### Process

You will be prompted to enter one of the available commands (`PLACE`, `MOVE`, `LEFT`, `RIGHT` or `REPORT`. The prompt will continue after each command, until you quit the program.

If the command entered is valid, the program will execute the command. Otherwise, it will ignore the command.

## Development

The current state of the program is based on my efforts within 24hrs. 

The library module `lib.js` is complete, addressing the requirements in the problem description, as can be demonstrated by running the test file. Test cases for both valid, invalid and multiple steps including a mix of both are provided in `lib.test.js`.

The CLI interface `pacmanSimulator.js` needs improvement, mainly in the area of input validation. Right now it simply ignores any invalid commands. I would like to validate the format of the input before trying to execute them.

### To Do

- [ ] More stringent tests for user input.
- [ ] Refactor commands as a module.
- [ ] Write unit test for input validation.
- [X] Test multiple-step operations.
- [X] Make `directions` an instance property or use another class.
- [ ] Add intro interface to display available commands.
- [ ] Maybe make Board a class and pass in to `move()`.

### To Revise

- `move()` validates the command based on a hard-coded grid size of `5`.

