let win_sound = new Audio('tadaa-47995.mp3');
let loss_sound = new Audio('archivo.mp3');
    let img1 = document.getElementById("win-emoji");
    let img2 = document.getElementById("loss-emoji");
    let btn = document.getElementById("btn");

 let num= prompt("Enter the no from 1 to 5 only");
 let randomNum = Math.floor(Math.random()*5);
 console.log(randomNum);
if(num >5){
    alert("Please enter the number between 1 to 5 only");
 }
 else if(num.length==0 ||num ===' '|| num==null){
   alert("Please Enter the number");
 }
 else if(num == randomNum){
 alert("YOU WON\n The number matched");
 }
 else if(isNaN( num )){
   alert("Invalid Input.! Please enter correct input")
 }
 else{
    alert("YOU LOSS\n The no. was "+ randomNum);
 }



 function emoji(){
    if(num == randomNum){
        img1.style.display='block';
        btn.style.display = 'block';
        win_sound.play();
    }
    else{
        img2.style.display='block';
        btn.style.display = 'block';
        loss_sound.play();
    }
 }
 emoji();
 btn.addEventListener("click",()=>{
   document.location.reload();
 })
