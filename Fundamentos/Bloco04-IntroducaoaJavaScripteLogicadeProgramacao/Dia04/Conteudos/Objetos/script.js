let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

console.log(
  "A jogadora",
  player.name,
  player.lastName,
  "tem",
  player.age,
  "anos de idade."
);

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

let campea = player.bestInTheWorld.length;

console.log(
  "A jogadora",
  player.name,
  player.lastName,
  "foi eleita a melhor do mundo por",
  campea,
  "vezes."
);

let ouro = player.medals.golden;
let prata = player.medals.silver;

console.log("A jogadora possui", ouro, "medalhas de ouro e", prata, "medalhas de prata.")
