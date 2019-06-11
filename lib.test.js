const lib = require ("./lib")
const Pacman = lib.Pacman

test('can make a Pacman instance', () => {
  let p = new Pacman
  expect(p.x).toBe(null)
  expect(p.y).toBe(null)
  expect(p.facing).toBe(null)
})

// place

test('Pacman can be placed', () => {
  let p = new Pacman
  p.place(0, 0, "north")
  expect(p.x).toBe(0)
  expect(p.y).toBe(0)
  expect(p.facing).toBe("NORTH")
})

test('Pacman cannot be placed beyond grid width', () => {
  let p = new Pacman
  p.place(6, 0, "north")
  expect(p.report()).toBe(undefined)
})

test('Pacman cannot be placed with negative coordinates', () => {
  let p = new Pacman
  p.place(3, -2, "east")
  expect(p.report()).toBe(undefined)
})

test('Pacman cannot be placed beyond grid height', () => {
  let p = new Pacman
  p.place(1, 7, "east")
  expect(p.report()).toBe(undefined)
})

// report

test('ignore report if Pacman is not placed', () => {
  let p = new Pacman
  expect(p.report()).toBe(undefined)
})

test('Location can be reported', () => {
  let p = new Pacman
  p.place(0, 0, "north")
  expect(p.report()).toBe("0,0,NORTH")
})

// left

test('ignore left if Pacman is not placed', () => {
  let p = new Pacman
  p.left()
  expect(p.facing).toBe(null)
})

test('can rotate north to west', () => {
  let p = new Pacman
  p.place(0, 0, "north")
  p.left()
  expect(p.facing).toBe("WEST")
})

test('can rotate south to east', () => {
  let p = new Pacman
  p.place(0, 0, "south")
  p.left()
  expect(p.facing).toBe("EAST")
})

// right

test('can rotate north to east', () => {
  let p = new Pacman
  p.place(0, 0, "north")
  p.right()
  expect(p.facing).toBe("EAST")
})

test('can rotate west to north', () => {
  let p = new Pacman
  p.place(0, 0, "west")
  p.right()
  expect(p.facing).toBe("NORTH")
})

// move

test('can move north', () => {
  let p = new Pacman
  p.place(0, 0, "north")
  p.move()
  expect(p.report()).toBe("0,1,NORTH")
})

test('can move south', () => {
  let p = new Pacman
  p.place(0, 1, "south")
  p.move()
  expect(p.report()).toBe("0,0,SOUTH")
})

test('can move west', () => {
  let p = new Pacman
  p.place(1, 0, "west")
  p.move()
  expect(p.report()).toBe("0,0,WEST")
})

test('can move east', () => {
  let p = new Pacman
  p.place(0, 0, "east")
  p.move()
  expect(p.report()).toBe("1,0,EAST")
})

test('cannot move north outside of grid', () => {
  let p = new Pacman
  p.place(0, 5, "north")
  p.move()
  expect(p.report()).toBe("0,5,NORTH")
})

test('cannot move east outside of grid', () => {
  let p = new Pacman
  p.place(5, 2, "east")
  p.move()
  expect(p.report()).toBe("5,2,EAST")
})

test('cannot move south outside of grid', () => {
  let p = new Pacman
  p.place(3, 0, "south")
  p.move()
  expect(p.report()).toBe("3,0,SOUTH")
})

test('cannot move west outside of grid', () => {
  let p = new Pacman
  p.place(0, 3, "west")
  p.move()
  expect(p.report()).toBe("0,3,WEST")
})

// multi-steps

test('pacman can continue to receive commands after an invalid command', () => {
  let p = new Pacman
  p.place(1, 0, "west")
  p.move()
  p.move()
  p.right()
  expect(p.report()).toBe("0,0,NORTH")
})