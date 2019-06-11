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
        }
        break
      case "MOVE":
        p.move()
        break
      case "LEFT":
        p.left()
        break
      case "RIGHT":
        p.right()
        break
      case "REPORT":
        let result = p.report()
        if (result) {
          console.log(result)
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