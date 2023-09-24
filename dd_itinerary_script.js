
// tells the DOM to run the interior code when the page has loaded
window.addEventListener("DOMContentLoaded", function(e) {

// event variables

    // form submit button
    const submit = document.getElementById("submit");

    // form inputs of data-interests type
    const interestSelection = document.querySelectorAll("input[data-interest]");

    // array for use in function below 
    const interestArray = [];

    // stops number input
    const stops = document.querySelector("input[data-stops]");

    // prices radio buttons input
    const prices = document.querySelectorAll("input[data-cost]");

    // blank data object for user preferences
    const preferences = {
    userLocation: "",
    stops: "",
    cost: ""
    };

// event listeners

    // loops through each interest 
    interestSelection.forEach(function(input){

        // click-event listener for interests
        input.addEventListener("click", function(e){

            // container for a clicked checkbox
            const selection = e.currentTarget;

            // creates variable containers to retrieve clicked checkbox's data-interest value and id value
            const interest = selection.getAttribute("data-interest");
            const interestId = selection.getAttribute("id");

            if (interestArray.includes(interestId)){
                const cut = interestArray.indexOf(interestId);
                interestArray.splice(cut, 1);
                console.log(interestArray);
                return interestArray;
            } else {
                interestArray.push(interestId);
                console.log(interestArray);
                return interestArray;
            };
            return interestArray;
        });
    });

    prices.forEach(function(radio){
        radio.addEventListener("click", function(e){
            preferences.cost = e.currentTarget.value;
            });
        });

    // submit button even listener
    submit.addEventListener("click", function(e){
        
        // adds user selected values for stops and location to preferences array 
        // preferences[stops] = stops.value;
        preferences.stops = document.querySelector("input[data-stops]").value;
        preferences.userLocation = document.querySelector("input[data-location]").value;
        
        localStorage.setItem("preferences", preferences);

        // on click, local storage saves returned array from above function
        localStorage.setItem("interests", interestArray);
        
        // creates variable container that change URLs on submit
        const goToProfile = window.location.href.replace("dd_make_itinerary.html", "dd_user_profile.html");

        // changes window to profile URL
        window.location.href = goToProfile;
    });

});
