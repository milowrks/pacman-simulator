# Pacman Simulator

## Development

### To Do

- [ ] Refactor commands.js as a module.
- [ ] Write unit test for command validation.
- [ ] Test multiple-step operations.
- [ ] Make `directions` an instance property or use another class.
- [ ] Maybe make Board a class and pass in to `move()`.

### To Revise

- `directions` array in global scope to store directions - may be better served by another object?
- `Pacman`'s properties are initalized as `null`, resulting in `undefined` for `left` and `right` tests asserting `p.f`.
- `move()` uses a ternary operator which ends with `null`
- `move()` validates the command based on a hard-coded grid size of `5`.

