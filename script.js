var status = "O"

function test(par){
    // console.log(par);
    // console.log(status);
    

    a = document.getElementById(String(par));
    if(true)
    {
        a.innerText = status;

        if(status == "O"){
            status = "X";
        }
        else{
            status = "O";
        }
    }
    else{
        return;
    }
}