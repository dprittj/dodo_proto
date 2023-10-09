window.addEventListener("DOMContentLoaded", function(load){

    const ddUser = document.getElementById("username");

    const ddPass = document.getElementById("pass");
    
    const ddData = {
        dodoUser: "",
        dodoPass: ""
    };
    
    const submit = document.getElementById("goButton");

    const login = document.getElementById("login");

    const or = document.getElementById("or");

    const register = document.getElementById("register");

    const cont = document.getElementById("continue");

    login.addEventListener("click", function(e){

        login.setAttribute("class", "loginHeard");
        or.setAttribute("class", "loginHeard");
        register.setAttribute("class", "loginHeard");
        cont.setAttribute("class", "loginHeard");

        const loginForm = document.getElementById("loginForm");
        loginForm.setAttribute("id", "loginBumperHeard");

    });

    register.addEventListener("click", function(e){

        login.setAttribute("class", "registerHeard");
        or.setAttribute("class", "registerHeard");
        register.setAttribute("class", "registerHeard");
        cont.setAttribute("class", "registerHeard");

        const regForm = document.getElementById("registerForm");
        regForm.setAttribute("id", "registerBumperHeard");

    });

    submit.addEventListener("click", function(e){
        ddData.dodoUser = ddUser.value;
        ddData.dodoPass = ddPass.value;

        const ddLogin = localStorage.setItem("login", JSON.stringify(ddData));
        console.log(ddData);

        const trailPage = window.location.href.replace("dd_landing_page", "dd_create_user.html");

        window.location.href = trailPage;

    });

});


