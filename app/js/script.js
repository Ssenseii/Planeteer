/*

class Planet {
  constructor(){
    this.id ///planet ID
    this.name, /// planet Name
    this.size, /// xxs, xs, s, m, l, xl, xxl
    this.RotationSpeed, /// speed from 1 to 100 (ended up using orbital period instead)
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
let diameter;

/// randomizers
let randomPlanetName;
let randomCommonName;
let randomPlanetId;
let randomPlanetSize;
let randomOrbitalPeriod;
let randomSubstanceState;
let randomLifeStatus;

/// extra vars for functions;
let planetFirstPart;
let planetSecondPart = [];

let PlanetSS2;
let PlanetSS1 = ["Chthonian", "Carbon", "Coreless", "Desert", "Gas", "Helium", "Hycean", "Ice", "Iron", "Lava", "Ocean", "Puffy", "Silicate", "Terrestrial", "Nuclear"];


/// html vars

var htmlPlanetName = document.getElementById("htmlPlanetName");
var htmlCommonName = document.getElementById("htmlCommonName");
var htmlId = document.getElementById("htmlId");
var htmlName = document.getElementById("htmlName");
var htmlSize = document.getElementById("htmlSize");
var htmlOrbitalPeriod = document.getElementById("htmlOrbitalPeriod");
var htmlSubstanceState = document.getElementById("htmlSubstanceState");
var htmlLifeStatus = document.getElementById("htmlLifeStatus");

/// planet Name: 

function PlanetName(){

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
      break;/// working

    case 80 > chance && chance >= 50:
      randomPlanetName = planetFirstPart + " " + planetSecondPart + "-" + Vowels[b] + Consonant[e];

    case 50 > chance && chance >= 20:
      randomPlanetName = planetFirstPart + " " + planetSecondPart
      break; ///working

    case 20 > chance && chance >= 10:
      randomPlanetName = planetFirstPart + "-" + Vowels[a] + " " + planetSecondPart 
      break; ///working

    case 10 > chance:
      randomPlanetName = planetFirstPart + '::' + Numbers[i] + "-" + Vowels[a] + " " + planetSecondPart
      break; ///working

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
      diameter = (Math.floor(Math.random() * 1400000) + 120000)
      randomPlanetSize = "Giant"
      htmlSize.style.color = "#E6CD22"
      break;

    case 15 > chance2 && chance2 >= 5:
      diameter = (Math.floor(Math.random() * 120000) + 90000)
      randomPlanetSize = "Planetar"
      htmlSize.style.color = "#b14d4a"
      break;
    
    case 30 > chance2 && chance2 >= 15:
      diameter = (Math.floor(Math.random() * 90000) + 40000)
      randomPlanetSize = "Mini-Neptune"
      htmlSize.style.color = "#9582AD"
    break;

    case 50 > chance2 && chance2 >= 30:
      diameter = (Math.floor(Math.random() * 40000) + 12000)
      randomPlanetSize = "Super-Earth"
      htmlSize.style.color = "#5A8EC4"
      break;

    case 50 <= chance2:
      diameter = (Math.floor(Math.random() * 12000) + 6000)
      randomPlanetSize = "Dwarf"
      htmlSize.style.color = "#68AD62"
      break;

    default:
      break;
  }

  htmlSize.innerHTML = randomPlanetSize;

}


function PlanetOrbitalPeriod(){
  randomOrbitalPeriod = Math.floor(Math.random() * 10000) + 1;;

  if (randomOrbitalPeriod >= 300 && randomOrbitalPeriod <= 400) { htmlOrbitalPeriod.style.color = "#E6CD22" }
  htmlOrbitalPeriod.innerHTML = randomOrbitalPeriod + " " + " ED";
}

function PlanetSubstanceState() {
  switch(true){
    case diameter >= 120000:
      PlanetSS2 = "Giant"
      htmlSubstanceState.style.color = "#E6CD22"
      break;
      
    case diameter >= 90000 && diameter < 120000:
      PlanetSS2 = "ProtoGiant"
      htmlSubstanceState.style.color = "#b14d4a"
      break;

    case diameter >= 12000 && diameter < 90000:
      PlanetSS2 = "Planet"
      htmlSubstanceState.style.color = "#5A8EC4"
      break;

    case diameter > 6000 && diameter < 12000 :
      PlanetSS2 = "Dwarf"
      htmlSubstanceState.style.color = "#68AD62"
      break;

    default:
      break;
    }   

    randomSubstanceState = PlanetSS1[Math.floor(Math.random() * PlanetSS1.length)] + " " + PlanetSS2;

    htmlSubstanceState.innerHTML = randomSubstanceState; 
}

function PlanetLifeStatus(){
  /* it returns either dead or alive randomly, coin flip = 50/50 */

  let coinFlip = Math.random();
    if (coinFlip < 0.5){
      randomLifeStatus = "Dead Core";
      
    }else{
        randomLifeStatus = "Living Core";
      htmlLifeStatus.style.color = "#E6CD22"
      }
  console.log(coinFlip)
  htmlLifeStatus.innerHTML = randomLifeStatus;
}

PlanetName();
PlanetID();
PlanetSize();
PlanetOrbitalPeriod();
PlanetSubstanceState();
PlanetLifeStatus();





