let user;
let pass;
let bool=0;

function validate(){
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    notNull(user, pass);
    name(user);
    if (bool==0){
        alert("Bienvenido " + user);
    }
    if (bool!=0){
        user=null;
        pass=null;
    }
}

function notNull(user, pass){
    if(user == "" || pass == ""){
        alert("Uno o ambos campos estan vacios, vuelva a intentar");
        document.location.reload();
        bool=1;
    }
}

function name(user){
    //validar user. tiene que tener un @
    let k=0;
    for(let i = 0; i<=user.length; i++){
        if ("@"==user.charAt(i)){
            k++;
        }
    }
    if (k!=1){
        alert("El usuario debe poseer un @");
        document.location.reload();
        bool=1;
    }
}