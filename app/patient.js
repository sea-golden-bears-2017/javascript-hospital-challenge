class Patient {
  constructor(name) {
    this.name = name;
  }
}




const g = window ? window : global;
g.Patient = Patient;
