const in1 = document.getElementById("In1");
const in2 = document.getElementById("In2");
const in3 = document.getElementById("ClInput");
const settings = JSON.parse(localStorage.getItem("settings"));

if(settings){
    in1 = settings[1];
    in2 = settings[2];
    in3 = settings[3];
}

form.addEventListener("submit" ,function (event){
    event.preventDefault();
    save();
} )

function save(){
    const settings = [in1,in2,in3];
    localStorage.setItem("settings",JSON.stringify(settings));
}