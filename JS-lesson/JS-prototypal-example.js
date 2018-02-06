// old JS prototype style

// define the "class"
function Person(name, age) {
  this.name = name
  this.age = age
  this.hp = 10
}

Person.prototype.birthday = function () {
  this.age += 1
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name + "!")
}

Person.prototype.slap = function (damage) {
  this.hp -= damage
  if (this.hp <= 0) {
    console.log("Oh my god!  You killed " + this.name + "!!!")
  } else {
    console.log("Ouch!  That looked like it hurt!")
  }
}

// use the "class"

var chris = new Person("Chris", 18)

chris.birthday()
chris.greet()
chris.slap(4)
