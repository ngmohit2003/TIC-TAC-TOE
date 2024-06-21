
let boxes=document.querySelectorAll(".box");            // accessing boxes...

let resetBtn=document.querySelector("#reset-btn");      //  accessing buttons...
let newGameBtn=document.querySelector("#new-btn");                                  ////....................1 : B

let msgContainer=document.querySelector(".msg-container");      //this holds the hidden result declaration window
let msg=document.querySelector("#msg");

let turnO=true;   

const winpatterns=[         
    [0,1,2],
    [0,3,6],
    [0,4,8],          
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{         //  adding an event listner to each individual  boxes.....
        console.log("box was clicked...");
        // box.innerText="X";

        if(turnO  /*==true*/ ){//turn of player O...
            box.innerText="O";//print O
            turnO=false; //change truth value
        }
        else{    //turn of player X...                       //   this the action or teh event ...to be peformed...
            box.innerText="X"; //ptint X
            turnO=true;//change truth value
        }
        box.disabled=true;      //  working succesfully...........for preventing repeated turns....from this double click cannot happen

        checkWinner();      // whenever a button is pressed this func. will cjeck if there is any winner/winning condition or not....

    });
});






const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;               //  ...........   2  : d
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;             //  ...........   2  : d
        box.innerText="";
    }
}






const showWinner=(winner)=>{
    msg.innerText=`CONGRATS, winner is: ${winner}`;
    msgContainer.classList.remove("hide");      //  msg-container will be visible after winner is selected
    disableBoxes();
}


const checkWinner=()=>{     //  for checking a winner we have to check all our winning patterns....
    for(let pattern of winpatterns){
        let p1val=boxes[pattern[0]].innerText;
        let p2val=boxes[pattern[1]].innerText;
        let p3val=boxes[pattern[2]].innerText;

        if(p1val!="" && p2val!="" && p3val!=""){
            if(p1val===p2val && p2val===p3val){  //    ||||    # its the actual code (logic) for winning condition......i.e :  if p1, p2, p3 are all not empty and p1, p2, p3 all are having same ele...then only the winner is declared.....
                console.log("winner", p1val);
            //  when we have selected the winner   we have to physically show the winner   sothat  we need a showWinner function to do so....
                showWinner(p1val);
            };
        };
    };
};




const resetGame=()=>{ 
    turnO=true;         //   for RESET button...
    enableBoxes();          //  winning result window will be hidden again....
    msgContainer.classList.add("hide");
};



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



