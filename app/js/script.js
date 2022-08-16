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

  */

  /// numbers
  let i = Math.floor(Math.random() * 10);
  let j = Math.floor(Math.random() * 10);
  let k = Math.floor(Math.random() * 10);

  /// vowels
  let a = Math.floor(Math.random() * 6);
  let b = Math.floor(Math.random() * 6);
  let c = Math.floor(Math.random() * 6);

  /// consonants
  let d = Math.floor(Math.random() * 21);
  let e = Math.floor(Math.random() * 21);
  let f = Math.floor(Math.random() * 21);

  let chance = Math.floor(Math.random() * 100) + 1;
  
  let planetFirstPart;
  let PlanetSecondPart;
    
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

    /// ID generation: We're going simple, 3 numbers

    PlanetSecondPart = Numbers[i] + Numbers[j] + Numbers[k];
    
    let planet = planetFirstPart + "-" + PlanetSecondPart;
  
    console.log(planet)
      

}

for(let it  = 0; it < 100; it++){
  planetName();
}




