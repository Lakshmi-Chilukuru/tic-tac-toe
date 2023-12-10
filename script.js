let boxes=document.querySelectorAll(".boxes");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new_game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,5],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true
        }
        box.disabled=true;
        count++;
/*final step for draw count */
        let isWinner=checkWinner();
        if (count===9 && !isWinner){
            gameDraw();
        }
    })
})
const gameDraw =()=>{
    msg.innerText="Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
const checkWinner=()=>{
    for(let pattern of winPattern){
         let pos1Val=boxes[pattern[0]].innerText;
         let pos2Val=boxes[pattern[1]].innerText;
         let pos3Val=boxes[pattern[2]].innerText;  
         
         if(pos1Val!="" && pos2Val!= "" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val)
                
            }
         }
    }
}
const showWinner= (winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)



