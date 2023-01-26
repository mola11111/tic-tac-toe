var cream = "O"
var tic = [0,0,0,0,0,0,0,0,0];
var game = true;
function test(par){
    // console.log(par);
    // console.log(cream);
    

    a = document.getElementById(String(par));
    if(game)
    {
        if(tic[par]==0)
        {
            cream =-(cream=="O") ? "X" : "O";
            a.innerText = cream;
            tic[par] = cream;
        }
        else{
            console.log("deadlock")
        }

        if(getfail()==0){
            console.log(("O WIN"));
            game = false;
            
        } 
        else if(getfail()==1){
            console.log(("X WIN"));
            game = false;
        } 

        if(tic.indexOf(0) == -1){
            console.log("end");
            game = false;
        }
    }   
}

function getfail(){
    if(
        tic[3]==tic[4]==tic[5] == 'O' ||
        tic[0]==tic[1]==tic[2] == 'O' ||
        tic[6]==tic[7]==tic[8] == 'O' ||
        tic[0]==tic[3]==tic[6] == 'O' ||
        tic[1]==tic[4]==tic[7] == 'O' ||
        tic[2]==tic[5]==tic[8] == 'O' ||
        tic[0]==tic[4]==tic[8] == 'O' ||
        tic[2]==tic[4]==tic[6] == 'O'
    )
    return 0;
    else if(
        tic[0]==tic[1]==tic[2] == 'X' ||
        tic[3]==tic[4]==tic[5] == 'X' ||
        tic[6]==tic[7]==tic[8] == 'X' ||
        tic[0]==tic[3]==tic[6] == 'X' ||
        tic[1]==tic[4]==tic[7] == 'X' ||
        tic[2]==tic[5]==tic[8] == 'X' ||
        tic[0]==tic[4]==tic[8] == 'X' ||
        tic[2]==tic[4]==tic[6] == 'X'
    )
    return 1;
    else{
        return -1;
    }
}