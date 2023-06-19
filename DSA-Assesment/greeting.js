// Question - let obj1 = { "greeting": "hello" };
// let obj2 = obj1;
// obj1["greeting"] = "Bye";
// console.log(obj1);
// console.log(obj2);

/* so in javascript we have two data types 
1- primitive   2- non primitive
primitive always call by value where as non primitive has the call by reference
so array and object are non primitive data types so they hold the reference value
which means if we are changing the one obj so other obj will also get the same value becasue of 
same memory locatoin of address
*/


let obj1 = { greeting: "hello" };   //in more memory it create a new object and added a reference of it to obj1
// in obj2, insist of creating a new object we just pass the reference of it


let obj2 = obj1;
// so whenever we updatin a reference object it reflect on both
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

// the O/P - { greeting: 'Bye' }
            // { greeting: 'Bye' }

// we can avoid this with the help of deep coopy concept 



