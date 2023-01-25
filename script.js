var status = "O"

function test(par){
    console.log(par);
    console.log(status);
    if(status == "O"){
        status = "X";
    }
    else{
        status = "O";
    }

    a = document.getElementById(String(par));
    a.innerHTML = status;
}