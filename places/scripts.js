// Business Logic for places
function Places(country, city, landmarks, time of year) {
  this.country = country;
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

Places.prototype.vacation = function() { // type vacation for combined country and city we visited
  return this.city + " " + this.country;
}

let flor = {name:"florence"}
let haw = {name: "Hawaii"};
let jun = {name: "Juneau"};
let la = { name: "Los Angeles"};
let phnx = { name: "Phoenix"};
let pdx = { name: "Portland"};
let rom= { name:"Rome"};
let sd = { name: "San Diego"};
let sfo = { name: "San Francisco"};
let sea = { name: "Seattle"};
let vanc = { name: "Vancouver"};
let vict = { name: "Victoria"};


let usa = {name: "USA", cities: [haw, jun, la, phnx, pdx, sd, sfo, sea] };
let can = {name: "Canada", citites: [vanc, vict] };
let mex = {name: "Italy", cities: [flor, rom] };

usa.citites.forEach(function(city) {
  return ("Let's learn about" + city.name + "!");
});
