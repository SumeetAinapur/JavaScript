// Task 1: Employee Salary Dashboard

let employees = [
    { name: "Naveen", salary: 45000 },
    { name: "Rahul", salary: 60000 },
    { name: "Priya", salary: 120000 },
    { name: "Sneha", salary: 55000 },
    { name: "Amit", salary: 35000 }
]

// Display all employee names
let employeeNames = employees.map(emp => emp.name)
console.log("Employee Names:")
console.log(employeeNames)

// Employees with salary greater than ₹50,000
let highSalaryEmployees = employees.filter(emp => emp.salary > 50000)
console.log("\nEmployees earning above ₹50,000:")
console.log(highSalaryEmployees)

// First employee with salary above ₹1,00,000
let firstHighSalary = employees.find(emp => emp.salary > 100000);
console.log("\nFirst Employee earning above ₹1,00,000:")
console.log(firstHighSalary)

// Total salary expense
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0)
console.log("\nTotal Salary Expense: ₹" + totalSalary)


// Task 2: E-Commerce Cart Management

let cart1 = ["Laptop", "Mouse"]
let cart2 = ["Keyboard", "Headphones"]

// Merge two arrays
let mergedCart = [...cart1, ...cart2]
console.log("\nMerged Cart:")
console.log(mergedCart)

// Add new product without changing original array
let updatedCart = [...mergedCart, "Webcam"]
console.log("\nUpdated Cart:")
console.log(updatedCart)

console.log("Original Cart:")
console.log(mergedCart)

// Rest Operator
function checkout(...products) {
    console.log("\nProducts in Checkout:")
    console.log(products);
    console.log("Total Products:", products.length)
}

checkout("Laptop", "Mouse", "Keyboard", "Headphones", "Webcam")


// Task 3: Student Report Card

let student = {
    name: "Anjali",
    department: "Computer Science",
    marks: [85, 90, 88, 92, 80]
}

// Object Destructuring
let { name, department, marks } = student

// Array Destructuring
let [mark1, mark2, mark3] = marks

let totalMarks = marks.reduce((sum, mark) => sum + mark, 0)
let averageMarks = totalMarks / marks.length

console.log("\nStudent Name:", name)
console.log("Department:", department)
console.log("First Three Subject Marks:", mark1, mark2, mark3)
console.log("Total Marks:", totalMarks)
console.log("Average Marks:", averageMarks)


// Task 4: Product Search System

let searchText = "   Wireless Mouse   "
let product = "wireless mouse"

// Remove extra spaces
let cleanedSearch = searchText.trim()

// Convert to lowercase
cleanedSearch = cleanedSearch.toLowerCase()

console.log("\nSearch Text:", cleanedSearch)

// Check product
console.log("Product Found:", product.includes(cleanedSearch))

// Highlight searched word
let highlightedProduct = product.replace(cleanedSearch, "[" + cleanedSearch + "]")
console.log("Highlighted Product:")
console.log(highlightedProduct)


// Task 5: Movie Collection Manager

let movies = ["Leo", "Kantara", "KGF"]
console.log("\nOriginal Movies:")
console.log(movies)

// Add movie
movies.push("Pushpa")
console.log("\nAfter Push:")
console.log(movies)

// Remove last movie
movies.pop();
console.log("\nAfter Pop:")
console.log(movies)

// Remove first movie
movies.shift()
console.log("\nAfter Shift:")
console.log(movies)

// Add featured movie at beginning
movies.unshift("Bahubali")
console.log("\nAfter Unshift:")
console.log(movies)

// Replace one movie
movies.splice(1, 1, "Salaar")
console.log("\nAfter Splice:")
console.log(movies)

// Sort movie ratings in descending order
let ratings = [4.5, 3.8, 5.0, 4.2, 4.8]
ratings.sort((a, b) => b - a)
console.log("\nMovie Ratings (Descending):")
console.log(ratings)

// Check movie availability
console.log("\nIs 'Salaar' available?")
console.log(movies.includes("Salaar"))
