class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getInfo() {
    return `The name of the animal is ${this.name} and age is ${this.age}`
  }
}

const newClass = new Animal('what', 'hello')
console.log(newClass.getInfo(), 'newClass')
