// create class object for Pacman with following functions:
  // place(x, y, f)
    // make the first valid command
    // ignore if placed outside grid
  // move
    // define how x, y change based on direction
    // change x or y based on direction - ignore if outside grid
  // left
    // change f to previous direction
  // right
    // change f to next direction
  // report
    // print x, y and f

// ?? "Pacman that is not on the grid can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands."
// ?? "The first valid command to Pacman is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command."

class Pacman {

  constructor() {
    this.x = null
    this.y = null
    this.facing = null
    this.directions = ["NORTH", "EAST", "SOUTH", "WEST"]
  }

  isPlaceValid(x, y, f) {
    return x >= 0 && x <= 5 && y >= 0 && y <= 5 && this.directions.includes(f.toUpperCase())
  }

  place(x, y, f) {
    if (this.isPlaceValid(x, y, f)) {
      this.x = x
      this.y = y
      this.facing = f.toUpperCase()
    }
  }

  hasPlace() {
    return this.x !== null && this.y !== null && this.facing !== null
  }

  move() {
    if (this.hasPlace()) {
      (this.facing === "NORTH" && this.y < 5) ? this.y++ 
      : (this.facing === "EAST" && this.x < 5) ? this.x++ 
      : (this.facing === "SOUTH" && this.y > 0) ? this.y = this.y - 1
      : (this.facing === "WEST" && this.x > 0) ? this.x = this.x - 1
      : null
    }
  }

  left() {
    if (this.hasPlace()) {
      if (this.facing === this.directions.slice(0).shift()) {
        this.facing = this.directions.slice(0).pop()
      } else {
        this.facing = this.directions[this.directions.indexOf(this.facing) - 1]
      }
    }
  }

  right() {
    if (this.hasPlace()) {
      if (this.facing === this.directions.slice(0).pop()) {
        this.facing = this.directions.slice(0).shift()
      } else {
        this.facing = this.directions[this.directions.indexOf(this.facing) + 1]
      }
    }
  }

  report() {
    if (this.hasPlace()) {
      return `${this.x},${this.y},${this.facing}`
    }  
  }

}

module.exports = {
  Pacman
}

