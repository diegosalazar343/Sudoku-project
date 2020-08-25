// Business Logic for Movie
function Movie(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Movie.prototype.fullticket = function() {
  return this.movie + " " + this.time;     // this might be wrong
}
// User Interface Logic
let movieTotal = new MovieTotal ();

function showMovie(movieId) {
  const Movie = movieTotal.findMovie(movieId);
  $("#show-total").show();
  $(".movie").html(movie.movie);
  $(".time").html(movie.time);
  $(".age").html(movie.age);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + movie.id + ">Delete</button>");
}

function attachMovieTotals() {
  $("ul#movie").on("click", "li", function () {
    showMovie(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function () {
    movieTotal.deleteMovie(this.id);
    $("#show-total").hide();
    displayMovieDetails(movieTimes);
  });
};

$(document).ready(function () {
  attachMovieTotals();
  $("form#movie").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $("input#movie").val();
    const inputtedTime = $("input#time").val();
    const inputtedAge = $("input#Age").val();
    $("input#movie").val("");
    $("input#time").val("");
    $("input#Age").val("");
    let movie = new Movie(inputtedMovie, inputtedTime, inputtedAge);
    movieTotal.addMovie(movieTotal);
    displayMovieDetails(movieTimes);
  })
})
