// // Defining Object
// let user = {
//   // Properties
//   firstName: "Yousef",
//   lastName: "Sayed",
//   age: 20,
//   addresses: {
//     eg: "Giza",
//     usa: "California",
//     ksa: "Dammam",

//     getMainAddress: function () {
//       return `Main Address Is In Egypt In City ${user.addresses.eg}`;
//     },
//   },

//   // Methods
//   //   getFullName: function () {
//   //     return `Full Name: ${user.firstName} ${user.lastName}`;
//   //   },

//   getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,

//   getAge: function () {
//     return `Your Age In Days: ${user.age * 365} Day`;
//   },
// };

// // Accessing Object Properties
// console.log(user.firstName); // Dot Notation
// console.log(user["firstName"]); // Bracket Notation

// console.log(user.addresses.eg);
// console.log(user["addresses"]["ksa"]);

// // Accessing Object Methods
// console.log(user.getFullName());
// console.log(user.getAge(20));

// console.log(user.addresses.getMainAddress());

// let user = new Object();

// user.firstName = "Yousef";
// user.lastName = "Sayed";
// user["age"] = 20;

// user.getFullName = function () {
//   return `Full Name Is ${user.firstName} ${user.lastName}`;
// };

// Get Object From Object
// let mainObj = {
//   hasDiscount: true,
//   showMsg: function () {
//     // 'this' Doesn't Work With Arrow Function
//     return `You ${this.hasDiscount ? "" : "Don't "}Have Discount`;
//   },
// };

// console.log(mainObj.hasDiscount);
// console.log(mainObj.showMsg());

// let otherObj = Object.create(mainObj);

// otherObj.hasDiscount = false;
// console.log(otherObj.hasDiscount);
// console.log(otherObj.showMsg());

// const src1 = {
//   prop1: "Value1",
//   prop2: "Value2",
//   method1: function () {
//     return `Method 1`;
//   },
// };

// const src2 = {
//   prop3: "Value3",
//   prop4: "Value4",
//   method2: function () {
//     return `Method 2`;
//   },
// };

// const target = {
//   prop5: "Value5",
// };

// Object.assign(target, src1, src2, { prop6: "Value6" });

// console.log(target);

// const myObject = Object.assign({}, target, { prop7: "Value7"});

// console.log(myObject);

// const user = { name: "Yousef" };

// console.log(user);
// console.log(user.name);

// // delete user // You Can delete Property only

// delete user.name;

// console.log(user);
// console.log(user.name);

// const username = "Yousef";

// console.log(username)
// console.log(delete username) // false
// console.log(username)

// const freezObj = Object.freeze({ age: 20 });

// console.log(freezObj);
// console.log(freezObj.age);

// console.log(delete freezObj.age); // Can't Delete Freezed Object

// console.log(freezObj);
// console.log(freezObj.age);

// If 'Configurable: false' Can't Delete Property
// const eObj = {};
// Object.defineProperty(eObj, "a", { value: 1, configurable: false });

// console.log(eObj);
// console.log(eObj.a);

// console.log(delete eObj.a);

// console.log(eObj);
// console.log(eObj.a);

// const user = {
//   name: "Yousef",
//   country: "Egypt",
//   age: 20,
// };

// let finalData = "";

// for (let info in user) {
//   console.log(`The ${info} Is => ${user[info]}`);
//   finalData += `<div>The ${info} Is => ${user[info]}</div>`;
// }

// document.getElementById("info").innerHTML = finalData;

// function Phone(serial, color, price) {
//   this.serial = serial;
//   this.color = color;
//   this.price = price;
// }

// let phone1 = new Phone("123", "Red", 500);
// console.log(phone1.serial)

// function Phone(serial) {
//   this.serial = serial;
// }

// 'new' Used For Creating Instance From Constructor Function
// let phone1 = new Phone(123);
// let phone2 = new Phone(321);

// function sayHelloTo(someone) {
//   return `Hello ${someone}`;
// }

// function User(name, email, age, showEmail) {
//   this.name = name;
//   this.email = email;
//   this.age = age;

//   this.updateName = function (newName) {
//     if (this.age > 18) {
//       this.name = newName;
//     } else {
//       console.log(`You Can't Update Name`);
//     }
//   };

//   this.showEmail = function () {
//     if (showEmail === true) {
//       return `Email Is: ${this.email}`;
//     } else {
//       return `Data Is Private`;
//     }
//   };
// }

// let user1 = new User("Yousef", "h@mail.com", 20, false);
// user1.updateName("Osama");
// console.log(user1.showEmail());

// Prototype
// function User(name) {
//   this.name = name;
//   this.welcome = function () {
//     return `Welcome ${this.name}`;
//   };
// }

// let user1 = new User("Yousef");
// let user2 = new User("Osama");

// console.log(User.prototype);

// User.prototype.addTitle = function () {
//   return `Mr. ${this.name}`;
// };

// Object.prototype.Yousef = "Yousef Sayed Younis";

// const myObject = { a: 1, b: 2 };

// console.log(myObject.Yousef);

// Class
// Cant Access 'Class' Before Initialization
// Access 'Function' Before Initialization
// Must Use 'new'
/* 
class User {
  // Static Properties
  static counter = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    User.counter++; // For 'User' Only
  }
  // Methods
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
  get showInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
  set changeEmail(newEmail) {
    this.email = newEmail;
  }

  // Static Methods "For Main Class Only" 'User'
  static countObj = function () {
    return `${this.counter}`; // 'this' For Class 'User' beacuse 'static'
  };
}
 */
/* let user1 = new User("Yousef", "y@nn.eg");
user1.changeEmail = "ss@nn.sa";
console.log(user1.showInfo); */

/* class Admin extends User {
  constructor(name, email) {
    super(name, email); // To Inheritance From Parent
  }
  adminMsg() {
    return `You Are Admin`;
  }
  sayHello() { // Overwriting Methods
      return `Hello Baby ${this.name}`
  }
} */

/* 
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: true, // Can Change Value
  enumerable: true, // Can Reach/Access In Loop
  configurable: true, // Can Delete and Redefine Property 
  value: 3,
});
 */
/* 
class User {
  constructor(fName, lName, age, email) {
    this.name = {
      first: fName,
      last: lName,
    };
    this.age = age;
    this.email = email;
  }
}

let user1 = new User("Yousef", "Sayed", 20, "y@nn.eg");
console.log(user1.name.first)
 */