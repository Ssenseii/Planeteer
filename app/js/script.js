/*

class Planet {
  constructor(){
    this.id ///planet ID
    this.name, /// planet Name
    this.size, /// xxs, xs, s, m, l, xl, xxl
    this.orbitalPeriod, /// speed from 1 to 100
    this.State, /// gaz giant, solid rock, liquid conformation
    this.Status, /// Living / Dead T/F
    this.moonStatus, /// does it have a moon? T/F
    this.moonCount, /// if(moonStatus) How many moons does it have? 1-5
    this.moonSize, ///size of its moons {to be expanded into moon subcategories}
    this.habitable, /// can organisms live in it? T/F
    this.natureType, /// jungle, snow, desert, volcanic...
    this.natureColor, /// all color ranges,
    this.liquidStatus, /// Does it contain liquids (if State = liquid, then always True)
    this.liquidColor, /// all color ranges
    this.Description /// description of the planet (from an AI maybe???)
  }
}

*/

/// Rarity Chances;
/// 1-5 = unique
/// 5-15 = rare
/// 15 - 30 = legendary
/// 30 - 50 = uncommon
/// 50 - 100 = common

/// rarity system 

/*
yellow = unique; 
red = rare; 
purple = legendary;
blue = uncommon;
green = common;
*/

/// Variables

const Consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N',  'P', 'Q', 'R', 'S', 'T',  'V', 'W', 'X', 'Y', 'Z'];
const Vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
const Numbers = ['1','2','3','4','5','6','7','8','9','10'];
const Planets = ["Spe", "Arion", "Arkas", "Orbitar", "Taphao Thong", "Taphao Kaew", "Dimidium", "Galileo", "Brahe", "Lipperhey", "Janssen", "Harriot", "Ægir", "Amateru", "Dagon", "Tadmor", "Solas", "Juno", "Orbital", "Terminus", "Apollo", "Eternis", "Lumina", "Novise", "Prism", "Shu", "Mythos", "Pheonix", "Elysium", "Lapis", "Azula"]

/// numbers
let i = Math.floor(Math.random() * Numbers.length);
let j = Math.floor(Math.random() * Numbers.length);
let k = Math.floor(Math.random() * Numbers.length);
let l = Math.floor(Math.random() * Numbers.length);
let m = Math.floor(Math.random() * Numbers.length);
let n = Math.floor(Math.random() * Numbers.length);

/// vowels
let a = Math.floor(Math.random() * Vowels.length);
let b = Math.floor(Math.random() * Vowels.length);
let c = Math.floor(Math.random() * Vowels.length);

/// consonants
let d = Math.floor(Math.random() * Consonant.length);
let e = Math.floor(Math.random() * Consonant.length);
let f = Math.floor(Math.random() * Consonant.length);

let chance = Math.floor(Math.random() * 100) + 1;
let chance2 = Math.floor(Math.random() * 100) + 1;

let randomPlanetName;
let randomCommonName;
let randomPlanetId;
let randomPlanetSize;
let randomOrbitalPeriod;


let planetFirstPart;
let planetSecondPart = [];


/// html vars

var htmlPlanetName = document.getElementById("htmlPlanetName");
var htmlCommonName = document.getElementById("htmlCommonName");
var htmlId = document.getElementById("htmlId");
var htmlName = document.getElementById("htmlName");
var htmlSize = document.getElementById("htmlSize");
let htmlOrbitalPeriod = document.getElementById("htmlOrbitalPeriod");


/// planet Name: 

