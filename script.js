var cream = "O"
function test(par){
    // console.log(par);
    // console.log(cream);
    

    a = document.getElementById(String(par));
    if(true)
    {
        a.innerText = cream;

        if(cream == "O"){
            cream = "X";
        }
        else{
            cream = "O";
        }
    }
    else{
        return;
    }
}