// JS "functional" style

// define the "class"
function makePerson(name, age) {
  return {
    name: name,
    age: age,
    hp: 10
  }
}

function birthday(person) {
  person.age += 1
}

function greet(person) {
  console.log("Hello, " + person.name + "!")
}

function slap(person, damage) {
  person.hp -= damage
  if (person.hp <= 0) {
    console.log("Oh my god!  You killed " + person.name + "!!!")
  } else {
    console.log("Ouch!  That looked like it hurt!")
  }
}

// use the "class"

var chris = makePerson("Chris", 18)

birthday(chris)
greet(chris)
slap(chris, 4)
