const students = [
  {
    name: "Nam",
    age: 24,
    gender: "male",
  },
  {
    name: "Mai",
    age: 22,
    gender: "female",
  },
  {
    name: "Trang",
    age: 23,
    gender: "female",
  },
  {
    name: "An",
    age: 20,
    gender: "male",
  },
  {
    name: "Thien",
    age: 27,
    gender: "male",
  },
];
let male = 0
let female = 0
students.forEach(s => {
    if (s.gender === "male") {
        male++
    }
    if (s.gender === "female") {
        female++
    }
});
console.log("numbers of male students: " + male);
console.log("numbers of female students: " + female);