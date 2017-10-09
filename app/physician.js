class Physician {
  constructor(name) {
    this.name = name;
  }
}

// This pattern of adding a class to global is **NOT** standard and not best-practice
// The standard way of doing so is ES2015 modules, using the export keyword
// Using exports will be covered in a later challenge
const g = window ? window : global;
g.Physician = Physician;
