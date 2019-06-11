// ask user to place pacman
// print location placed
// ask user for command: move, left, place or report
// print info based on last command

const readline = require('readline')
const lib = require("./lib")
const Pacman = lib.Pacman

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function main() {

  let p = new Pacman
  
  rl.setPrompt('Enter your command:')
  rl.prompt()
  
  rl.on('line', (line) => {
    let [command, coordinates] = line.trim().split(" ")
    
    switch(command) {
      case "PLACE":
        if (coordinates) {
          let [x, y, f] = coordinates.split(",")
          p.place(x, y, f)
          console.log('Pacman has been placed.')
        }
        break
      case "MOVE":
        p.move()
        let newCoordinates = p.report()
        if (coordinates === newCoordinates && newCoordinates) {
          console.log('Pacman has moved by one unit.')
        }
        break
      case "LEFT":
        p.left()
        if (coordinates) {
          console.log('Pacman has rotated left.')
        }
        break
      case "RIGHT":
        p.right()
        if (coordinates) {
          console.log('Pacman has rotated right.')
        }
        break
      case "REPORT":
        if (coordinates) {
          console.log(p.report())
        }
        break
      default:
        console.log("Please enter a valid command.")
    }
    rl.prompt()
  }).on('close', () => {
    console.log('Thank you for playing!')
    process.exit(0)
  })

}

main()

module.exports = {
  main
}