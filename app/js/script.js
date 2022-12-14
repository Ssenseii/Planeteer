/// rarity system

    /// Rarity Chances;
    /// 1-5 = unique
    /// 5-15 = rare
    /// 15 - 30 = legendary
    /// 30 - 50 = uncommon
    /// 50 - 100 = common

/*
yellow = unique; 
red = rare; 
purple = legendary;
blue = uncommon;
green = common;
*/

/// Variables
const Consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const Vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
const Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const Planets = ["Spe", "Arion", "Arkas", "Orbitar", "Taphao Thong", "Taphao Kaew", "Dimidium", "Galileo", "Brahe", "Lipperhey", "Janssen", "Harriot", "Ægir", "Amateru", "Dagon", "Tadmor", "Solas", "Juno", "Orbital", "Terminus", "Apollo", "Eternis", "Lumina", "Novise", "Prism", "Shu", "Mythos", "Pheonix", "Elysium", "Lapis", "Azula"]
const Months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

/// number randomizers:
let i = Math.floor(Math.random() * Numbers.length);
let j = Math.floor(Math.random() * Numbers.length);
let k = Math.floor(Math.random() * Numbers.length);
let l = Math.floor(Math.random() * Numbers.length);
let m = Math.floor(Math.random() * Numbers.length);
let n = Math.floor(Math.random() * Numbers.length);

/// vowel randomizers:
let a = Math.floor(Math.random() * Vowels.length);
let b = Math.floor(Math.random() * Vowels.length);
let c = Math.floor(Math.random() * Vowels.length);

/// consonant randomizers:
let d = Math.floor(Math.random() * Consonant.length);
let e = Math.floor(Math.random() * Consonant.length);
let f = Math.floor(Math.random() * Consonant.length);

/// Percentage: 
let chance = Math.floor(Math.random() * 100) + 1;
let chance2 = Math.floor(Math.random() * 100) + 1;

/// units

let GM = 1e+6; /// km to Gigametres (devide)
let Au = 1.496e+8; /// km to Astronomical Unit (devide)

/// Globally needed Variables:


let GravitationalConstant = 6.6743e-11;
let Masse = (Math.floor(Math.random() * 5.69439e+27) + 3.3010e+23);
let diameter = (Math.floor(Math.random() * 139400) + 600);
let altitude = Math.floor(Math.random() * 10000) + 4000; /// in Km
let temperature = Math.floor(Math.random() * 700); /// Kelvin
let boltzman = 1.38e-23;
let gazConstant = 8.3145;
let geodynamicalConstant = 3.46139e-3;
let universalGravityConstant = 6.67430e-11;
let year = new Date().getFullYear() + 1;

/// randomizers
let randomPlanetName;
let randomCommonName;
let randomPlanetId;
let randomPlanetSize;
let randomSubstanceState;
let randomLifeStatus;
let randomMoonStatus;
let randomMoonCount;
let randomHabitability;
let randomNatureType;
let randomPericenter = (Math.floor(Math.random() * 5e+9) + 4e+7);
let randomApocenter = (Math.floor(Math.random() * 14e+9) + 6e+7);

/// Apocenter must be larger than Pericenter, but still in the same range
for (; randomApocenter < randomPericenter;){
  randomApocenter = (Math.floor(Math.random() * 14e+9) + 6e+7);
}

let randomSemiMajorAxis = (randomApocenter + randomPericenter) / 2;
let randomEccentricity = ((randomApocenter - randomPericenter) / (randomApocenter + randomPericenter))
// let randomOrbitalPeriod = Math.sqrt(Math.pow((randomSemiMajorAxis / Au), 3)); /// Kepler's 3rd Special law
let randomOrbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow((randomSemiMajorAxis * 10e+3 / Au), 3) / (GravitationalConstant * Masse)); /// Kepler's 3rd Special law
let randomOrbitalSpeed = Math.sqrt(GravitationalConstant * Masse * ((2 / (randomPericenter * 1.496e+11 / Au)) - (1 / (randomSemiMajorAxis * 1.496e+11 / Au)))) /// vis-viva equation

/* Distant planet -> low average speed -> long orbital period*/

/// As the wikipedia article states, there is no closed form way to express E in terms of M.
/// so we're calculating mean angular motion instead

let randomMeanAngularMotion = 360 / randomOrbitalPeriod; 

/// to calculate the inclination, we need an orbital momentum vector... in the third dimension

