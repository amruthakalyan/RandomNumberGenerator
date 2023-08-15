
    let img1 = document.getElementById("win-emoji");
    let img2 = document.getElementById("loss-emoji");
    let btn = document.getElementById("btn");
    alert("This is a Random Number Generator Game\n The machine genrates a number Randomly\n If machine generated no. is same as the user input number then you WIN the game\n otherwise if the random number(machine generated no.)is not same as the user input\n Then you will LOOSE the game..");
 let num= prompt("Enter the no from 1 to 10 only");
 let randomNum = Math.floor(Math.random()*10);
 console.log(randomNum);
 
 if(num >10){
    alert("Please enter the number between 1 to 10 only");
 }
 else if(num == randomNum){
 alert("YOU WON\n The number matched");
 }
 
 else{
    alert("YOU LOSS\n The number not matched\n The no. was "+ randomNum);
 }



 function emoji(){
    if(num == randomNum){
        img1.style.display='block';
        btn.style.display = 'block'
    }
    else{
        img2.style.display='block';
        btn.style.display = 'block'
    }
 }
 emoji();
 btn.addEventListener("click",()=>{
   document.location.reload();
 })
