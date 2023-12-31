// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");



window.addEventListener("load", function() {

   document.getElementById("faultyItems").style.visibility = 'hidden';
   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
      //  console.log(listedPlanets);
    }).then(function () {
      //  console.log(listedPlanets);

   // randomly select a planet using pickPlanet function
      const planet = pickPlanet(listedPlanets);
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
   
   // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoLevel = document.querySelector("input[name=cargoMass]");
   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
      event.preventDefault();
      });
   });

   
   // update the mission destination by using planet object info