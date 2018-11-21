// street
// city
// zipCode
// showAddress(address)

//Create an object with the properties and display

const address = {
  street: "my street",
  city: "my city",
  zipCode: "my zip code"
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

//factory function implementation

function createAddressF(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode
  };
}

let addressF = createAddressF("Bullrush", "London", "XXX");
console.log(addressF);

//constructor function implementation

function AddressC(street, city, zipCode) {
  this.street = street;
  this.city = street;
  this.zipCode = zipCode;
}

const addressc = new AddressC("Bullrush", "London", "XXX");
console.log(addressc);
