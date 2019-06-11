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

If the command entered is valid, the program will execute the command and display a message in confirmation. Otherwise, it will ignore the command and no confirmation message is shown in the Terminal.

## Development

### Notes

- The possible directions of movement are initialized as an instance property of `Pacman`.
- `isPlaceValid` and `hasPlace` methods validate the commands as per the rules set out in the problem description.
- Test cases for both valid and invalid commands are provided in `lib.test.js`.

### To Do

- [ ] More stringent tests for user input.
- [ ] Refactor commands as a module.
- [ ] Write unit test for input validation.
- [X] Test multiple-step operations.
- [X] Make `directions` an instance property or use another class.
- [ ] Add intro interface to display available commands.
- [ ] Maybe make Board a class and pass in to `move()`.

### To Revise

- `directions` array in global scope to store directions - may be better served by another object?
- `Pacman`'s properties are initalized as `null`, resulting in `undefined` for `left` and `right` tests asserting `p.f`.
- `move()` uses a ternary operator which ends with `null`
- `move()` validates the command based on a hard-coded grid size of `5`.

