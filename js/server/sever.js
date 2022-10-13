// const { json } = require("body-parser");
const express = require("express");

const app = express();
const port = 3000;
let films = [
  {
    id: 1,
    title: "Le iene",
    anno: "1992",
    regista: "Quentin Tarantino",
    link: "/assets/media/img7-li.jpg",
  },
  {
    id: 2,
    title: "Pulp Fiction ",
    anno: "1994",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/Pulp_Fiction",
  },
  {
    id: 3,
    title: "Jackie Brown ",
    anno: "1997",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/Jackie_Brown",
  },
  {
    id: 4,
    title: "Kill Bill: Volume 1 - 2",
    anno: "2003 - 2004",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/Kill_Bill:_Volume_1",
  },
  {
    id: 5,
    title: "Grindhouse - A prova di morte",
    anno: "2007",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/Grindhouse_-_A_prova_di_morte",
  },
  {
    id: 6,
    title: "Bastardi senza gloria",
    anno: "2009",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/Bastardi_senza_gloria",
  },
  {
    id: 7,
    title: "Django Unchained",
    anno: "2012",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/Django_Unchained",
  },
  {
    id: 8,
    title: "The Hateful Eight ",
    anno: "2015",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/The_Hateful_Eight",
  },
  {
    id: 9,
    title: "C'era una volta a... Hollywood",
    anno: "2019",
    regista: "Quentin Tarantino",
    link: "https://it.wikipedia.org/wiki/C%27era_una_volta_a..._Hollywood",
  },
  {
    id: 10,
    title: "Io e Annie",
    anno: "1977",
    regista: "Woody Allen",
    link: "https://it.wikipedia.org/wiki/Io_e_Annie",
  },
  {
    id: 11,
    title: "Zelig",
    anno: "1983",
    regista: "Woody Allen",
    link: "https://it.wikipedia.org/wiki/Zelig_(film)",
  },
  {
    id: 12,
    title: "Radio Days",
    anno: "1987",
    regista: "Woody Allen",
    link: "https://it.wikipedia.org/wiki/Radio_Days",
  },
  {
    id: 13,
    title: "Harry a pezzi",
    anno: "1997",
    regista: "Woody Allen",
    link: "https://it.wikipedia.org/wiki/Harry_a_pezzi",
  },
  {
    id: 14,
    title: "Vicky Cristina Barcelona",
    anno: "2008",
    regista: "Woody Allen",
    link: "https://it.wikipedia.org/wiki/Vicky_Cristina_Barcelona",
  },
  {
    id: 15,
    title: "Midnight in Paris",
    anno: "2011",
    regista: "Woody Allen",
    link: "https://it.wikipedia.org/wiki/Midnight_in_Paris",
  },
];

let utenti = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: "Romaguera-Crona",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: "Deckow-Crist",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: "Robel-Corkery",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "Keebler LLC",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: "Considine-Lockman",
  },
];

let utentiFilm = films.concat(utenti);

app.get("/", (req, res) => {
  res.send("Benvenuto, puoi chiamare le rotte /film e /utenti");
});

app.get("/:id", (req, res) => {
  res.send(JSON.stringify(films));
});

app.get("/utenti", (req, res) => {
  res.send(JSON.stringify(utenti));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
