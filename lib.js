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

var directions = ["NORTH", "EAST", "SOUTH", "WEST"] // improve from using global scope

class Pacman {

  constructor(x, y, f) {
    this.x = null
    this.y = null
    this.f = null
  }

  isPlaceValid(x, y, f) {
    return x >= 0 && x <= 5 && y >= 0 && y <= 5 && directions.includes(f.toUpperCase())
  }

  place(x, y, f) {
    if (this.isPlaceValid(x, y, f)) {
      this.x = x
      this.y = y
      this.f = f.toUpperCase()
    }
  }

  hasPlace() {
    return this.x !== null && this.y !== null && this.f !== null
  }

  move() {
    if (this.hasPlace()) {
      (this.f === "NORTH" && this.y < 5) ? this.y++ 
      : (this.f === "EAST" && this.x < 5) ? this.x++ 
      : (this.f === "SOUTH" && this.y > 0) ? this.y = this.y - 1
      : (this.f === "WEST" && this.x > 0) ? this.x = this.x - 1
      : null
    }
  }

  left() {
    if (this.hasPlace()) {
      if (this.f === directions.slice(0).shift()) {
        this.f = directions.slice(0).pop()
      } else {
        this.f = directions[directions.indexOf(this.f) - 1]
      }
    }
  }

  right() {
    if (this.hasPlace()) {
      if (this.f === directions.slice(0).pop()) {
        this.f = directions.slice(0).shift()
      } else {
        this.f = directions[directions.indexOf(this.f) + 1]
      }
    }
  }

  report() {
    if (this.hasPlace()) {
      return `${this.x},${this.y},${this.f}`
    }  
  }

}

module.exports = {
  Pacman
}

