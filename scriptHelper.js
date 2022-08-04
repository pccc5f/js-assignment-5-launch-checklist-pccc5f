// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById('missionTarget');
        div.innerHTML += `
            <div class ='missionTarget'>
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter:${diameter}  </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
            </div>`
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
     list = document.getElementbyID("faultyItems")
     pilot = document.getElementbyID("pilotName")
     copilot = document.getElementbyID("copilotName")
     fuelLevel = document.getElementbyID("fuelLevel")
     cargoLevel = document.getElementbyID("cargoMass")
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
        alert("All fields are required!");
        return;
    } else if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number" || validateInput(fuelLevel.value) !== "Is a Number" || validateInput(cargoLevel.value) !== "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    } else if (Number(validateInput(fuelLevel)) < 10000 && Number(validateInput(cargoLevel)) > 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch.";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass is too great for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        // list.innerHTML =`
        // <div id="launchStatusCheck">        
        //     <h2 style="color:red;">Shuttle Not Ready for Launch </h2>
        //     <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
        //         <ol>
        //             <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
        //             <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} is ready for launch</li>
        //             <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
        //             <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
        //         </ol>
        // </div>`
    } else if (Number(validateInput(fuelLevel)) < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch.";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass is low enough for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        // list.innerHTML +=`
        // <div id="launchStatusCheck">        
        //     <h2 style="color:red;">Shuttle Not Ready for Launch </h2>
        //     <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
        //         <ol>
        //             <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
        //             <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} is ready for launch</li>
        //             <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
        //             <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        //         </ol>
        // </div>`
   } else if (Number(validateInput(cargoLevel)) >10000) {
    list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch.";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass is too great for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        // list.innerHTML +=`
        // <div id="launchStatusCheck">           
        //     <h2 style="color:red;">Shuttle Not Ready for Launch </h2>
        //     <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
        //         <ol>
        //             <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
        //             <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} is ready for launch</li>
        //             <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        //             <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
        //         </ol>
        // </div>`
   } else {
    list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch.";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass low enough for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
    // list.innerHTML +=`
    //     <div id="launchStatusCheck">           
    //         <h2 style="color:green;">Shuttle Ready for Launch </h2>
    //         <div  id="faultyItems" data-testid="faultyItems" style="visibility:visible;">
    //             <ol>
    //                 <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
    //                 <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} is ready for launch</li>
    //                 <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
    //                 <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    //             </ol>
    //     </div>`
   }
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            let destination = document.getElementById('missionTarget');
            destination.innerHTML = addDestinationInfo(json.pickPlanet(json))
        } 
    )})

    return planetsReturned;
};

function pickPlanet(planets) {
    return Math.floor(math.random() * planets.length)
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