function planetName(){

  /// how a planet name works is: 
  /*  
    first we need the name of the solar system
    (the name should be locally generated per browser, saved, and re-used for other planets)
    
    names must be phonetically pleasing*
    (consonant + vowel + consonent) ///done
    (voxel + vowel + consonet + vowel) /// Done
    (consonant + vowel + vowel + consonant + vowel + consonant) /// Done
    (consonant + vowel + vowel) ///Done
    sometimes it has two names instead of just one,

    then we need the id of the solar planet, unique to every planet, saved so we can find it later.

    We need the id to have a range between 2 and 6 digits
    sometimes with a dash in between.


    ///name format: 

    AA 54512 a
    AAA-4564
    AAA-Date(2045-2087)-AAA 41 

  */

  /// chances of producing a name
  switch(true){
      case chance >= 80: 
        planetFirstPart =   Consonant[d] + Vowels[a] + Consonant[e];
        break; 

    case 80 > chance && chance >= 50:
        planetFirstPart = Consonant[d] + Vowels[a] + Vowels[b];
        break;

      case 50 > chance && chance >= 20:
        planetFirstPart =  Vowels[a] + Vowels[b] + Consonant[d];
        break;

      case 20 > chance && chance >= 10:
        planetFirstPart = Vowels[a] + Vowels[b] + Consonant[d] + Vowels[c];
        break;

      case 10 > chance:
        planetFirstPart = Consonant[d] + Vowels[a] + Vowels[b] + Consonant[e] + Vowels[c];
        break;
  
      default:
        break;
    }

    /// ID generation: 

    switch(true){
      case chance > 80:
        planetSecondPart = Numbers[i] + Numbers[j] + Numbers[k] + Numbers[l] + Numbers[m];
        break;

      case 80 > chance && chance >= 50:
        planetSecondPart = Numbers[i] + Numbers[j];
        break;

      case 50 > chance && chance >= 20:
        planetSecondPart = Numbers[i] + Numbers[j] + Numbers[k];
        break;

      case 20 > chance && chance >= 10:
        planetSecondPart = Numbers[i] + Numbers[j] + Numbers[k] + Numbers[l];
        break;

      case 10 > chance:
        planetSecondPart = Numbers[i];
        break;

      default:
        break;
    }


  switch (true) {
    case chance > 80:
      randomPlanetName = planetFirstPart + "-" + Vowels[a] + Vowels[b] + Vowels[c] + " " + planetSecondPart + "-" + Numbers[j];
      break;

    case 80 > chance && chance >= 50:
      randomPlanetName = planetFirstPart + " " + planetSecondPart + "-" + Vowels[b] + Consonant[e]

    case 50 > chance && chance >= 20:
      randomPlanetName = planetFirstPart + " " + planetSecondPart
      break;

    case 20 > chance && chance >= 10:
      randomPlanetName = planetFirstPart + "-" + Vowels[a] + " " + planetSecondPart
      break;

    case 10 > chance:
      randomPlanetName = planetFirstPart + '::' + Numbers[i] + "-" + Vowels[a] + " " + planetSecondPart
      break;

    default:
      break;
  }

  randomCommonName = Planets[Math.floor(Math.random() * Planets.length)] + " " + Planets[Math.floor(Math.random() * Planets.length)] + " " + Consonant[e] + "-" +  Numbers[i];

  htmlCommonName.innerHTML = randomCommonName;
  htmlPlanetName.innerHTML = randomPlanetName;
  htmlName.innerHTML = randomPlanetName;



}

/// ID generation

function PlanetID (){

  /// this is gonna work for now, we might need to use UUID but who knows

  randomPlanetId = Date.now() * (Math.floor(Math.random() * 101) +1) ;
  htmlId.innerHTML = randomPlanetId;
}

function PlanetSize (){
  /// xxs, xs, s, m, l, xl, xxl, xxxl

  switch (true) {
    case 5 > chance2 && chance2 >= 1:
      randomPlanetSize = "XXL: Largest Planet In Their Star System";
      htmlSize.style.color = "#E6CD22";
      break;

    case 10 > chance2 && chance2 >= 5:
      randomPlanetSize = "XL";
      htmlSize.style.color = "#AD5350";
      break;
    
    case 20 > chance2 && chance2 >= 10:
      randomPlanetSize = "L";
      htmlSize.style.color = "#9582AD";
    break;

    case 30 > chance2 && chance2 >= 20:
      randomPlanetSize = "S";
      htmlSize.style.color = "#9582AD";
      break;

    case 50 > chance2 && chance2 >= 30:
      randomPlanetSize = "XS";
      htmlSize.style.color = "#5A8EC4";
      break;

    case 50 <= chance2:
      randomPlanetSize = "M";
      htmlSize.style.color = "#68AD62";
      break;

    default:
      break;
  }

  htmlSize.innerHTML = randomPlanetSize;

}



planetName();
PlanetID();
PlanetSize();





