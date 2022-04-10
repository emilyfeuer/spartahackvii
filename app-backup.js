class Attraction {
  constructor(name, open_time, close_time, cost_scale, radius, local) {
    this.name = name;
    this.open_time = open_time;
    this.close_time = close_time;
    this.cost_scale = cost_scale;
    this.radius = radius;
    this.local = local;
    this.activity_level = 0;
  }
}

//Preference variables

var city_traveled;
var begin_date_reference;
var end_date_reference;
var activity_level_reference;
var budget_range_reference;
var hotel_location_reference;
var breakfast_provided_reference;
var preferred_radius_reference;
var transport_type_reference;
var food_preferences_reference = [];
var vegetarian_preference_reference;
var vegan_preference_reference;
var travel_party_reference;
var wake_up_time_reference;
var bed_time_reference;
var itinerary_list = [];


const destination = document.getElementById("destination");
const budget = document.getElementById("budget");
const begin_date = document.getElementById("begin_date");
const end_date = document.getElementById("end_date");
const hotel = document.getElementById("hotel");
const radius = document.getElementById("radius");
const food1 = document.querySelector("input[type=checkbox]");
const food2 = document.getElementById("food2");
const num_people = document.getElementById("num_people");
const begin_time = document.getElementById("begin_time");
const end_time = document.getElementById("end_time");

// const background2 = document.querySelector(".background2");


var budget_current = 1;

budget.addEventListener("change", () => {
  if (budget.value == " $ (low) "){
    budget_current  = 1;
  }
  else if (budget.value == " $$ (medium) "){
    budget_current = 2;
  }
  else{
    budget_current = 3;
  }
});

radius_current = 1;
radius.addEventListener("change", () =>{
  radius_current = parseFloat(radius.value);
})

food1.addEventListener("change", () =>{
  if (food1.checked){
    food_preferences_reference.push(food1.value);
  }
  else{
    food_preferences_reference.pop(food1.value);
  }
})

food2.addEventListener("change", () =>{
  if (food2.checked){
    food_preferences_reference.push(food2.value);   
  }
  else{
    food_preferences_reference.pop(food2.value);
  }
})

// function createDatabase(){
  // name, open_time, close_time, cost_scale, radius, local
  // let Udon_Sushi_Restaurant = new Attraction("Udon_Sushi_Restaurant", 12, 20, 3, 3, true)
  // let Omi_Sushi = new Attraction("Omi_Sushi", 11, 20, 2, 1, true)
  // let East_Cafe = new Attraction("East_Cafe", 5, 24, 2, 3, true)
  // let Royal_Pot = new Attraction("Royal_Pot", 10, 24, 2, 2, true)

  //AMERICAN
  let Olympic_Broil = new Attraction("Olympic Broil", 11, 20, 1, 6.2, true)
  let Buffalo_Wild_Wings = new Attraction("Buffalo_Wild_Wings", 11, 24, 2, 1, false)
  let iHop = new Attraction("iHop", 7, 15, 2, 1, false)
  let Red_Haven = new Attraction("Red Haven", 17, 20, 3, 2.3, true)

  //ITALIAN
  let Sidebar = new Attraction("Sidebar", 12, 0, 1, 2.5, true)
  let Jets_Pizza = new Attraction("Jet's Pizza", 10, 22, 2, 2.2, false)
  let Andiamo_Fenton = new Attraction("Andiamo Fenton", 15, 22, 3, 60, true)

  //Indoor Activities
  let Spare_Time = new Attraction("Spare Time", 13, 23, 2, 2.2, true)

  //Outdoor Activities
  let Horticulture_Gardens = new Attraction("Horticulture Gardens", 6, 22, 1, 1, true)

  const data_dict = {
  "Food": {"American": [Olympic_Broil, Buffalo_Wild_Wings, iHop, Red_Haven], "Italian": [Sidebar, Jets_Pizza, Andiamo_Fenton]}, 
  "Activities": {"Indoor": [Spare_Time], "Outdoor": [Horticulture_Gardens]}
  };
  
  // for (const [key, value] of Object.entries(data_dict)) {
  //   var add_count = 0;
  //   for (const [inner_key, inner_value] of Object.entries(value)){
  //     for (var i = 0; i < inner_value.length; i++){
  //       // if (inner_value[i].activity_level <= activity_level_reference){
  //       //   add_count += 1;
  //       // }
  //       if (inner_value[i].radius <= preferred_radius_reference){
  //         add_count += 1;
  //       }
  //       if (inner_value[i].cost_scale <= budget_range_reference){
  //         add_count += 1;
  //       }
  //       if (inner_key in food_preferences_reference){
  //         add_count += 1;
  //       }

  //       if (add_count >= 1){
  //         itinerary_list.push(inner_value[i])
  //       }
  //       add_count = 0;
  //     }
  //   }

  // }
//   return itinerary_list;
// }

function createItinerary(itinerary_list){
  for (var i = 0; i < itinerary_list.length; i++){
    console.log(itinerary_list[i])
    const curr_activity = itinerary_list[i];
    const activity_name = curr_activity.name;
    const open_time = curr_activity.open_time;
    const close_time = curr_activity.close_time;
    const cost_scale = curr_activity.cost_scale;
    const radius = curr_activity.radius;
    const local = curr_activity.local;

    const activity_name_container = document.createElement("p");
    const activity_time_container = document.createElement("span");
    const activity_cost_container = document.createElement("span");
    const activity_radius_container = document.createElement("span");
    const activity_local_container = document.createElement("span");

    activity_name_container.innerHTML = activity_name;
    activity_time_container.innerHTML = `${open_time} - ${close_time}`;
    activity_cost_container.innerHTML = cost_scale;
    activity_radius_container.innerHTML = radius;
    activity_local_container.innerHTML = local;

    const itineraryList = document.querySelector("#itinerary-list");
    const activity_placard = document.createElement("div");
    activity_placard.append(activity_name_container);
    activity_placard.append(activity_time_container);
    activity_placard.append(activity_cost_container);
    activity_placard.append(activity_radius_container);
    activity_placard.append(activity_local_container);
    itineraryList.append(activity_placard);

    // const activity_level = curr_activity.activity_level;

  }
}
// const itineraryContainer = document.createElement("div");
// console.log(itineraryContainer);
// itineraryContainer.classList.add("textbox");
// background2.append(itineraryContainer);


const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  submitFunction();
})

// Object.keys(data_dict).forEach(function(key) {
//   console.log(data_dict[key])
// });

function submitFunction(){
  createItinerary(data_dict);
}