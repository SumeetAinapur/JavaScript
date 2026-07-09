// Task 1: Employee Age Calculator

let employeeDOB = new Date("2003-04-03")
let currentDate = new Date()

let employeeAge = currentDate.getFullYear() - employeeDOB.getFullYear()

console.log("Employee Age: " + employeeAge + " Years")


// Task 2: Online Appointment Scheduler

let appointment = new Date()

appointment.setFullYear(2027)
appointment.setMonth(11)
appointment.setDate(15)
appointment.setHours(10)
appointment.setMinutes(30)

console.log("Updated Appointment:")
console.log(appointment.toString())


// Task 3: Multi-Country Meeting Time

let now = new Date()

console.log("India Time:")
console.log(now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata"
    })
)

console.log("New York Time:");
console.log(now.toLocaleString("en-US", {
        timeZone: "America/New_York"
    })
)

console.log("Tokyo Time:");
console.log(
    now.toLocaleString("en-JP", {
        timeZone: "Asia/Tokyo"
    })
)


// Task 4: Product Warranty Expiry

let purchaseDate = new Date()

let warrantyExpiry = new Date(purchaseDate)
warrantyExpiry.setFullYear(warrantyExpiry.getFullYear() + 2)

console.log("Purchase Date:")
console.log(purchaseDate.toDateString())

console.log("Warranty Expiry:")
console.log(warrantyExpiry.toDateString())


// Task 5: Digital Clock

function digitalClock() {
    let time = new Date()

    console.log(
        time.toLocaleTimeString("en-IN")
    )
}

setInterval(digitalClock, 1000)
