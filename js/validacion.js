function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre= document.getElementById("nombre");
const last_name= document.getElementById("apellido");
const mail= document.getElementById("email");
const password1= document.getElementById("password1");
const password2= document.getElementById("password2");
const terminos= document.getElementById("terminos");

let btn= document.getElementById("regBtn");

function required(){
    if ( nombre.value==="" || last_name.value==="" || mail.value==="" || password1.value==="" 
    || password2.value==="" ||  password1.value!=password2.value || password1.value.length<6) {
        showAlertError()
    } else if  (!terminos.checked) {
        showAlertError();
    } else {
        showAlertSuccess()
    }
}

btn.addEventListener("click", required)



