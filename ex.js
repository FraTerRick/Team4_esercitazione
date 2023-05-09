let persons = [
  {
    name: "Francesco",
    surname: "Terrasi",
    age: 26,
    city: "Monreale",
    hobby: "football",
    favouriteFood: "pizza",
    favoriteVideoGame: "fifa",
    favouriteFilm: "Iron Man",
    favouriteBook: "Harry Potter",
    petName: "Cesare",
  },
  {
    name: "Marco",
    surname: "Ruberto",
    age: 30,
    city: "Tricase",
    hobby: "football",
    favouriteFood: "parmigiana",
    favoriteVideoGame: "dracula",
    favouriteFilm: "Cinema Paradiso",
    favoriteBook: "One Piece",
    petName: "Scheggia",
  },
  {
    name: "Sebastian",
    surname: "Mocanasu",
    age: 21,
    city: "Sanfre'",
    hobby: "Kick-Box",
    favouriteFood: "Sushi",
    favoriteVideoGame: "LoL",
    favouriteFilm: "Scary Movie",
    favouriteBook: "Psicology",
    petName: "Togo",
  },
  {
    name: "Francesco",
    surname: "Lando",
    age: 26,
    city: "Aprilia",
    hobby: "D&D",
    favouriteFood: "lasagna",
    favoriteVideoGame: "doom",
    favouriteFilm: "Sicario",
    favouriteBook: "Paradise Lost",
    petName: "Kiro",
  },
  {
    name: "Luciano",
    surname: "Rea",
    age: 25,
    city: "Naples",
    hobby: "videogames",
    favouriteFood: "pizza",
    favoriteVideoGame: "LoL",
    favouriteFilm: "scream",
    favouriteBook: "Paradise Lost",
    petName: "Luna",
  },
];

// Print who wrote ‘LoL’ or ‘League Of Legends’ as a favorite video game. (name).

function findGame(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].favoriteVideoGame === "LoL" ||
      array[i].favoriteVideoGame === "League of Legends"
    ) {
      newArray.push(array[i].name + " gioca a LoL");
    }
  }
  console.log(newArray);
}

findGame(persons);

// Print if there are some members with the same name (name)

function compareName(array) {
   let element =[];
   for (let i = 0; i < array.length; i++) {
     for (let y = 0; y < array.length; y++) {
      if (i == y) {
        }else{
          if (array[y].name == array[i].name) {
            element.push(array[i].surname)
            element.push(array[y].surname)
          }
        }
      }
   }
  let element2 =[...new Set(element)];
  console.log("queste persone hanno lo stesso nome"+" "+element2);
}      

compareName( persons);

// Print the team middle age function.

function middleAge(middle) {
  let somma = 0;
  for (let i = 0; i < middle.length; i++) {
    somma += middle[i].age;
  }
  let membri = middle.length;
  return somma / membri;
}
console.log(middleAge(persons));

// Print the team in alphabetical order (surname name)

function sortObjectsArray(arr, prop) {
  return arr.sort(function(a, b) {
    if (a[prop] < b[prop]) {
      return -1;
    } else if (a[prop] > b[prop]) {
      return 1;
    } else {
      return 0;
    }
  });
}
let order=sortObjectsArray(persons, "surname")
console.log(order)

// Print who has a pet (name petName).

function findPet(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].petName != 0) {
      newArray.push(array[i].name + " ha un cane di nome " + array[i].petName);
    } else {
      newArray.push(array[i].name + " non ha un cane");
    }
  }
  console.log(newArray);
}

findPet(persons);

// Print the team in age order (name age)

persons.sort((a, b) => a.age - b.age);

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i].name + " " + persons[i].age);
}
