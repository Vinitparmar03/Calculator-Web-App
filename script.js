const buttons = document.querySelectorAll(".calculator .buttons button");

const input = document.querySelector(".calculator .text-area .text-box");

string="";

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        if(button.innerHTML === "="){
            string=eval(string);
            input.value = string;
        }else if(button.innerHTML === "AC"){
            string = "";
            input.value = string;
        }else if(button.innerHTML === "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string+=button.innerHTML;
            input.value=string;
        }
    })
})