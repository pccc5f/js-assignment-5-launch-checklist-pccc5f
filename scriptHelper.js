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
    if(typeof testInput === "undefined") {
        return "Empty"
       } else if(isNaN(testInput) === false) {
        return "Is a Number"
       } else if(isNaN(testInput) === true) {
        return "Not a Number"
       }
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let button = document.getElementbyID("formSubmit")
    let pilotName = document.getElementbyID("pilotName")
    let copilotName = document.getElementbyID("copilotName")
    let fuelLevel = document.getElementbyID("fuelLevel")
    let cargoMass = document.getElementbyID("cargoMass")
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        preventDefault();
    } else if (pilotName.value !== "Not a Number" || copilotName.value !== "Not a Number" || fuelLevel.value !== "Is a Number" || cargoMass.value !== "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        preventDefault();
    } else if (Number(validateInput(fuelLevel)) < 10000 && Number(validateInput(cargoMass))) {
        div.innerHTML +=`
        <div id="launchStatusCheck">        
            <h2 style="color:red;">Shuttle Not Ready for Launch </h2>
            <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotName.value} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
                </ol>
        </div>`
    } else if (Number(validateInput(fuelLevel)) < 10000) {
        div.innerHTML +=`
        <div id="launchStatusCheck">        
            <h2 style="color:red;">Shuttle Not Ready for Launch </h2>
            <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotName.value} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
        </div>`
   } else if (Number(validateInput(cargoMass)) >10000) {
        div.innerHTML +=`
        <div id="launchStatusCheck">           
            <h2 style="color:red;">Shuttle Not Ready for Launch </h2>
            <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotName.value} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
                </ol>
        </div>`
   } else {
    div.innerHTML +=`
        <div id="launchStatusCheck">           
            <h2 style="color:green;">Shuttle Ready for Launch </h2>
            <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotName.value} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
        </div>`
   }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
