// Assignment - 2

// Task 1
let name = prompt("Enter your name")
let age = prompt("Enter your age")

console.log("My name is " + name)
console.log("I am " + age + " years old")

// Task 2
let degree = confirm("Did you complete degree?")

if (degree == true) {
    console.log("Degree Completed")
} else {
    console.log("Degree Not Completed")
}

// Task 3
let mobilePrice = 15000
let discount = 2000
let finalPrice = mobilePrice - discount

console.log("Final Price : " + finalPrice)

// Task 4
let age1 = prompt("Enter your age")

if (age1 >= 18) {
    console.log("Eligible for Vote")
} else {
    console.log("Not Eligible")
}

// Task 5
let cart = ["Rice", "Milk", "Sugar", "Tea Powder"]

console.log("First Product : " + cart[0])
console.log("Last Product : " + cart[cart.length - 1])
console.log("Total Products : " + cart.length)

// Task 6
let student = {
    name: "Sumeet",
    age: 23,
    course: "Full Stack Development"
}

console.log("Student Name : " + student.name)
console.log("Student Course : " + student.course)

// Task 7
let salary = 25000
let bonus = 5000
let totalSalary = salary + bonus

console.log("Total Salary : " + totalSalary)

// Task 8
let username = "admin"
let password = "1234"

let user = prompt("Enter Username")
let pass = prompt("Enter Password")

if (user == username && pass == password) {
    console.log("Login Successful")
} else {
    console.log("Invalid Credentials")
}

// Task 9
let foodPrice = 350
let deliveryCharge = 50

let totalBill = foodPrice + deliveryCharge
let gst = totalBill * 5 / 100
let grandTotal = totalBill + gst

console.log("Total Bill : " + totalBill)
console.log("GST : " + gst)
console.log("Grand Total : " + grandTotal)

// Task 10
let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
}

console.log("Product Name : " + product.name)
console.log("Brand : " + product.brand)
console.log("Price : " + product.price)
console.log("Stock Available : " + product.stock)

// Task 11
let present = confirm("Are you Present?")

if (present) {
    console.log("Attendance Marked")
} else {
    console.log("Absent")
}

// Task 12
let balance = prompt("Enter Current Balance")
let withdraw = prompt("Enter Withdraw Amount")

if (withdraw <= balance) {
    console.log("Transaction Successful")
    console.log("Remaining Balance : " + (balance - withdraw))
} else {
    console.log("Insufficient Balance")
}

// Challenge Task
let emp = {
    name: prompt("Enter Employee Name"),
    age: prompt("Enter Employee Age"),
    department: prompt("Enter Employee Department"),
    salary: prompt("Enter Employee Salary")
}

console.log("Employee Name : " + emp.name)
console.log("Employee Age : " + emp.age)
console.log("Employee Department : " + emp.department)
console.log("Employee Annual Salary : " + emp.salary * 12)

if (emp.salary > 30000) {
    console.log("Senior Employee")
} else {
    console.log("Junior Employee")
}
