"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt ("skol'ko smotreli?", "");
        
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN (personalMovieDB.count)){
            personalMovieDB.count = +prompt ("skol'ko smotreli?", "");
        }
    },
    writeYourGenres: function(){
        for (let i=0;i<1;i++){
            // let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
            //     if (genre === ""|| genre === null){
            //         console.log ("Nevernie dannie");
            //         i--;
            //     } else {
            //         personalMovieDB.genres[i]=genre; 
            //     }
            let genres = prompt(`Введите Ваши любимык жанры через запятую`).toLocaleLowerCase();
            if (genres === ""|| genres === null){
                console.log ("Nevernie dannie");
                i--;
            } else {
                personalMovieDB.genres=genres.split(', '); 
                personalMovieDB.genres.sort();
        } 
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Lubimiy ganr # ${i+1} eto ${item}`);
        });
    }
    },
    rememberMyFilms: function(){
        for (let i=0;i<2;i++){
            const a = prompt("last movie?", ""),
                  b = prompt("rate movie", "");
            if (a!=null&&b!=null&&a!=""&&b!=""&&a.length<50){
                personalMovieDB.movies[a]=b;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }  
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Prosmotreno malo filmov");    
        } else if (personalMovieDB.count >=10&&personalMovieDB.count<30){
            console.log("Klassicheskiy zritel");  
        } else if (personalMovieDB.count>=30){
            console.log("Kinoman");
        } else {
            console.log("ERROR");
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB:function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    
};