'use strict'

function workWithMovies() {
    const movies = ['Soy Leyenda', 'Interstellar', 'Batman'];

    movies[3] = 'El diario de Noa';

    console.log(movies);

    movies[2] = 'Avatar';

    console.log(movies);

    movies[3] = 'Origen';

    console.log(movies);
}

workWithMovies();