/* linear momentum is the product of mass and velocity
      randomLinearMomentum = Masse * randomOrbitalSpeed;

      The problem is that only works with 2D.

      To calculate the 3D, we ned to use mr1v1 = mr2v2.
      We don't have another body to calculate with (a sun for example)

      the inclination is a random number between 0° and 90°

      we'll use a randomizer for this one (and several other properties in the future)
      */

let randomInclination = Math.floor(Math.random() * 90);

/// Calculate Longtitude of ascending node.

/* n = k* h
  k = unit vector (0, 0, 1)
  h = specific relative angular momentum
    also needs a sun.

  To the randomizer...
  */
let randomLongtitudeOfAscendingNode = (Math.floor(Math.random() * 720)) - 360;




/// time of perhilion instead of perihilion argument
let randomTimePerihilion = (Math.floor(Math.random() * 29) + 1) + " " + Months[Math.floor(Math.random() * Months.length)] + " " + year;  




/// Surface pressure

/* What is probably the simplest model of an atmosphere goes like this: The density ρ, temperature T, and pressure p depend only on altitude y. The weight g of a unit mass does not depend on y (atmospheres are not thick compared to the planet radius, say). A balance of vertical forces on a horizontal slab of area A between y and y+Δy gives −p(y+Δy)A+p(y)A−ρgΔyA=0, which says that the pressure just balances the weight. Divide by Δy and take the limit as Δy tends to 0 to get the basic formula p′(y)=−ρg. Where you go from here depends on what else you assume about the atmosphere.

Case 1) constant density: p(y)=p(0)−ρgy.

Case 2) ideal gas with constant temperature: then Rρ′(y)T=−ρg, and you get density decreasing exponentially with altitude, and p(y)=p(0)e−gy/RT.*/
let randomSurfacePressure = Math.floor(Math.random() * 500) + 100;



/// Scale Height
let randomScaleHeight = ((gazConstant * temperature) / (((Masse * 0.029) / 5.972e+27) * 9.8));

///leaving volume composition til the end




/// physical charcateristics
let randomMeanRadius = diameter / 2;
let randomEquatorialRadius = (diameter / 2) - Math.floor(Math.random() * 300);
let randomPolarRadius = (diameter / 2) + Math.floor(Math.random() * 300);
let randomFlattening = (randomPolarRadius - randomEquatorialRadius) / randomPolarRadius;

if(randomFlattening < 0){
  randomFlattening *= -1; 
} /// since we have random polar and equatorial values

let randomSurfaceArea = Math.PI * Math.pow(diameter, 2);
let randomVolume = (Math.PI / 6) * Math.pow(diameter, 3);
let randomDensity = Masse / (randomVolume * 10e+3);

/// fun-fact: white dwarves have a surface gravity of 9.8 * 10e5
let randomSurfaceGravity = 9.8 + " m/s²";

/// The polar moment of inertia is traditionally determined by combining measurements of spin quantities (spin precession rate and/or obliquity) with gravity quantities (coefficients of a spherical harmonic representation of the gravity field). These geodetic data usually require an orbiting spacecraft to collect.

///Darwin -Radeau Equation:
let randomMomentOfInertiaFactor = 0.66 * (1 - (0.4 * (Math.sqrt(1 - (((5 * geodynamicalConstant) / (2 * randomFlattening)) - 2)))));
let randomEscapeVelocity = Math.sqrt((2 * universalGravityConstant * Masse) / (diameter / 2));
let randomAxialTilt = Math.random() * 50;


let randomNorthPoleRightAscension = (Math.random() * 286) + 40;
let randomNorthPoleDeclination = (Math.random() * 90) - 15;
let randomAlbedo = (Math.random()).toFixed(3);

/// extra vars for functions;
let planetFirstPart;
let planetSecondPart = [];

let PlanetSS2;
let PlanetSS1 = ["Carbon", "Desert", "Gas", "Hycean", "Ice", "Iron", "Lava", "Ocean", "Puffy", "Silicate", "Terrestrial", "Nuclear"];
let PlanetSS1RandomValue = Math.floor(Math.random() * PlanetSS1.length);
/*["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium"]; */
let moonCountChance = (Math.round(Math.random() * 2)) + 1;


/// html vars

