// Define the label_maker.js script

// Define a function to print contact information
function printContact(contactInfo) {
    console.log(contactInfo.name);
    console.log(contactInfo.address);
    console.log(`${contactInfo.city}, ${contactInfo.state} ${contactInfo.zip}`);
}

// Define contact information object
let myInfo = {
    name: "Guadalupe Argumedo",
    address: "121 Main Street",
    city: "Yuma",
    state: "AZ",
    zip: "85364"
};

// Invoke the printContact function with the contact information object
printContact(myInfo);