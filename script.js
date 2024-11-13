class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getInfo() {
    return `The name of the animal is ${this.name} and age is ${this.age}`
  }

  makeSound() {
    return 'Some random sounds'
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

  makeSound() {
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

  makeSound() {
    return 'meow'
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

const animal = new Animal('Animal', 10)
const dog2 = new Dog('Rex', 2, 'German Shepherd')
const cat2 = new Cat('Whiskers', 5, '5kg')

console.log(dog2.makeSound()) // woof
console.log(cat2.makeSound()) // meow
console.log(animal, 'animal')
console.log(animal.makeSound()) // Some random sounds
