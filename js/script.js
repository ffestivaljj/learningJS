"use strict";

//1
const nOf = +prompt ("Ckolko filmov smotreli", "?");
console.log(nOf);

//2
const personalMovieDB = {
    count: nOf,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

//3
const qFilm1 = prompt ('1. What is the last movie?',"Spider-man");
const filmRate1 = prompt ('1. How much?',"9.5");
const qFilm2 = prompt ('2. What is the last movie?',"Wonder-women");
const filmRate2 = prompt ('2. How much?',"8.5");

console.log(qFilm1,filmRate1,qFilm2,filmRate2);

// const name1 = qFilm1;
// const name2 = qFilm2;
// const movies = {
// };

personalMovieDB.movies[qFilm1]=filmRate1;
personalMovieDB.movies[qFilm2]=filmRate2;


console.log(personalMovieDB);


