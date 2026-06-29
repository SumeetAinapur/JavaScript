// Task 1 - Employee Login Eligibility

let age = Number(prompt("Enter Employee Age :"));
let hasID = confirm("Do you have Employee ID ?");
let attendance = Number(prompt("Enter Attendance Percentage :"));

if (age >= 18 && hasID && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Task 2 - Student Grade System

let marks = 87;

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Task 3 - ATM Withdrawal

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    balance = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : ", balance);
}
else {
    console.log("Transaction Failed");
}

// Task 4 - Food Ordering App

let choice = 4;

switch (choice) {
    case 1:
        console.log("You Ordered Pizza");
        break;

    case 2:
        console.log("You Ordered Burger");
        break;

    case 3:
        console.log("You Ordered Shawarma");
        break;

    case 4:
        console.log("You Ordered Biryani");
        break;

    case 5:
        console.log("You Ordered Juice");
        break;

    default:
        console.log("Invalid Choice");
}

// Task 5 - E-Commerce Discount

let purchase = 6000;
let premiumUser = true;

let discount;

if (purchase > 5000 && premiumUser) {
    discount = purchase * 0.20;
}
else {
    discount = purchase * 0.10;
}

console.log("Original Price : ", purchase);
console.log("Discount : ", discount);
console.log("Final Price : ", purchase - discount);

// Task 6 - Attendance Report

for (let day = 1; day <= 30; day++) {
    console.log("Day " + day + " Present");
}

// Task 7 - Even Number Generator

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// Task 8 - Mobile Number Validation

let mobile = prompt("Enter Mobile Number :");

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
        mobile.startsWith("7") ||
        mobile.startsWith("8") ||
        mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
}
else {
    console.log("Invalid Mobile Number");
}

// Task 9 - Shopping Cart

let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

console.log("First Item : ", cart[0]);
console.log("Last Item : ", cart[cart.length - 1]);
console.log("Total Items : ", cart.length);

// Task 10 - Employee Database

let employee = {
    name: "Rahul",
    salary: 35000,
    department: "Development",
    experience: 3
};

console.log("Employee Name : ", employee.name);
console.log("Department : ", employee.department);
console.log("Experience : ", employee.experience);

// Task 11 - Company ID Generator

let empName = "Naveen";
let empID = 1045;
let department = "Development";

console.log(`Welcome ${empName}`);
console.log(`Your Employee ID is EMP${empID}`);
console.log(`Department : ${department}`);

// Task 12 - User Registration

let userName = prompt("Enter Your Name :");
let userAge = prompt("Enter Your Age :");
let accept = confirm("Do you accept Terms and Conditions ?");

if (accept) {
    alert("Registered Successfully");
}
else {
    alert("Registration Cancelled");
}

// Task 13 - Salary Increment Calculator

let salary = 35000;
let increment = 15;

let incrementAmount = salary * increment / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary : ", salary);
console.log("Increment Amount : ", incrementAmount);
console.log("New Salary : ", newSalary);

// Task 14 - Restaurant Bill Generator

let burger = 150;
let pizza = 300;
let juice = 80;

let subtotal = burger + pizza + juice;
let gst = subtotal * 18 / 100;
let total = subtotal + gst;

console.log("Subtotal : ", subtotal);
console.log("GST : ", gst);
console.log("Grand Total : ", total);

// Task 15 - Company Attendance Dashboard

let employees = [
    { name: "Rahul", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Kamal", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Divya", status: "Absent" }
];

let present = 0;
let absent = 0;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].status === "Present") {
        console.log(employees[i].name + " - Present");
        present++;
    }
    else {
        console.log(employees[i].name + " - Absent");
        absent++;
    }
}

console.log("Total Present : ", present);
console.log("Total Absent : ", absent);
