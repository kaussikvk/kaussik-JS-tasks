//task1:

function studentForm(name,age,course) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course); 
}

studentForm("Kaussik",23,"ECE");

//task2:

function calc(a,b) {
    console.log("Addition: " + Number(a+b));
    console.log("Subraction: " + Number(a-b));
    console.log("Multiplication: " + Number(a*b));
    
}

calc(10,5);

//task3:


function resue(name){
    console.log("Hello "+ name);
    
}

resue("Kamal");
resue("Praveen");
resue("Sai");

//task4:

function square(num) {
    return Number(num*num);
    
}

console.log(square(5));

//task5:


function scope() {

    let secret = "javascript"
    console.log("Inside :" , secret);
      
}

scope();

//console.log(secret);
//secret is declared using let inside the function.
// It has function scope not global scope,So getting Reference error: secret not defined

//task6:


let boys = ["car","bike"];
let girls = ["doll","teddy"];

let merge = [...boys , ...girls];

console.log(merge);

//task7:

function sumAll(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    console.log(total);
}

sumAll(5,20,24,54,31);

//task8:

let colors = ["red","green","blue"]

let [c1,c2,c3] = colors;

console.log(c1,c2,c3);

//task9:

let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role);

//task10;

function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}

let offers = offerGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//task11:

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));
//task12:

function marks(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}

marks(80, 90, 70, 60);

//task13:

function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");