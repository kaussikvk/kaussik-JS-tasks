
//Task 1:

let arr = [10, 20, 30, 40, 50];

console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(arr.length);

//Task 2:

let arr1 = [1,2,3];

arr1.push(4,5);
arr1.pop();
console.log(arr1);

//task 3:

let arr2 = ["html","css","javascript","react"];

console.log(arr2.includes("javascript"));

//task 4:

let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let res = emp.filter((c,i,t)=>{

    return c.salary >20000

});

console.log(res);

//task 5:

let task5 = emp.map((c,i,t)=>{

    return c.name

});

console.log(task5);

//task6:

let total = emp.reduce((sum, e) => sum + e.salary, 0);

console.log(total);

//task 7:

let arr3 = [1,2,2,3,4,4,5];

let unique = [...new Set(arr3)];

console.log(unique);

//task 8:

let arr4 = [10, 200, 5, 90];

let max = arr4.reduce((acc, val) => {
  return val > acc ? val : acc;
}, arr4[0]);

console.log(max);

//task 9:

let str = "hello";

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);

//task 10:

let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = emp1.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(grouped);

//tsk 11:

let arr5 = [1,[2,[3,[4]]]];

let [d1,[d2,[d3,[d4]]]] = arr5;

console.log(d1,d2,d3,d4);

//task 12:

let arr6 = [5,2,9,1];

let result = arr6.sort((a,b)=>{
    return b-a
});

console.log(result);

//task 13:

let arr7 = [10, 50, 20, 40];

let secLargest = arr7.sort((a,b)=>{
    return b-a
});

console.log(secLargest[1]);

//task 14:

let str1 = "aabbccdde";

let count = str1.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(count);






