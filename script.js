var turn = 1
var tic = [0,0,0,0,0,0,0,0,0];
const winCase = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var game = true;


function test(par){
    if(!game) return;
    if(tic[par] != 0){
        return;
    }
    if(turn ==1){
        document.getElementById("turn_X").style.opacity = 1;
        document.getElementById("turn_O").style.opacity = 0.2;
    }
    else if(turn == 2){
        document.getElementById("turn_X").style.opacity = 0.2;
        document.getElementById("turn_O").style.opacity = 1;
    }
    a = document.getElementById(String(par));
    tic[par] = turn;
    if(tic[par] == 1){
        a.innerText = "O"; turn = 2;
    }
    else{
        a.innerText = "X"; turn = 1;
    }

    for(i of winCase){
        a = getResult(i);
        if(a==1){
            console.log(1); game = false;
            document.getElementById("turn_X").style.color = "red";
            document.getElementById("turn_O").style.color = "green";
            document.getElementById("turn_O").style.opacity = 1;
            document.getElementById("turn_X").style.opacity = 1;
            return;
        }
        else if(a==2){
            console.log(2); game = false;
            document.getElementById("turn_O").style.color = "red";
            document.getElementById("turn_X").style.color = "green";
            document.getElementById("turn_O").style.opacity = 1;
            document.getElementById("turn_X").style.opacity = 1;
            return;
        }
        else if(tic.indexOf(0) == -1){
            console.log("draw"); game = false; return;
        }
    }

}

function getResult(gameCase){
    if(
        tic[gameCase[0]] == 1 && tic[gameCase[1]] == 1 && tic[gameCase[2]] == 1
    ){
        return 1;
    }
    else if(
        tic[gameCase[0]] == 2 && tic[gameCase[1]] == 2 && tic[gameCase[2]] == 2
    ){
        return 2;
    }
    else{
        return 0;
    }
}

function gameInit(){
    tic = [0,0,0,0,0,0,0,0,0];
    game = true;
    document.getElementsByClassName("box").innerText = 0;
}