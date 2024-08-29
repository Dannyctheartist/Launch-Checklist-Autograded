// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    
    // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
    
   
   
 }
 
 function validateInput(testInput) {
    if (testInput === "") { 
        return "Empty"; 
    } else if (isNaN(testInput)) { 
        return "Not a Number"; 
    } else { 
        return "Is a Number"; 
    } 
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //  console.log("Inside formSubmission")
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");


pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;


    if (validateInput(pilot) === "Empty" ||  validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||  validateInput(cargoLevel) === "Empty") { 
       
     alert("All fields are required!"); 
        
      return; 
    }

    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") { alert("Pilot and Co-pilot names must be valid strings."); 
        return; 
    }

    if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") { alert("Fuel Level and Cargo Mass must be valid numbers."); 
        return; 
    }

    //console.log("Validation passed")
    let launchStatus = document.getElementById("launchStatus"); 
    

    
if (fuelLevel < 10000 && cargoLevel > 10000) { 
    list.style.visibility = "visible"; 
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"; 
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"; 
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
     launchStatus.style.color = "red";
     } else if (fuelLevel < 10000) 
    { list.style.visibility = "visible"; 
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"; 
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"; 
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
     launchStatus.style.color = "red";
     } else if (cargoLevel > 10000) { 
    list.style.visibility = "visible"; 
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"; 
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"; 
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
    launchStatus.style.color = "red";
     } else { list.style.visibility = "visible"; 
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"; 
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"; 
    launchStatus.innerHTML = "Shuttle is Ready for Launch"; 
    launchStatus.style.color = "green"; 
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     .then( function(response) {
        return response.json();    
    })
 .then(function(data) {
    return data;
 })
 .catch(function(error) {
    console.log("Error fetching planets:", error);
 });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
        return planets[randomIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;