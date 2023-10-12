window.addEventListener("load", function(e){
    
    const ddData = {
        dodoUser: "",
        dodoPass: ""
    };

    const ddNew = {
        dodoUser: "",
        dodoPass: "",
        dodoEmail: "",
        dodoPhone: "",
        dodoBirth: "",
        dodoCoords: "",
    };

    // data
    const ddUser = document.getElementById("username");
    const ddPass = document.getElementById("pass");
    const ddEmail = document.getElementById("email");
    const ddPhone = document.getElementById("phone");
    const ddBirth = document.getElementById("birth");
    const ddCoords = document.getElementById("coords");

    // buttons
    const submit = document.getElementById("goButton");
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const newUser = document.getElementById("submitRegistration");

    // divs
    const visibleDiv = document.getElementById("visibleDiv");
    const regDiv = document.getElementById("registerDiv");
    const loginDiv = document.getElementById("loginDiv");

    // listeners
    loginButton.addEventListener("click", function(e){
        e.stopPropagation();
        visibleDiv.outerHTML = loginDiv.outerHTML;
    });

    registerButton.addEventListener("click", function(e){
        e.stopPropagation();
        visibleDiv.outerHTML = regDiv.outerHTML;
    });

    submit.addEventListener("click", function(e){
        e.stopPropagation();
        ddData.dodoUser = ddUser.value;
        ddData.dodoPass = ddPass.value;

        const ddLogin = localStorage.setItem("login", JSON.stringify(ddData));
        console.log(ddLogin);

        const trailPage = "dd_make_itinerary.html";
        window.location.replace(trailPage)

    });

    newUser.addEventListener("click", function(e){
        e.stopPropagation();

        ddNew.dodoUser = ddUser.value;
        ddNew.dodoPass = ddPass.value;
        ddNew.dodoEmail = ddEmail.value
        ddNew.dodoPhone = ddPhone.value
        ddNew.dodoBirth = ddBirth.value
        ddNew.dodoCoords = ddCoords.value

        const ddNewUser = localStorage.setItem("login", JSON.stringify(ddNew));
        console.log(ddNewUser);

        const trailPage = "dd_make_itinerary.html";
        window.location.replace(trailPage)

    });

});

