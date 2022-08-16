class Planet {
  constructor(){
    this.id ///planet ID
    this.name, /// planet Name
    this.size, /// xxs, xs, s, m, l, xl, xxl
    this.rotationSpeed, /// speed from 1 to 100
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

/// Variables

const Consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N',  'P', 'Q', 'R', 'S', 'T',  'V', 'W', 'X', 'Y', 'Z'];
const Vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
const Numbers = ['1','2','3','4','5','6','7','8','9','10'];

/// numbers
let i = Math.floor(Math.random() * 10);
let j = Math.floor(Math.random() * 10);
let k = Math.floor(Math.random() * 10);
let l = Math.floor(Math.random() * 10);
let m = Math.floor(Math.random() * 10);
let n = Math.floor(Math.random() * 10);

/// vowels
let a = Math.floor(Math.random() * 6);
let b = Math.floor(Math.random() * 6);
let c = Math.floor(Math.random() * 6);

/// consonants
let d = Math.floor(Math.random() * 21);
let e = Math.floor(Math.random() * 21);
let f = Math.floor(Math.random() * 21);

let chance = Math.floor(Math.random() * 100) + 1;

let randomPlanetName;
let planetFirstPart;
let planetSecondPart = [];


/// html vars

var htmlPlanetName = document.getElementById("htmlPlanetName");


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
      randomPlanetName = planetFirstPart + " " + planetSecondPart + "-" + planetFirstPart 
      break;

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

  htmlPlanetName.innerHTML = randomPlanetName;

}


planetName();


