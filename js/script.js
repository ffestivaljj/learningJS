"use strict";


// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt ("skol'ko smotreli?", "");
    
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)){
//         numberOfFilms = +prompt ("skol'ko smotreli?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     let num;
//     for (let i=0;i<3;i++){
//         personalMovieDB.genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`, "");
//         console.log((i+1), ' eto ', personalMovieDB.genres);

//     }
// }
// writeYourGenres();

// // function rememberMyFilms(){
// //     for (let i=0;i<2;i++){
// //         const a = prompt("last movie?", ""),
// //               b = prompt("rate movie", "");
// //         if (a!=null&&b!=null&&a!=""&&b!=""&&a.length<50){
// //             personalMovieDB.movies[a]=b;
// //             console.log('done');
// //         }else{
// //             console.log('error');
// //             i--;
// //         }  
// //     }
// // }
// // rememberMyFilms();

// // function detectPersonalLevel(){
// //     if (personalMovieDB.count < 10){
// //         console.log("Prosmotreno malo filmov");    
// //     } else if (personalMovieDB.count >=10&&personalMovieDB.count<30){
// //         console.log("Klassicheskiy zritel");  
// //     } else if (personalMovieDB.count>=30){
// //         console.log("Kinoman");
// //     } else {
// //         console.log("ERROR");
// //     }
// // }
// // detectPersonalLevel();
