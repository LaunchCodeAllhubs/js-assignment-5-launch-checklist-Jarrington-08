// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput.length === 0) {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } return "Is a Number";
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        //initialize variables to check if pilot and copilot are ready
        let pilotValid = false;
        let copilotValid = false;
        let fuelLevelValid = false;
        let cargoLevelValid = false;

        // Check if pilot form data is valid
        if (validateInput(pilot) === "Empty") {
            alert("All fields are required!");
        } else if (validateInput(pilot) === "Is a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            pilotValid = true;
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        }

        // //Check if co-pilot form data is valid
        if (validateInput(copilot) === "Empty") {
            alert("All fields are required!");
        } else if (validateInput(copilot) === "Is a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            copilotValid = true;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }

        // //check if fuel level form data is valid
        if (validateInput(fuelLevel) === "Empty") {
            alert("All fields are required!");
        } else if (validateInput(fuelLevel) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            fuelLevelValid = true;
        }

        // //check if cargo mass form data is valid
        if (validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
            // prevenetDefault();
        } else if (validateInput(cargoLevel) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            cargoLevelValid = true;
        }
        
        //check if fuel level and cargo level meet requirements
        if (pilotValid && copilotValid && fuelLevelValid && cargoLevelValid) {
            if (Number(fuelLevel) >= 10000 && Number(cargoLevel) < 10000) {
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("launchStatus").style.color = "#419F6A";
            } 
            if (Number(fuelLevel) < 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
            } 
            if (Number(cargoLevel) > 10000) {
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "#C7254E";
            }
            list.style.visibility = "visible";
        }
            
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = (await fetch("https://handlers.education.launchcode.org/static/planets.json")).json();
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * (planets.length));
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
