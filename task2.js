

let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]

//task1:

for(let i = 0; i < students.length; i++){
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    );
}

//task2:

for(let i = 0; i < students.length; i++){

    if(students[i].mark >= 50){
        console.log(students[i].name +" - pass");
        
    }
    else{
        console.log(students[i].name +" - fail");
        
    }
}

//task3:

for(let i = 0; i < students.length; i++){

    if(students[i].mark > 90){
        console.log(students[i].name +" - A Grade"); 
    }
    else if(students[i].mark >75 && students[i].mark<90){
        console.log(students[i].name +" - B Grade");

    }
    else if(students[i].mark >50 && students[i].mark<75){
        console.log(students[i].name +" - C Grade");
        
    }
    else{
        console.log(students[i].name +" - Fail");

    }

}

//task4:

let topper = students[0];

for(let i = 1; i < students.length; i++){

    if(students[i].mark > topper.mark){
        topper = students[i];  
    }

}
console.log("Topper name is :" + topper.name + " - "+ topper.mark);

//task5:

for(let i = 0; i < students.length; i++){
    if(students[i].course === "React"){
        console.log(students[i]);
    }
}

//task6:

students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

//task7:

let status = "present";

if(status === "present"){
    console.log("Welcome");
} else if(status === "absent"){
    console.log("Mark Absent");
} else if(status === "leave"){
    console.log("Approved Leave");
} else {
    console.log("Invalid Status");
}

//task8:

let username ="admin";

let pass = 1234;

if(username === "admin" && pass === 1234){
    console.log("Login Succcess");
}
else{
    console.log("Incorrect details ");
    
}