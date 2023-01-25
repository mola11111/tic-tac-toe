var cream = "O"
var tic = [0,0,0,0,0,0,0,0,0];
function test(par){
    // console.log(par);
    // console.log(cream);
    

    a = document.getElementById(String(par));
    if(tic[par]==0)
    {
        cream =-(cream=="O") ? "X" : "O";
        a.innerText = cream;
        tic[par] = cream;
    }

    if(tic.indexOf(0) == -1){
        console.log("end");
    }
}