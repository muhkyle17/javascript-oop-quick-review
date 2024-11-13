class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getInfo() {
    return `The name of the animal is ${this.name} and age is ${this.age}`
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  bark() {
    return 'woof'
  }
}

class Cat extends Animal {
  constructor(name, age, weight) {
    super(name, age)
    this.weight = weight
  }
}

const dog = new Dog('Rex', 2, 'German Shepherd')
console.log(dog.getInfo())
console.log(dog.breed)
console.log(dog.bark())