var htmlPlanetName = document.getElementById("htmlPlanetName");
var htmlCommonName = document.getElementById("htmlCommonName");
var htmlId = document.getElementById("htmlId");
var htmlName = document.getElementById("htmlName");
var htmlSize = document.getElementById("htmlSize");
var htmlOrbitalPeriod = document.getElementById("htmlOrbitalPeriod");
var htmlSubstanceState = document.getElementById("htmlSubstanceState");
var htmlLifeStatus = document.getElementById("htmlLifeStatus");
var htmlMoonStatus = document.getElementById("htmlMoonStatus");
var htmlMoonCount = document.getElementById("htmlMoonCount");
var htmlHabitability = document.getElementById("htmlHabitability");
var htmlNatureType = document.getElementById("htmlNatureType");

let htmlApocenter = document.getElementById("htmlApocenter");
let htmlPericenter= document.getElementById("htmlPericenter");
let htmlSemiMajorAxis = document.getElementById("htmlSemiMajorAxis");
let htmlEccentricity = document.getElementById("htmlEccentricity");
let htmlOrbitalPeriodAdvanced = document.getElementById("htmlOrbitalPeriodAdvanced");
let htmlOrbitalSpeed = document.getElementById("htmlOrbitalSpeed");
let htmlInclination = document.getElementById("htmlInclination");
let htmlLongtitudeOfAscendingNode = document.getElementById("htmlLongtitudeOfAscendingNode");
let htmlTimePerihilion = document.getElementById("htmlTimePerihilion");

let htmlSurfacePressure = document.getElementById("htmlSurfacePressure");
let htmlMeanRadius = document.getElementById("htmlMeanRadius");
let htmlEquatorialRadius = document.getElementById("htmlEquatorialRadius");
let htmlPolarRadius = document.getElementById("htmlPolarRadius");
let htmlFlattening = document.getElementById("htmlFlattening");
let htmlSurfaceArea = document.getElementById("htmlSurfaceArea");
let htmlVolume = document.getElementById("htmlVolume");
let htmlDensity = document.getElementById("htmlDensity");
let htmlMomentOfInertiaFactor = document.getElementById("htmlMomentOfInertiaFactor");
let htmlEscapeVelocity = document.getElementById("htmlEscapeVelocity");
let htmlNorthPoleRightAscension = document.getElementById("htmlNorthPoleRightAscension");
let htmlNorthPoleDeclination = document.getElementById("htmlNorthPoleDeclination");
let htmlAlbedo = document.getElementById("htmlAlbedo");
let htmlSurfaceTemperature = document.getElementById("htmlSurfaceTemperature");
let htmlAngularDiameter = document.getElementById("htmlAngularDiameter");

let canvas = document.getElementById("canvas");


/// planet Name: 

function PlanetName() {

  /*  
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
  switch (true) {
    case chance >= 80:
      planetFirstPart = Consonant[d] + Vowels[a] + Consonant[e];
      break;

    case 80 > chance && chance >= 50:
      planetFirstPart = Consonant[d] + Vowels[a] + Vowels[b];
      break;

    case 50 > chance && chance >= 20:
      planetFirstPart = Vowels[a] + Vowels[b] + Consonant[d];
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

  switch (true) {
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
      break;

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

  randomCommonName = Planets[Math.floor(Math.random() * Planets.length)] + " " + Planets[Math.floor(Math.random() * Planets.length)] + " " + Consonant[e] + "-" + Numbers[i];

  htmlCommonName.innerHTML = randomCommonName;
  htmlPlanetName.innerHTML = randomPlanetName;
  htmlName.innerHTML = randomPlanetName;



}

/// ID generation

function PlanetID() {

  /// this is gonna work for now, we might need to use UUID but who knows

  randomPlanetId = Date.now() * (Math.floor(Math.random() * 101) + 1);
  htmlId.innerHTML = randomPlanetId;
}

function PlanetSize() {
  /// xxs, xs, s, m, l, xl, xxl, xxxl

  switch (true) {
    case diameter <= 140000 && diameter > 120000:
      randomPlanetSize = "Giant"
      break;

    case diameter <= 120000 && diameter > 50000:
      randomPlanetSize = "Planetar"
      break;

    case diameter <= 50000 && diameter > 5000:
      randomPlanetSize = "Mini-Neptune"
      break;

    case diameter <= 5000 && diameter > 1000:
      randomPlanetSize = "Super-Earth"
      break;

    case diameter <= 1000 && diameter >= 600:
      randomPlanetSize = "Dwarf"
      break;

    default:
      break;
  }

  htmlSize.innerHTML = randomPlanetSize;

}


function PlanetOrbitalPeriod() {
  htmlOrbitalPeriod.innerHTML = randomOrbitalPeriod.toFixed(0) + " Earth Years";
}

function PlanetSubstanceState() {
  switch (true) {
    case diameter >= 120000 && diameter <= 1400000:
      PlanetSS2 = "Giant"
      break;

    case diameter >= 90000 && diameter < 120000:
      PlanetSS2 = "ProtoGiant"
      break;

    case diameter >= 12000 && diameter < 90000:
      PlanetSS2 = "Planet"
      break;

    case diameter >= 6000 && diameter < 12000:
      PlanetSS2 = "Dwarf"
      break;

    default:
      break;
  }

  randomSubstanceState = PlanetSS1[PlanetSS1RandomValue] + " " + PlanetSS2;

  htmlSubstanceState.innerHTML = randomSubstanceState;

}

function PlanetLifeStatus() {
  /* it returns either dead or alive randomly, coin flip = 50/50 */

  let coinFlip = Math.random();
  if (coinFlip < 0.5) {
    randomLifeStatus = false;

  } else {
    randomLifeStatus = true;
  }
  htmlLifeStatus.innerHTML = randomLifeStatus;
}


