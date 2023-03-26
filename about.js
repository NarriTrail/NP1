// let view=document.getElementsByClassName("btn");
function dataLoad(){
  let view=document.getElementsByClassName("btn");
    let xhr=new XMLHttpRequest();
  xhr.open("get","more.txt",true)
  xhr.send();
  xhr.onload=()=>{
    let display=document.getElementById("display");
    display.innerText=xhr.responseText;
    view.innerText="view less";

}
}

let ham=document.getElementById("ham")
ham.addEventListener("click",()=>{
  document.getElementById("ham-container").style.display="block"
  ham.style.display="none"
})
let hamark=document.getElementById("ham-mark")
hamark.addEventListener("click",()=>{
  document.getElementById("ham-container").style.display="none"
  ham.style.display="block"
})




