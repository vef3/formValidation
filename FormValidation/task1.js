const form = document.getElementById('main-form');
const fname = document.getElementById("Fname");
const sname = document.getElementById("Sname");
const email = document.getElementById("email");
const pass = document.getElementById("password");

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    checkInputs();
})

function checkInputs(){
   const fnamevalue = fname.value.trim()
   const snamevalue = sname.value.trim()
   const emailvalue =  email.value.trim()
   const passvalue =  pass.value.trim()

   if(fnamevalue == ''){
    //show error and add error class
    setError(fname, 'First name cannot be blank');
} else{
    // addd succes class
    setSuccess(fname);
}

    if(snamevalue == ''){
    //show error and add error class
    setError(sname, 'second name cannot be blank');
} else{
    // addd succes class
    setSuccess(sname);
}

if(emailvalue == ''){
    //show error and add error class
    setError(email, 'email cannot be blank');
} else if(!IsEmail(emailvalue)){
    setError(email, 'looks like this is not an Email');
} else{
    // addd succes class
    setSuccess(email);
}

if(passvalue == ''){
    //show error and add error class
    setError(pass, 'Password cannot be blank');
} else{
    // addd succes class
    setSuccess(pass);
}
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //add error message insdie small
    small.innerText = message;
    // adding an error class
    formControl.className = 'form-control error';

}

function setSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //add error message insdie small
    // adding an error class
    formControl.className = 'form-control success';

}

function IsEmail(emailvalue){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{Z,}))$/.test(email);
}