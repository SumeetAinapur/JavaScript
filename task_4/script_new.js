// Task 1 - Company Welcome Function

function welcome() {
    console.log("Welcome to Stackly IT")
}

welcome()


// Task 2 - Employee Details

function employeeDetails(name, department, salary) {
    console.log("Employee Name :", name)
    console.log("Department :", department)
    console.log("Salary :", salary)
}

employeeDetails("Naveen", "Developer", 30000)


// Task 3 - Calculate Bonus

function calculateBonus(salary, bonus) {
    console.log("Total Salary :", salary + bonus)
}

calculateBonus(40000, 5000)


// Task 4 - Student Result

function result(marks) {
    if (marks >= 35) {
        console.log("Pass")
    } else {
        console.log("Fail")
    }
}

result(45)


// Task 5 - Return Employee Name

function employeeName() {
    return "Naveen"
}

let emp = employeeName()
console.log(emp)


// Task 6 - Product Price

function productPrice() {
    return 25000
}

let price = productPrice()
let gst = 4500 // 18% GST

console.log("Price :", price)
console.log("Price + GST :", price + gst)


// Task 7 - Scope

function demo() {

    if (true) {

        var a = 10
        let b = 20
        const c = 30

    }

    console.log(a) // 10
    // console.log(b) // Error
    // console.log(c) // Error

}

demo()

/*
Output:
a prints -> 10
b -> Error
c -> Error

Reason:
var has function scope.
let and const have block scope.
*/


// Task 8 - Hoisting

// Example 1

console.log(a)

var a = 100

// Output:
// undefined


// Example 2
// console.log(b)

let b = 200

// Output:
// ReferenceError

/*
Explanation:
var is hoisted and initialized with undefined.
let is hoisted but remains in the Temporal Dead Zone
until its declaration.
*/


// Task 9 - Named Function

function greeting() {
    console.log("Good Morning")
}

greeting()


// Task 10 - Anonymous Function

let employee = function () {
    console.log("Welcome Employee")
}

employee()


// Task 11 - Arrow Function

let training = () => {
    console.log("JavaScript Training")
}

training()


// Task 12 - Return Function

function company() {
    return "Stackly"
}

let companyName = company()

console.log("Welcome", companyName)


// Task 13 - Higher Order Function

function dashboard() {
    console.log("Dashboard Loaded")
}

function login(nextFunction) {
    console.log("Login Successful")
    nextFunction()
}

login(dashboard)


// Task 14 - Callback Function

function delivered() {
    console.log("Delivered")
}

function preparing(callback) {
    console.log("Preparing Food")
    callback()
}

function orderReceived(callback) {
    console.log("Order Received")
    callback(delivered)
}

orderReceived(preparing)


// Task 15 - Generator Function

function* coupons() {
    yield "10% Discount"
    yield "20% Discount"
    yield "30% Discount"
    yield "Better Luck Next Time"
}

let coupon = coupons()

console.log(coupon.next().value)
console.log(coupon.next().value)
console.log(coupon.next().value)
console.log(coupon.next().value)


// Task 16 - Generator Return

function* fruits() {
    yield "Apple"
    yield "Orange"
    yield "Banana"
}

let fruit = fruits()

console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)


// Task 17 - Currying

function discount(price) {

    return function (discountPercent) {

        let finalPrice = price - (price * discountPercent / 100)

        console.log("Final Price :", finalPrice)

    }

}

discount(1000)(10)


// Task 18 - Company Salary

function salary(salaryAmount) {

    return function (bonus) {

        return function (allowance) {

            console.log(salaryAmount + bonus + allowance)

        }

    }

}

salary(30000)(5000)(2000)


// Task 19 - Login System

function dashboardLoad() {
    console.log("Load Dashboard")
}

function loginSuccess() {
    console.log("Login Successful")
    dashboardLoad()
}

function verifyPassword() {
    console.log("Verify Password")
    loginSuccess()
}

function enterUsername() {
    console.log("Enter Username")
    verifyPassword()
}

enterUsername()


// Mini Project
// Employee Salary Management System

let employeeData = {
    name: "Naveen",
    department: "Developer",
    salary: 30000
}

// Employee Details
function displayEmployee() {
    console.log("\nEmployee Details")
    console.log("Name :", employeeData.name)
    console.log("Department :", employeeData.department)
    console.log("Salary :", employeeData.salary)
}

// Salary + Bonus
function finalSalary(salary, bonus) {
    return salary + bonus
}

// Arrow Function
let welcomeMessage = () => {
    console.log("\nWelcome Employee")
}

// Anonymous Function
let department = function () {
    console.log("Department :", employeeData.department)
}

// Higher Order Function
function dashboardLoaded() {
    console.log("Employee Dashboard Loaded")
}

function loginSystem(callback) {
    console.log("Login Successful")
    callback()
}

// Generator
function* monthlyBonus() {
    yield "5% Bonus"
    yield "10% Bonus"
    yield "15% Bonus"
}

let bonus = monthlyBonus()

// Currying
function tax(salary) {
    return function (taxPercent) {
        return salary - (salary * taxPercent / 100)
    }
}

// Report
displayEmployee()

let totalSalary = finalSalary(employeeData.salary, 5000)
console.log("Final Salary :", totalSalary)

welcomeMessage()

department()

loginSystem(dashboardLoaded)

console.log("Coupon :", bonus.next().value)

let salaryAfterTax = tax(totalSalary)(10)

console.log("Salary After Tax :", salaryAfterTax)

console.log(`
Employee Report
---------------
Name : ${employeeData.name}
Department : ${employeeData.department}
Final Salary : ${salaryAfterTax}
`)
