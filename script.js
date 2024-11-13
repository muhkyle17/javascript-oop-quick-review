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
  #weight
  constructor(name, age, weight) {
    super(name, age)
    this.#weight = weight
  }

  getWeight() {
    return this.#weight
  }

  setWeight(weight) {
    this.#weight = weight
  }
}

const dog = new Dog('Rex', 2, 'German Shepherd')
console.log(dog.getInfo())
console.log(dog.breed)
console.log(dog.bark())

const cat = new Cat('Whiskers', 5, '5kg')
console.log(cat.getInfo())
console.log(cat.weight) // undefined
console.log(cat.getWeight()) // 5kg

cat.setWeight('6kg')
console.log(cat.getWeight()) // 6kg
