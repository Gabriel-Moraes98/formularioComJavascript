const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const textArea = document.getElementById("textArea");
const icon = document.getElementById("icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const telValue = tel.value;
    const textAreaValue = textArea.value;

    if(usernameValue === ""){
        Error(username, "campo obrigatório");
    }else if(usernameValue.length < 4){
        Error(username, "Digite o nome completo");
    }else if(!checkUsername(usernameValue)){
        Error(username, "este campo não aceita números ou caracteres especias")
    }else{
        Success(username);
    }

    if(emailValue === ''){
        Error(email, "campo obrigatório");
    }else{
        Success(email);
    }

    if (telValue === '') {
        Error(tel, "campo obrigatório");
    }else if(telValue.length < 8){
        Error(tel, "Preencha com o número completo");
    }else if(!checkTel(telValue)){
        Error(tel, "este campo não aceita letras");
    }else{
        Success(tel);
    }
    
    if (textAreaValue === '') {
        Error(textArea,"campo obrigatório")
    }else{
        Success(textArea);
    }

    const formControls = form.querySelectorAll(".form-control")

    const icon = document.getElementById("icon");
      
       const formIsValid = [... formControls].every((formControl) => {
            return (formControl.className === "form-control success")
          });
        
          if(formIsValid){
            icon.className = "icon visible"
          }
}

function Error(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error"
}

function Success(input){
    formControl = input.parentElement;
    formControl.className = "form-control success"
}

function checkUsername(username){
    return /^[A-Za-z]+$/.test(username);
}

function checkTel(tel){
    return /^[0-9]+$/.test(tel);
}