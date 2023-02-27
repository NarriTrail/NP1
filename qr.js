let  genratebtn =document.getElementById("btn")
let container=document.querySelector(".container")
let input1= container.querySelector(".input1")
let input2= container.querySelector(".input2")
let qrimg=container.querySelector(".qr-code img")
let cross=document.getElementById("cross")
// let share=document.getElementsByClassName("share")
let mark=document.getElementById("mark")
genratebtn.addEventListener("click",Loaddata);
function Loaddata(){
    let value1=input1.value;
    let value2=input2.value
    let journey=value1+" to "+value2
   
      if(value1==value2)
      {
        alert("please change the destination")
      }
      else{
        genratebtn.innerHTML="generating qr code...."
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${journey}`
    container.classList.add("active")
    genratebtn.innerHTML="generated qr code"
      

      let display=document.getElementById("past-list");
      display.innerHTML=display.innerHTML+
      `<div id="task">
      <span>${journey}</span>
      <button class="del"><i class="fa fa-trash"></i></button>
      </div>`
      let aaldel=document.querySelectorAll(".del")
      for (let i = 0; i < aaldel.length; i++) {
        aaldel[i].onclick=function(){
          this.parentNode.remove();
        }
        
      }
      let showpast=document.getElementById("past")
      showpast.addEventListener("click",function(){
        document.getElementById("past-list").style.display="block";
        document.getElementsByClassName("task").style.display="block";
      })

    }

}
function shareClose(){
document.getElementById("share").style.display="none"
}
function shareOpen() {
document.getElementById("share").style.display="block"

}
function loadTime() {
  let date=new Date();
  hrs=date.getHours();
  min=date.getMinutes();
  sec=date.getSeconds();
  document.getElementById("hrs").innerHTML=hrs;
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec;
let show=document.getElementById("time");
let s;
if (hrs>=12) {
  show.innerHTML="PM"
} else {
  show.innerHTML="AM"
}
if (sec<10) {
  sec="0"+sec
} 

}setInterval(loadTime,10)
    
let ham=document.getElementById("ham")
ham.addEventListener("click",()=>{
  document.getElementById("ham-container").style.display="block"
  //ham.style.display="none"
})
let hamark=document.getElementById("ham-mark")
hamark.addEventListener("click",()=>{
  document.getElementById("ham-container").style.display="none"
  ham.style.display="block"
})
