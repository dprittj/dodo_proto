window.addEventListener("DOMContentLoaded", function(load){

    const ddUser = document.getElementById("username");

    const ddPass = document.getElementById("pass");
    
    const ddData = {
        dodoUser: "",
        dodoPass: ""
    };
    
    const submit = document.getElementById("submit");

    const login = document.getElementById("login");

    const or = document.getElementById("or");

    const register = document.getElementById("register");

    const cont = document.getElementById("continue");

    login.addEventListener("mouseenter", function(e){

        login.setAttribute("class", "loginHeard");
        or.setAttribute("class", "heard");
        register.setAttribute("class", "heard");
        cont.setAttribute("class", "heard");

        const bottom = document.querySelector('.frontmiddle');
        bottom.setAttribute("class", "frontmiddleheard");

        ddUser.focus({focusVisibility: true}).preventDefault();

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


