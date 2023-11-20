
    let img1 = document.getElementById("win-emoji");
    let img2 = document.getElementById("loss-emoji");
    let btn = document.getElementById("btn");
 let num= prompt("Enter the no from 1 to 10 only");
 let randomNum = Math.floor(Math.random()*10);
 console.log(randomNum);
 if(num == ' '){
   prompt("please Enter the number");
 }
 else if(num >10){
    alert("Please enter the number between 1 to 10 only");
 }
 else if(num == randomNum){
 alert("YOU WON\n The number matched");
 }
 
 else{
    alert("YOU LOSS\n The no. was "+ randomNum);
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
