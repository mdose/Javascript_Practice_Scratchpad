// new ES6 classes

// define the class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.hp = 10
  }

  birthday() {
    this.age += 1
  }

  greet() {
    console.log("Hello, " + this.name + "!")
  }

  slap(damage) {
    this.hp -= damage
    if (this.hp <= 0) {
      console.log("Oh my god!  You killed " + this.name + "!!!")
    } else {
      console.log("Ouch!  That looked like it hurt!")
    }
  }
}

// use the class (identical to prototype way, because ES6 classes are just sugar on top)

var chris = new Person("Chris", 18)

chris.birthday()
chris.greet()
chris.slap(4)
