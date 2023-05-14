const buttonG = document.getElementById("buttonG");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const allbutton = document.getElementById("allbutton");
const closedoors = document.getElementById("closedoors");
const opendoors = document.getElementById("opendoors");
const rope = document.getElementById("rope");
const elevatorcontainer = document.getElementById("elevatorcontainer");
const leftdoor = document.getElementById("leftdoor");
const center = document.getElementById("center");
const rightdoor = document.getElementById("rightdoor");


buttonG.addEventListener("click", () => takeToFloor(0))
button1.addEventListener("click", () => takeToFloor(1))
button2.addEventListener("click", () => takeToFloor(2))
button3.addEventListener("click", () => takeToFloor(3))
button4.addEventListener("click", () => takeToFloor(4))
let ArrayOfFloor = [{floor:"G",heightOfRope:"320px"},{floor:"1",heightOfRope:"240px"},{floor:"2",heightOfRope:"160px"},{floor:"3",heightOfRope:"80px"},{floor:"4",heightOfRope:"0px"}];

function takeToFloor(index1){
    closeFunc()
    allbutton.children[index1].style.borderColor="blue";
    allbutton.children[index1].style.color="blue";
    setTimeout(()=>{rope.style.transition = "height 3s ease";
    rope.style.height = ArrayOfFloor[index1].heightOfRope;}, 1000);
    console.log(index1)
    setTimeout(()=>{center.innerText=ArrayOfFloor[index1].floor},2000);
    setTimeout(()=>{allbutton.children[index1].style.borderColor="red";allbutton.children[index1].style.color="red"}, 4000)
    setTimeout(openFunc, 4000);  
}
function closeFunc (){
      center.style.width="0px"
      console.log("closedoors")
}
closedoors.addEventListener("click", closeFunc);

function openFunc (){
    center.style.width="100px"
    console.log("opendoors")
}
opendoors.addEventListener("click", openFunc);

closedoors.addEventListener("click", function(){
    setTimeout(()=>{closedoors.style.borderColor="blue";closedoors.style.color="blue"}, 0)
    setTimeout(()=>{closedoors.style.borderColor="red";closedoors.style.color="red"}, 800)
})
opendoors.addEventListener("click", function(){
    setTimeout(()=>{opendoors.style.borderColor="blue";opendoors.style.color="blue"}, 0)
    setTimeout(()=>{opendoors.style.borderColor="red";opendoors.style.color="red"}, 800)
})




