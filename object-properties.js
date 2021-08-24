// Object & Properties

var student1={
    name: 'Sadia Afrin',
    roll: 127215,
    maeks: 60,
    phoneNo: 016000,
};

var mobile={
    color: 'Goldern',
    price: 1900,
    screenSize: 5,
    Storage: '16gb',
};

// object er properties change korar different ways 
// 1
var mobileColor = 'color';
mobile[mobileColor]= 'Black';
// console.log(mobile);

// 2
mobile.color = 'White';
// console.log(mobile);

// 3
mobile['color'] = 'Silver'
console.log(mobile);