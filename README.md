# Pacman Simulator

This is a simple CLI application written in Node.js to simulate the movement of Pacman on a 5x5 grid. 

## How to Run

### Dependencies

Please install [Node.js](https://nodejs.org/en/download/) if you do not currently have it.

### Start

Simply run `node pacmanSimulator.js` to start the program within the program directory. 

### Quit

Quit the program by pressing `Ctrl + D`. 

### Process

You will be prompted to enter one of the available commands (`PLACE`, `MOVE`, `LEFT`, `RIGHT` or `REPORT`. The prompt will continue after each command, until you quit the program.

If the command entered is valid, the program will execute the command and display a message in confirmation. Otherwise, it will ignore the command and no confirmation message is shown in the Terminal.

## Development

### To Do

- [ ] Add intro interface to display available commands.
- [ ] Refactor `commands.js` as a module.
- [ ] Write unit test for command validation.
- [ ] Test multiple-step operations.
- [ ] Make `directions` an instance property or use another class.
- [ ] Maybe make Board a class and pass in to `move()`.

### To Revise

- `directions` array in global scope to store directions - may be better served by another object?
- `Pacman`'s properties are initalized as `null`, resulting in `undefined` for `left` and `right` tests asserting `p.f`.
- `move()` uses a ternary operator which ends with `null`
- `move()` validates the command based on a hard-coded grid size of `5`.

