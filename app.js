function validateMovie(movie){
    let validate
     
     validate = movie.endsWith('</iframe>') == true ? true:false
     
     return validate
   }
   
   function addMovie(){
     
     let favoriteMovieField = document.querySelector('#filme')
     let favoriteMovie = favoriteMovieField.value
     
     validateMovie(favoriteMovie) == true? listMoviesOnScreen(favoriteMovie):alert('Por favor, insira uma tag html adquirida a partir do site do youtube. Clique em "Compartilhar" no trailer, após isso clique em "Encorporar" ou "embed" e clique em copiar e cole no campo de texto da página.')
     
     favoriteMovieField.value = ""
   }
   
   function listMoviesOnScreen(movie){

     let moviesListField = document.querySelector('#moviesList') 
     moviesListField.innerHTML = moviesListField.innerHTML + movie
   }
   