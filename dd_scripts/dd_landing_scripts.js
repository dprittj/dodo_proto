window.addEventListener("DOMContentLoaded", function(load){

    const ddUser = document.getElementById("username");

    const ddPass = document.getElementById("pass");
    
    const ddData = {
        dodoUser: "",
        dodoPass: ""
    };
    
    const submit = document.getElementById("submit");

    submit.addEventListener("click", function(e){
        ddData.dodoUser = ddUser.value;
        ddData.dodoPass = ddPass.value;

        const ddLogin = localStorage.setItem("login", JSON.stringify(ddData));
        console.log(ddData);

        const trailPage = window.location.href.replace("dd_landing_page", "dd_create_user.html");

        window.location.href = trailPage;

    });

});


