let myErrMsg = document.getElementById("myErrMsg");
let userName = document.getElementById("exampleInputUser1");
let userPass = document.getElementById("exampleInputPassword1");
// Making local storage if none

if(!(localStorage.getItem("tech"))){
    let arr = [];
    localStorage.setItem("tech",JSON.stringify(arr));
  }else{
    console.log("Local storage already found")
}

// Encryption & Decryption
var crypt = {
    secret : "CIPHERKEY For The best team in ITI",

    encrypt : clear => {
      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      return cipher.toString();
    },

    decrypt : cipher => {
      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      return decipher.toString(CryptoJS.enc.Utf8);
    }
  };

let getData = JSON.parse(localStorage.getItem("tech"));
console.log(typeof(getData));
// Login 

let myBtn = document.getElementById("mylogin");

myBtn.addEventListener("click", ()=>{

    if(getData === {}){
        console.log("empty");
    }else{
        let savedUser = getData.name;
        let dePass = crypt.decrypt(getData.password);
        if(userName.value != savedUser || userPass.value != dePass)
        {
            myErrMsg.classList.remove("hidder");
        }
        else
        {
            // make cookies & session
            console.log("Loged in");
        }
    }

});


///////////////////// Listner on input tags --> when input clicked reset its warning ////////////////////
let myInputTags = document.getElementsByTagName("input");

myInputTags[0].addEventListener("click",()=>{
    myErrMsg.classList.add("hidder");
});

myInputTags[1].addEventListener("click",()=>{
    myErrMsg.classList.add("hidder");
});