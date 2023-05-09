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