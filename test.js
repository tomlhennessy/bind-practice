
const Employee = require('./employee');

// Create a new Employee
const john = new Employee('John Wick', 'Dog Lover');

// Call sayName() in a setTimeout after 2 seconds
setTimeout(john.sayName.bind(john), 2000);

// Call sayOccupation() in a setTimeout after 3 seconds
setTimeout(john.sayOccupation.bind(john), 3000);
