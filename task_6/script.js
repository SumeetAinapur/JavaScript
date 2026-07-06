// Task 1 - Employee Bonus (Spread Operator)

let employee = {
    name: "Naveen",
    salary: 35000
};

let updatedEmployee = {
    ...employee,
    bonus: 5000,
    department: "Developer"
};

console.log(updatedEmployee);


// Task 2 - Shopping Cart (Rest Operator)

function calculateBill(...prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    console.log("Items :", prices.length);
    console.log("Total :", total);
}

calculateBill(10, 20, 30, 40);


// Task 3 - Student Details (Object Destructuring)

let student = {
    name: "Rahul",
    age: 22,
    course: "MERN",
    city: "Chennai"
};

let { name, age, course, city } = student;

console.log(name);
console.log(age);
console.log(course);
console.log(city);


// Task 4 - Online Food Order

let foods = ["Pizza","Burger","Fries"];

foods.push("Coke");
foods.push("Ice Cream");

foods.splice(2, 1);

console.log(foods);


// Task 5 - Bank Transactions

let transactions = [1000, 2000, 3000, 4000];

transactions.shift();
transactions.unshift(500);

console.log(transactions);


// Task 6 - Company Departments

let dept1 = ["HR", "Sales"];
let dept2 = ["Developer", "Testing"];

let departments = dept1.concat(dept2);

console.log(departments);


// Task 7 - Product Search

let products = ["Laptop","Mouse","Keyboard","Monitor"];

if (products.includes("Keyboard")) {
    console.log("Available");
} else {
    console.log("Not Available");
}


// Task 8 - User Login (Callback)

function dashboard() {
    console.log("Dashboard Opened");
}

function login(callback) {
    console.log("Login Success");
    callback();
}

login(dashboard);


// Task 9 - Coupon Generator (Generator)

function* coupons() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 10 - Course Registration (Currying)

function course(courseName) {
    return function(batch) {
        return function(room) {
            console.log("Course :", courseName);
            console.log("Batch :", batch);
            console.log("Room :", room);
        };
    };
}

course("JavaScript")("Morning")("Batch-36");


// Task 11 - Movie Collection

let movies = [
    "Leo",
    "GOAT",
    "Dragon",
    "Retro",
    "Coolie"
];

let selectedMovies = movies.slice(2, 4);

console.log(selectedMovies);


// Task 12 - Employee IDs

let ids = [101, 102, 103, 104, 105];

ids.splice(2, 2, 501, 502);

console.log(ids);


// Task 13 - Sort Product Prices

let price = [5000,250,700,12000,50];

price.sort(function(a, b) {
    return a - b;
});

console.log(price);


// Task 14 - Nested Categories

let data = ["Electronics",["Mobiles",["Samsung","Apple"]]];

let [category, [mobile, [brand1, brand2]]] = data;

console.log(category);
console.log(mobile);
console.log(brand1);
console.log(brand2);


// Task 15 - Company Team

let developers = [
    "John",
    "David"
];

let designers = [
    "Ram",
    "Kiran"
];

let team = [...developers, ...designers];

console.log(team);


// Task 16 - Return Function

function calculateSalary(salary, bonus) {
    return salary + bonus;
}

let totalSalary = calculateSalary(35000, 5000);

console.log(totalSalary);


// Task 17 - Scope Checking

if (true) {
    var company = "Stackly";
    let employeeId = 101;
    const password = "abc123";
}

console.log(company);

// console.log(employeeId); // Error
// console.log(password);   // Error


// Explanation:
// var works outside the block.
// let gives ReferenceError.
// const gives ReferenceError.


// Task 18 - Customer Orders

let orders = [
    "Pizza",
    "Burger",
    "Pizza",
    "Sandwich",
    "Pizza"
];

console.log("First Index :", orders.indexOf("Pizza"));
console.log("Last Index :", orders.lastIndexOf("Pizza"));


// Task 19 - Flatten Product Categories

let items = [1,2,[3,4,[5,6]]];

let flatItems = items.flat(2);

console.log(flatItems);


// Task 20 - Mini Shopping Cart Challenge

let cart = ["Mouse", "Keyboard"];

cart.push("Monitor");

cart.unshift("Laptop");

cart.splice(2, 1);

if (cart.includes("Mouse")) {
    console.log("Mouse Available");
} else {
    console.log("Mouse Not Available");
}

let accessories = ["Webcam", "Speaker"];

let finalCart = [...cart, ...accessories];

console.log(finalCart);
