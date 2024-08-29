// Write your JavaScript code here!

//const { myFetch, pickPlanet } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

const form = document.querySelector("form");

const submitButton = document.getElementById("formSubmit");

const list = document.getElementById("faultyItems");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();    //Prevent the form submitting
    

const pilotName = document.querySelector("input[name=pilotName]").value;

const copilotName = document.querySelector("input[name=copilotName]").value;

const fuelLevel = document.querySelector("input[name=fuelLevel]").value;

const cargoMass = document.querySelector("input[name=cargoMass]").value;



formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

})
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        console.log(listedPlanets);

        let selectedPlanet = pickPlanet(listedPlanets);

        console.log(selectedPlanet);

    
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     addDestinationInfo(document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.image
     )
    });
});