
class Attraction {
  constructor(name, open_time = 0, close_time = 0, cost_scale = 1, radius = 0, local = false) {
    this.name = name;
    this.open_time = open_time
    this.close_time = close_time
    this.cost_scale = cost_scale
    this.radius = radius
    this.local = local
    this.activity_level = 0
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


function assignPreferences(){
  
}

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


var data_dict = {
"Food": {"American": [Olympic_Broil, Buffalo_Wild_Wings, iHop, Red_Haven], "Italian": [Sidebar, Jets_Pizza, Andiamo_Fenton]}, 
"Indoor": {Spare_Time}, "Outdoor": {Horticulture_Gardens}
}


var itinerary_list = [];

for (let key = 0; key < length(data_dict); key++){
  var add_count;
  var activity_list = data_dict[key];
  for (let i = 0; i < length(value); i++){
    if ((activity_list)[i].activity_level <= activity_level){
      add_count += 1;
    }
    if ((activity_list)[i].radius <= preferred_radius){
      add_count += 1;
    }
    if ((activity_list)[i].cost_scale <= budget_range){
      add_count += 1;
    }
  }
}
