document.getElementById("contact-form").onsubmit = ()=> {
    clearErrors()
    let isValid = true;
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let linkedIn = document.getElementById("link").value.trim();
    let meet = document.getElementById('meet');
    let mail=document.getElementById('mail');

    if (!fname) {
        isValid = false
        document.getElementById("lerr").style.display = "block"
    }
    if (!lname) {
        isValid = false
        document.getElementById("ferr").style.display = "block"
    }
    if (email && (!email.includes("@") || !email.includes(".")) ) {
        isValid = false
        document.getElementById("eerr").style.display = "block"
    }
    if (linkedIn && !linkedIn.includes("https://linkedin.com/in/")) {
        isValid = false
        document.getElementById("lkerr").style.display = "block"
    }
    if (meet.value === "none") {
        isValid = false
        document.getElementById("merr").style.display = "block"
    }
    if(mail.checked && !email){
                isValid = false
        document.getElementById("emerr").style.display = "block"
    }
    
    return isValid;
}

function clearErrors(){
    let error= document.getElementsByClassName("err");
    for(let i=0; i<clearErrors.length;i++){
        error[i].style.display=="none"
    }
}