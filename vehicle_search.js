let vehicles = [ 
    { 
        color: "Silver", 
        type: "Minivan", 
        registrationState: "CA", 
        licenseNo: "ABC-101", 
        registrationExpires: new Date("3-10-2022"), 
        capacity: 7 
    }, 
    { 
        color: "Red", 
        type: "Pickup Truck",
        registrationState: "TX", 
        licenseNo: "A1D-2NC", 
        registrationExpires: new Date("8-31-2023"), 
        capacity: 3 
    }, 
    { 
        color: "White", 
        type: "Pickup Truck", 
        registrationState: "TX", 
        licenseNo: "A22-X00", 
        registrationExpires: new Date("9-31-2023"), 
        capacity: 6 
    }, 
    { 
        color: "Red", 
        type: "Car", 
        registrationState: "CA", 
        licenseNo: "ABC-222", 
        registrationExpires: new Date("12-10-2022"), 
        capacity: 5 
    }, 
    { 
        color: "Black", 
        type: "SUV", 
        registrationState: "CA", 
        licenseNo: "EEE-222", 
        registrationExpires: new Date("12-10-2021"), 
        capacity: 7 
    }, 
    { 
        color: "Red", 
        type: "SUV", 
        registrationState: "TX", 
        licenseNo: "ZZ2-101", 
        registrationExpires: new Date("12-30-2022"), 
        capacity: 5 
    }, 
    { 
        color: "White", 
        type: "Pickup Truck", 
        registrationState: "TX", 
        licenseNo: "CAC-7YT", 
        registrationExpires: new Date("1-31-2023"), 
        capacity: 5 
    }, 
    { 
        color: "White", 
        type: "Pickup Truck", 
        registrationState: "CA", 
        licenseNo: "123-ABC", 
        registrationExpires: new Date("3-31-2025"), //changed year to test #2
        capacity: 5
    }
];

// Which vehicles are RED?
let redVehicles = [];
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].color == "Red") {
        console.log(vehicles[i].type + " : " + vehicles[i].licenseNo);

    }
}

console.log("--------------------------------------------------");

// Which vehicles have registrations that are expired?
let expiredRegistration = [];
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].registrationExpires < new Date()) {
        console.log(vehicles[i].type + " : " + vehicles[i].licenseNo);

    }
}

console.log("--------------------------------------------------");

// Which vehicles that hold at least 6 people?
let peopleiInVehicles = [];
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].capacity >= 6) {
        console.log(vehicles[i].type + " : " + vehicles[i].licenseNo);

    }
}

console.log("--------------------------------------------------");

// Which vehicles have license plates that end with "222"?
let plateEnd222 = [];
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].licenseNo.endsWith(222)) {
        console.log(vehicles[i].type + " : " + vehicles[i].licenseNo);

    }
}

/*
for (let i = 0; i < academyMembers.length; i++) { //loop over each member of the academyMembers
    for (let j = 0; j < academyMembers[i].films.length; j++) { //loop over each film of current academy member
        if (academyMembers[i].films[j][0] === "A") { //check if film starts with A
            console.log(academyMembers[i].name); //if the condition is met, print name
            break; //exit the inner loop
        }
    }
}
*/