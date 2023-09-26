
function displayInterests(userInts){

    // separates interests
    const interestsArr = userInts.split(',');

    // finds div for interests list
    const interestsDiv = document.querySelector("[data-interests]");

    // creates list for above div, sets class attribute, and appends to div
    const interestsList = document.createElement("ul");
    interestsList.setAttribute("class", "userInterests");
    interestsDiv.appendChild(interestsList);

    // iterates through interests and adds each to list
    for ( let i = 0; i < interestsArr.length; i++ ) {
            const showItem = document.createElement("li");
            showItem.textContent = interestsArr[i];
            interestsList.appendChild(showItem);
    }

}

window.addEventListener("DOMContentLoaded", function(load){

    // interests, preferences retrieval
    const userInterests = localStorage.getItem("interests");
    const userPreferences = localStorage.getItem("preferences");
    console.log(userInterests, typeof userInterests)
    console.log(userPreferences, typeof userPreferences);

    displayInterests(userInterests);

    const parsedPrefs = JSON.parse(userPreferences);
    console.log(parsedPrefs);


    const prefsDiv = document.querySelector("[data-preferences]");
    const prefsList = document.createElement("ul");
    prefsList.setAttribute("class", "userPreferences");
    prefsDiv.appendChild(prefsList);

    const costPref = document.createElement("li");
    costPref.textContent = parsedPrefs.cost;

    const locationPref = document.createElement("li");
    locationPref.textContent = parsedPrefs["userLocation"];

    const stopsPref = document.createElement("li");
    stopsPref.textContent = parsedPrefs["stops"];

    prefsList.appendChild(locationPref);
    prefsList.appendChild(costPref);
    prefsList.appendChild(stopsPref);

})