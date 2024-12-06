function displayInput() {
    var cartona = "";

    cartona += `
        <div class=" welcome mx-auto d-flex justify-content-center align-items-center">  
             <p>
            <p> welcome ${localStorage.getItem("loggedin")}</p>

        </p></div>
        
        `
    document.getElementById("welcome-msg").innerHTML = cartona
}

displayInput()