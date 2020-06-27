// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let allDirectors = arr.map(function (movie) {
        return movie.director;
    });
    return allDirectors;
}

getAllDirectors();

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let drama = arr.filter(function (movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    })
    return drama.length;
};

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    var arrRates = arr.map(function (movie) {
        return movie.rate;
    });
    var arrRatesClean = arrRates.filter(function (el) {
        return el != undefined;
    })
    var sum = arrRatesClean.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue // somme de tous les nombres 
    }, 0);
    if (sum === 0) {
        return 0;
    } else {
        return Math.ceil((sum / arrRates.length) * 100) / 100;
    }
}

ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var arrDramaRates = arr.filter(function (movie) {
        return movie.genre.includes('Drama')
    })
    var arrRates = arrDramaRates.map(function (movie) {
        return movie.rate;
    });
    var arrRatesClean = arrRates.filter(function (el) {
        return el != undefined;
    })
    var sum = arrRatesClean.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue // somme de tous les nombres 
    }, 0);
    if (sum === 0) {
        return 0;
    } else {
        return Math.round((sum / arrRates.length) * 100) / 100;
    }
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newArray = arr.slice()
    newArray.sort(function (a, b) {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year === b.year) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            if (a.title === b.title) return 0;
        }
    })
    return newArray;
}

orderByYear(movies);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    var arrTitle = arr.map(function (movie) {
        return movie.title;
    });
    arrTitle.sort()
    return arrTitle.slice(0, 20);
}

orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average