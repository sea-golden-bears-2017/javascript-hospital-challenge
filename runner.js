/*global Physician:true*/

// When using new files in the runner, you need to call this require function
// to pull in the file. Just copy/paste this line and replace it with the corresponding file name.
// We won't be going into the specifics of requiring files in Node with this challenge.
require('./app/physician.js');

// Your application can go here.
// Run this by typing npm run hospital in your terminal
console.log("Welcome to the Hospital!");

// I'll get you started by making some physicians. Maybe you should assign them patients?

const doctors = [
  new Physician('Hal'),
  new Physician('Barry'),
  new Physician('Hal'),
  new Physician('Barry'),
];

const patients = [
  new Patient('Taylor'),
  new Patient('Byron'),
  new Patient('Austin'),
  new Patient('Chris'),
  new Patient('Kim'),
  new Patient('Kylie'),
];

console.log("The Doctors on duty are:");
for (let doctor of doctors) {
  console.log(doctor.name);
}
