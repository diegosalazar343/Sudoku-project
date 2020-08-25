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