function PlanetMoonStatus() {

  let coinFlip = Math.random();
  if (coinFlip < 0.5) {
    randomMoonStatus = true;

  } else {
    randomMoonStatus = false;
  }

  htmlMoonStatus.innerHTML = randomMoonStatus;
}

function PlanetMoonCount() {
  if (randomMoonStatus) {
    randomMoonCount = moonCountChance;
  } else {
    randomMoonCount = "-----"
  }

  htmlMoonCount.innerHTML = randomMoonCount;
}

function PlanetHabitability() {
  if (randomLifeStatus) {
    if (PlanetSS1[PlanetSS1RandomValue] == "Terrestrial" || PlanetSS1[PlanetSS1RandomValue] == "Silicate") {
      randomHabitability = "Suited for Human Life";
    } else {
      randomHabitability = "Not Suited for Human Life";
    }
  }
  else {
    randomHabitability = "Unhabitable";
  }
  htmlHabitability.innerHTML = randomHabitability;
}

/// Biome Typer according to the planet type;
/// let PlanetSS1 = ["Chthonian", "Carbon", "Desert", "Gas", "Hycean", "Ice", "Iron", "Lava", "Ocean", "Puffy", "Silicate", "Terrestrial", "Nuclear"]; /// reference

function PlanetNatureType() {
  switch (true) {
    case PlanetSS1[PlanetSS1RandomValue] == "Carbon":
      planetNatureType = ["Mountainous Terrain", "Volcanic surface", "Broken Rocky Surface", "Hollow Planet"]
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Desert":
      planetNatureType = ["Dry Deserts", "Semi-Arid deserts", "Coastal Deserts", "Cold Deserts"]
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Gas" || PlanetSS1[PlanetSS1RandomValue] == "Puffy":
      planetNatureType = ["Hydrogene air", "Helium Air"]
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Hycean" || PlanetSS1[PlanetSS1RandomValue] == "Ocean":
      planetNatureType = ["Ocean Floor", "Tsunami Waves", "Deep Sink Holes"]
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Ice":
      planetNatureType = ["Ice Sheets", "Glaciers", "Oceanic Ice", "Ice Shelves", "Sea-Ice", "Snow Fields", "Tundra Biome", "Taiga Forests"];
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Iron" || PlanetSS1[PlanetSS1RandomValue] == "Lava":
      planetNatureType = ["Molten Lakes", "Molten Crust", "SuperHeated Crust", "Volcanic Ash Clouds"]
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Silicate" || PlanetSS1[PlanetSS1RandomValue] == "Terrestrial":
      planetNatureType = ["Tropical rainforest", "Tropical seasonal rainforest", "deciduous", "semideciduous", "Temperate giant rainforest", "Montane rainforest", "Temperate deciduous forest", "Temperate evergreen forest", "needleleaf", "sclerophyll", "Subarctic-subalpine needle-leaved forests (taiga)", "Elfin woodland", "Thorn forests and woodlands", "Thorn scrub", "Temperate woodland", "Temperate shrublands", "deciduous", "heath", "sclerophyll", "subalpine-needleleaf", "subalpine-broadleaf", "Savanna", "Temperate grassland", "Alpine grasslands", "Tundra", "Tropical desert", "Warm-temperate desert", "Cool temperate desert scrub", "Arctic-alpine desert", "Bog", "Tropical fresh-water swamp forest", "Temperate fresh-water swamp forest", "Mangrove swamp", "Salt marsh", "Wetland"];
      break;
    
      case PlanetSS1[PlanetSS1RandomValue] == "Nuclear":
      planetNatureType = ["Uranium terrain", "Francium Ocean", "Plutonium Mountains", "Radium Mines"]
      break;

    default:
        break;
    }

    randomNatureType = planetNatureType[Math.floor(Math.random() * planetNatureType.length)]
    htmlNatureType.innerHTML = randomNatureType;
  }
  
  
  PlanetName();
  PlanetID();
  PlanetSize();
  PlanetOrbitalPeriod();
  PlanetSubstanceState();
  PlanetLifeStatus();
  PlanetMoonStatus();
  PlanetMoonCount();
  PlanetHabitability();
  PlanetNatureType();
  

