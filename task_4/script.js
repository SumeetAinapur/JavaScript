// Employee Array
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];


// Task 1 - Find the Highest Salary

let highest = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }
}

console.log("Highest Salary :", highest.salary);
console.log("Employee Name :", highest.name);


// Task 2 - Find Employee by ID

let searchId = 103;
let found = false;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].id === searchId) {
        console.log("\nEmployee Found");
        console.log("Name :", employees[i].name);
        console.log("Salary :", employees[i].salary);
        found = true;
        break;
    }

}

if (!found) {
    console.log("Employee Not Found");
}


// Task 3 - Salary After Bonus

let bonus = 5000;

console.log("\nSalary After Bonus");

for (let i = 0; i < employees.length; i++) {

    console.log(employees[i].name + " : " + (employees[i].salary + bonus));

}


// Task 4 - Experience Check

let employeeExperience = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];

console.log("\nExperience Report");

for (let i = 0; i < employeeExperience.length; i++) {

    if (employeeExperience[i].experience >= 5) {
        console.log(employeeExperience[i].name + " - Senior Employee");
    } else {
        console.log(employeeExperience[i].name + " - Junior Employee");
    }

}


// Task 5 - Display Employee Names

console.log("\nEmployee Names");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}


// Task 6 - Display Employee IDs

console.log("\nEmployee IDs");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].id);
}


// Task 7 - Total Salary

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
}

console.log("\nTotal Salary :", totalSalary);


// Task 8 - Salary Greater Than 40000

console.log("\nEmployees Earning More Than 40000");

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > 40000) {
        console.log(employees[i].name);
    }

}


// Task 9 - Increase Salary by 5000

console.log("\nUpdated Salary");

for (let i = 0; i < employees.length; i++) {

    console.log(employees[i].name + " : " + (employees[i].salary + 5000));

}


// Task 10 - Employee Report

console.log("\nEmployee Report");

for (let i = 0; i < employees.length; i++) {

    console.log(`
Employee Name : ${employees[i].name}
Employee ID : ${employees[i].id}
Salary : ${employees[i].salary}
`);

}


// Challenge Task

// Total Employees

console.log("Total Employees :", employees.length);


// Highest Salary

let highestEmployee = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary > highestEmployee.salary) {
        highestEmployee = employees[i];
    }

}

console.log("Highest Salary :", highestEmployee.salary);
console.log("Highest Paid Employee :", highestEmployee.name);


// Lowest Salary

let lowestEmployee = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary < lowestEmployee.salary) {
        lowestEmployee = employees[i];
    }

}

console.log("Lowest Salary :", lowestEmployee.salary);
console.log("Lowest Paid Employee :", lowestEmployee.name);


// Total Salary

let total = 0;

for (let i = 0; i < employees.length; i++) {
    total += employees[i].salary;
}

console.log("Total Salary :", total);


// Salary Greater Than 40000

console.log("\nEmployees earning more than 40000");

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > 40000) {
        console.log(employees[i].name);
    }

}


// Search by ID

let id = 103;
let employeeFound = false;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].id === id) {
        console.log("\nEmployee Found");
        console.log("Name :", employees[i].name);
        console.log("Salary :", employees[i].salary);
        employeeFound = true;
        break;
    }

}

if (!employeeFound) {
    console.log("Employee Not Found");
}


// Bonus

console.log("\nSalary After Bonus");

for (let i = 0; i < employees.length; i++) {

    console.log(employees[i].name + " : " + (employees[i].salary + 5000));

}


// Professional Report

console.log("\nProfessional Employee Report");

for (let i = 0; i < employees.length; i++) {

    console.log(`
Employee Name : ${employees[i].name}
Employee ID : ${employees[i].id}
Salary : ${employees[i].salary}
`);

}
