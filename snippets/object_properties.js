//Find properties and values in an object
//Print values of tpe string
let carParts = {
    engine: true,
    wheels: 4,
    model: 'Ford'
};

//key
const showObjectProps = obj => {
    for (let key in carParts) {
        //Print keys
        console.log(key); //engine, wheels, model
        //Print values
        console.log(obj[key]); //true, 4, Ford
        //is value a string?
        if (typeof obj[key] === "string") console.log(obj[key]); //Ford
    }
}

showObjectProps(carParts);

