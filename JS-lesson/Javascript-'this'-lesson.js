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

var chris = new Person("Chris", 20)
var megan = new Person("Megan", 20)

// this won't work, the "this" is lost
setTimeout(chris.greet, 1000)

// you can use `bind` to force the "this" to stick
setTimeout(chris.greet.bind(chris), 1000)

// here's another way that you'll see a lot though
setTimeout(function() { chris.greet() }, 1000);

function callImmediately(fn) {
  fn()
}
          cx v                                                   fr
callImmediately(chris.greet)
