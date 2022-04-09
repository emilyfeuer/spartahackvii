
class Attraction {
  constructor(name, open_time, close_time, cost_scale, radius, local ) {
    this.name = name;
    this.open_time = 0
    this.close_time = 0
    this.cost_scale = 1
    this.radius = 0
    this.local = true
  }
}




let Udon_Sushi_Restaurant = new Attraction("Udon_Sushi_Restaurant", 12, 20, 3, 3, true)
let Omi_Sushi = new Attraction("Omi_Sushi", 11, 20, 2, 1, true)
let East_Cafe = new Attraction("East_Cafe", 5, 24, 2, 3, true)
let Royal_Pot = new Attraction("Royal_Pot", 10, 24, 2, 2, true)
let Buffalo_Wild_Wings = new Attraction("Buffalo_Wild_Wings", 11, 24, 2, 1, false)
let iHop = new Attraction("iHop", 7, 15, 2, 1, false)


var data_dict = {
"cusine": {"Japanese": [Udon_Sushi_Restaurant, Omi_Sushi], "Chinese": [East_Cafe, Royal_Pot], "American": [Buffalo_Wild_Wings, iHop]}, 
"site_seeing": {}
}




