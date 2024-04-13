import { allMovies } from "/data.js";

showMovieDetails();

function showMovieDetails(){
    let movieDetailsHTML = '';
    let id = localStorage.getItem('id');

allMovies.forEach(movie => {
    if(movie.id === id){
        
        movieDetailsHTML += movieDetailsHTML += `
        <div class="col-10 text-center col-md-4" >
        <img src="${movie.img}" class="movie-img">
        <button class="btn btn-danger mt-5 px-5 play-btn" id="play-btn">PLAY NOW</button>
    </div>
    <div class="col-12 col-md-7">
        <p id="text"><span style="color: red;">MOVIE : </span>${movie.name}</p>
        <p id="text"><span style="color: red;">YEAR : </span>${movie.year}</p>
        <p id="text"><span style="color: red;">DIRECTOR : </span>${movie.director}</p>
        <p id="text"><span style="color: red;">GENRE : </span>${movie.genre}</p>
        <p id="text"><span style="color: red;">PLOT : </span>${movie.plot}</p>
    </div>

        `;
    }
});
document.querySelector('.movie-details').innerHTML = movieDetailsHTML;
}

document.querySelector('.back-button').addEventListener('click',()=>{
    window.location.href ='/index.html';
});