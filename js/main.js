// var emailInput= document.querySelector("#email")
// var passInput=document.querySelector("#password")
// var loginBtn=document.querySelector(".login-btn")
// var signUpBtn=document.querySelector(".signup-btn")
// var signUpName=document.querySelector(".signup-name")
// var signUpEmail=document.querySelector(".signup-email")
// var signUpPass=document.querySelector("signup-btn")

// signUpBtn.addEventListener("click",getValue)



var signUpEmail = document.getElementById("email-sign")
var signUpName = document.getElementById("name-sign")
var signUpPass = document.getElementById("pass-sign")
var loginEmial = document.getElementById("email")
var loginPassword = document.getElementById("pass")
var signupInfoArray = []
var loginInputArray = []
if (localStorage.getItem("all") != null) {
    signupInfoArray = JSON.parse(localStorage.getItem("all"))
}
// console.log(signupInfoArray);
function getValue() {
    if (validEmail() == true) {

        var signUpInfo = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value,
        }
        signupInfoArray.push(signUpInfo)
        console.log(signupInfoArray);
        localStorage.setItem("all", JSON.stringify(signupInfoArray))

    }
    window.location.href = "./index.html"

}
function getValueLogin() {

    for(var i = 0; i < signupInfoArray.length ; i++){
        if(loginEmial.value == signupInfoArray[i].email && loginPassword.value == signupInfoArray[i].password){
            localStorage.setItem("loggedin" , signupInfoArray[i].name)
            location.href = "./login.html"
        }
    }
}
// validEmail()
function validEmail() {
    var regex = /@gmail.com/;

    if (regex.test(signUpEmail.value) == true) {
        // console.log(regex.test("toqa@gmail.com"));
        return true
    }
    else
        return false

}

