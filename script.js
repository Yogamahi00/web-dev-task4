import { allMovies } from '/data.js';




//display anime movies
let animeMoviesHTML = '';
allMovies.forEach((movie) => {
    if(movie.genre === 'Anime'){
        animeMoviesHTML += ` <div class="col-6 col-md-4 col-lg-2 my-4">
        <div class="cardd text-center">
            <img src="${movie.img}" class="movie-img">
            <p id="movie-title">${movie.name.toUpperCase()}</p>
            <button class="btn btn-danger play-movie" data-movie-id="${movie.id}" id="play-btn">PLAY NOW</button>
        </div>
    </div>`;
    }
});

document.querySelector('.anime-movies').innerHTML = animeMoviesHTML;



//display series
let seriesHTML = '';

allMovies.forEach((movie) => {
    if(movie.genre === 'Series'){
        seriesHTML += ` <div class="col-6 col-md-4 col-lg-2 my-4">
        <div class="cardd text-center">
            <img src="${movie.img}" class="movie-img">
            <p id="movie-title">${movie.name.toUpperCase()}</p>
            <button class="btn btn-danger play-movie" data-movie-id="${movie.id}" id="play-btn">PLAY NOW</button>
        </div>
    </div>`;
    }
});

document.querySelector('.series').innerHTML = seriesHTML;



//display all movies

let allMoviesHTML = '';

allMovies.forEach((movie) => {
    if(movie.genre === 'Fantasy'){
        allMoviesHTML += ` <div class="col-6 col-md-4 col-lg-2 my-4">
        <div class="cardd text-center">
            <img src="${movie.img}" class="movie-img">
            <p id="movie-title">${movie.name.toUpperCase()}</p>
            <button class="btn btn-danger play-movie" data-movie-id="${movie.id}" id="play-btn">PLAY NOW</button>
        </div>
    </div>`;
    }
});


document.querySelector('.all-movies').innerHTML = allMoviesHTML;


//search movie

const searchElement = document.getElementById('search-bar');
document.addEventListener('keyup', () => {
    const searchMovie = searchElement.value.toLowerCase(); 

    const filteredMovies = allMovies.filter(movie => movie.name.toLowerCase().startsWith(searchMovie));
    let allMoviesHTML = '';

    filteredMovies.forEach((movie) => {
        allMoviesHTML += `<div class="col-6 col-md-4 col-lg-2 my-4">
            <div class="cardd text-center">
                <img src="${movie.img}" class="movie-img">
                <p id="movie-title">${movie.name.toUpperCase()}</p>
                <button class="btn btn-danger play-movie" data-movie-id="${movie.id}" id="play-btn">PLAY NOW</button>
            </div>
        </div>`;
    });

    document.querySelector('.all-movies').innerHTML = allMoviesHTML;
});


//display movie details

document.querySelectorAll('.play-movie')
.forEach(button=>{
    button.addEventListener('click',()=>{

       let movieId = button.dataset.movieId;
       localStorage.setItem('id',movieId);
       window.location.href ='/movie-details.html';
    });
});



