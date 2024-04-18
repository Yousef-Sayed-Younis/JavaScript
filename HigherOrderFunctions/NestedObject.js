let user = {
  name: "Yousef",
  age: 20,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Dammam",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (this.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
