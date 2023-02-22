let nameRegex = /^[A-Z-a-z]*$/; // Letters and hyphen - only
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  // :")
let passRegex = /[^\s]{8,}$/;   // atleast 8 digits


let registerbtn = document.getElementById("myregisterbtn");
// Checking phase

registerbtn.addEventListener("click",()=>{
    let usrname = document.getElementById("UsernameInput");
    let usremail = document.getElementById("userEmail");
    let pass = document.getElementById("password1");
    let pass2 = document.getElementById("password2");

    let userNameCheck = nameRegex.test(usrname.value);
    let emailCheck = emailRegex.test(usremail.value);
    let passCheck = passRegex.test(pass.value);

    if(!userNameCheck || usrname.value == ""){
        let usrNormal = document.getElementById("usrNormal");
        let usrErr = document.getElementById("usrErr");
    
        usrNormal.classList.add("hidder");
        usrErr.classList.remove("hidder")
    }

    if(!emailCheck || usremail == ""){
        let emailNormal = document.getElementById("emailNormal");
        let emailErr = document.getElementById("emailErr");
    
        emailNormal.classList.add("hidder")
        emailErr.classList.remove("hidder");
    }

    if(!passCheck){
        let passNormal = document.getElementById("passNormal");
        let passErr = document.getElementById("passErr");
    
        passNormal.classList.add("hidder");
        passErr.classList.remove("hidder");

        pass.value = "";
    }
    
    if(pass2.value != pass.value){
        let rePassNormal = document.getElementById("rePassNormal");
        let rePassErr = document.getElementById("rePassErr");

        rePassNormal.classList.add("hidder");
        rePassErr.classList.remove("hidder");

        pass2.value = "";
    }
})

///////////////////// Listner on input tags --> when input clicked reset its warning ////////////////////
let myInputTags = document.getElementsByTagName("input");

myInputTags[0].addEventListener("click",()=>{
    let usrNormal = document.getElementById("usrNormal");
    let usrErr = document.getElementById("usrErr");

    usrErr.classList.add("hidder")
    usrNormal.classList.remove("hidder");
});

myInputTags[1].addEventListener("click",()=>{
    let emailNormal = document.getElementById("emailNormal");
    let emailErr = document.getElementById("emailErr");

    emailNormal.classList.remove("hidder")
    emailErr.classList.add("hidder");
});

myInputTags[2].addEventListener("click",()=>{
    let passNormal = document.getElementById("passNormal");
    let passErr = document.getElementById("passErr");

    passNormal.classList.remove("hidder");
    passErr.classList.add("hidder");
});

myInputTags[3].addEventListener("click",()=>{
    let rePassNormal = document.getElementById("rePassNormal");
    let rePassErr = document.getElementById("rePassErr");
    rePassNormal.classList.remove("hidder");
    rePassErr.classList.add("hidder");
});