/// advanced section

function PlanetAdvanced(){
  htmlApocenter.innerHTML = (randomApocenter / GM).toFixed(3) + " Gm (" + (randomApocenter / Au).toFixed(3) + " Au)";
  htmlPericenter.innerHTML = (randomPericenter / GM).toFixed(3) + " Gm (" + (randomPericenter / Au).toFixed(3) + " Au)";
  htmlSemiMajorAxis.innerHTML = (randomSemiMajorAxis / GM).toFixed(3) + " Gm (" + (randomSemiMajorAxis / Au).toFixed(3) + " Au)";
  htmlEccentricity.innerHTML = randomEccentricity.toFixed(3);
  htmlOrbitalPeriodAdvanced.innerHTML = randomOrbitalPeriod.toFixed(3) + " Earth Years";
  htmlOrbitalSpeed.innerHTML = randomOrbitalSpeed.toFixed(3) + " m/s"
  htmlMeanAngularMotion.innerHTML = randomMeanAngularMotion.toFixed(3) + " °";
  htmlInclination.innerHTML = randomInclination.toFixed(2) + " °";
  htmlLongtitudeOfAscendingNode.innerHTML = randomLongtitudeOfAscendingNode.toFixed(2) + " °";
  htmlTimePerihilion.innerHTML = randomTimePerihilion;
  htmlSurfacePressure.innerHTML = randomSurfacePressure + " KPa";
  htmlScaleHeight.innerHTML = (randomScaleHeight / 1000).toFixed(2) + " Km";
  htmlMeanRadius.innerHTML = randomMeanRadius + " ± " + (Math.floor(Math.random() * 20) + 10) + " Km";
  htmlEquatorialRadius.innerHTML = randomEquatorialRadius + " ± " + (Math.floor(Math.random() * 20) + 10) + " Km";
  htmlPolarRadius.innerHTML = randomPolarRadius + " ± " + (Math.floor(Math.random() * 20) + 10 )+ " Km";
  htmlFlattening.innerHTML = randomFlattening.toFixed(3) + " ± " + (Math.random() + 0.0005).toFixed(3);
  htmlSurfaceArea.innerHTML = randomSurfaceArea.toExponential(2) + " Km²";
  htmlVolume.innerHTML = randomVolume.toExponential(2) + " Km³";
  htmlMasse.innerHTML = Masse.toExponential(2) + " Kg";
  htmlDensity.innerHTML = randomDensity.toExponential(2) + " Kg/m³";
  htmlSurfaceGravity.innerHTML = randomSurfaceGravity;
  htmlMomentOfInertiaFactor.innerHTML = randomMomentOfInertiaFactor.toFixed(3);
  htmlEscapeVelocity.innerHTML = randomEscapeVelocity.toExponential(3) + " Km";
  htmlAxialTilt.innerHTML = randomAxialTilt.toFixed(2) + " °"
  htmlNorthPoleRightAscension.innerHTML = randomNorthPoleRightAscension.toFixed(2) + " °";
  htmlNorthPoleDeclination.innerHTML = randomNorthPoleDeclination.toFixed(2) + " °";
  htmlAlbedo.innerHTML = randomAlbedo + " °"
  htmlSurfaceTemperature.innerHTML = temperature + " K";
  htmlAngularDiameter.innerHTML = "+100 °";
}


PlanetAdvanced();




/// three 


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.innerWidth / canvas.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvas.innerWidth, canvas.innerHeight);
canvas.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();