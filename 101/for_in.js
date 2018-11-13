//iterate over an object
const person = {
    name: "Rob",
    age: 34
};

//key
for (let key in person) {
    console.log(key);
}

//key/value
for (let key in person) {
    console.log(key, person[key]);
}