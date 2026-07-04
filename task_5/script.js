// Task 1 - Employee Login (Scope)

function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = "EMP101";
        const password = "stack123";

        console.log(companyName);
        console.log(employeeId);
        console.log(password);
    }

    console.log(companyName);

    try {
        console.log(employeeId);
    } catch (error) {
        console.log("Error :", error.message);
    }

    try {
        console.log(password);
    } catch (error) {
        console.log("Error :", error.message);
    }
}

employeeLogin();


// Explanation:
// var -> Accessible outside the block.
// let -> Block scoped.
// const -> Block scoped.

// Task 2 - ATM Machine (Hoisting)

// var
console.log(accountBalance);
var accountBalance = 5000;

// let
try {
    console.log(balance);
} catch (error) {
    console.log(error.message);
}
let balance = 7000;

// const
try {
    console.log(amount);
} catch (error) {
    console.log(error.message);
}
const amount = 9000;


// Output:
// var -> undefined
// let -> Cannot access before initialization
// const -> Cannot access before initialization


// Task 3 - Food Delivery App
// Named Function

function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}

orderFood("Chicken Biryani");

// Task 4 - WhatsApp Status
// Anonymous Function

let updateStatus = function(status) {
    console.log("Status Updated :", status);
};

updateStatus("Busy in Meeting");

// Task 5 - Weather App
// Arrow Function

const weather = (city, temperature) => {
    console.log(city + " Temperature is " + temperature + "°C");
};

weather("Chennai", 36);

// Task 6 - Flipkart Offer
// IIFE

(function() {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();

// Task 7 - Online Payment
// Higher Order + Callback

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);

// Task 8 - YouTube Playlist
// Generator Function

function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

let videos = playlist();

console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);

// Task 9 - Student Result
// Return

function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();

console.log("Total Marks :", totalMarks);

// Task 10 - Shopping Cart
// Return

function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let totalAmount = cartTotal(500, 700, 800);

console.log("Total Amount :", totalAmount);

// Task 11 - Salary Calculator
// Uncurrying

function salary(basic, hra, bonus) {
    return basic + hra + bonus;
}

console.log("Total Salary :", salary(40000, 10000, 8000));

// Task 12 - Food Bill
// Currying

function foodBill(food) {
    return function(drinks) {
        return function(dessert) {
            return food + drinks + dessert;
        };
    };
}

console.log(foodBill(200)(100)(80));

// Task 13 - E-commerce Coupon Generator

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// Task 14 - Bank Transaction
// Higher Order + Callback

function transactionSuccess() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);

// Task 15 - Employee Profile
// Scope

function employeeProfile() {

    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }

    console.log(company);

    try {
        console.log(designation);
    } catch (error) {
        console.log("Error :", error.message);
    }

    try {
        console.log(salary);
    } catch (error) {
        console.log("Error :", error.message);
    }
}

employeeProfile();

// Explanation:
// company -> Prints because var is function scoped.
// designation -> Error because let is block scoped.
// salary -> Error because const is block scoped.
