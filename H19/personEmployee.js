class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this._jobTitle = jobTitle;
  }

  get jobTitle() {
    return this._jobTitle;
  }

  set jobTitle(newTitle) {
    this._jobTitle = newTitle;
  }
}

const employee = new Employee("Alice", 28, "Software Engineer");

export { employee };
