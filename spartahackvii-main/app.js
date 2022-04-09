
class Attraction { // how are we incorporating location? (ask zayn)
  constructor(name, open_time, close_time, cost_scale, radius, local ) {
    this.name = name;
    this.open_time = 0
    this.close_time = 0
    this.cost_scale = 1
    this.radius = 0
    this.local = true
  }
}

//Preference variables

var city_travelled;
var begin_date;
var end_date;
var activity_level;
var budget_range;
var hotel_location;
var breakfast_provided;
var preferred_radius;
var transport_type;
var food_preferences = [];
var vegetarian_preference;
var vegan_preference;
var travel_party;
var wake_up_time;
var bed_time;

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// function selectPreferences(){}

// function showResults(){}

// // display user preference quiz right away
// selectPreferences();

// // show itinerary once preferences submitted
// submitButton.addEventListener('click', showResults);


function assignPreferences(){
  var userInput = document.getElementById('dd').value;
  alert(userInput)}

// let Udon_Sushi_Restaurant = new Attraction("Udon_Sushi_Restaurant", 12, 20, 3, 3, true)
// let Omi_Sushi = new Attraction("Omi_Sushi", 11, 20, 2, 1, true)
// let East_Cafe = new Attraction("East_Cafe", 5, 24, 2, 3, true)
// let Royal_Pot = new Attraction("Royal_Pot", 10, 24, 2, 2, true)
let Buffalo_Wild_Wings = new Attraction("Buffalo_Wild_Wings", 11, 24, 2, 1, false)
let iHop = new Attraction("iHop", 7, 15, 2, 1, false)
let 


var data_dict = {
"cuisine": {"Japanese": [Udon_Sushi_Restaurant, Omi_Sushi], "Chinese": [East_Cafe, Royal_Pot], "American": [Buffalo_Wild_Wings, iHop]}, 
"sightseeing": {}
}

