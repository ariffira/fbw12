let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let complexArray = [
    {
        name: "Arif",
        age: 32
    },
    {
        name: "Adel",
        age: 25
    },
    {
        name: "Paolo",
        age: 12
    }
];

let myFunction = (total, num, index, array) => {
    console.log("The total is: " + total, "The number is: " + num, "The index is: " + index, "The array is: " + array);
    return total += num;
};

console.log(array.reduce(myFunction, 0));
console.log(complexArray.filter((item) => item.age >= 18));
console.log(complexArray.reduce((total, item) => total += item.age, 0));