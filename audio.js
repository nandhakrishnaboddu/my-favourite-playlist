//let playbutton=document.getElementById("play");
// var audio=document.createElement("AUDIO");

const audi=[];
let myList=[
    {
        id:1,
        text:"Selena Gomez who Says",
        src:"images/1.jfif",
        audio:"audio/audio1.mp3"
    },
    {
        id:2,
        text:"Naatu Naatu(from rrr)",
        src:"images/2.jfif",
        audio:"audio/audio2.mp3"
     },
     {
        id:3,
        text:"let Me Love You",
        src:"images/3.jfif",
        audio:"audio/audio3.mp3"
     },
     {
        id:4,
        text:"Kesariya",
        src:"images/4.jpg",
        audio:"audio/audio4.mp3"
     },
     {
        id:5,
        text:"ae dil hai muskhil",
        src:"images/5.jpg",
        audio:"audio/audio5.mp3"
     },
     {
        id:6,
        text:"Adiga Adiga(from ninnu Kori)",
        src:"images/6.jpg",
        audio:"audio/audio6.mp3"
     },
     {
        id:7,
        text:"Pranam Potunaa(from Love today)",
        src:"images/7.jpg",
        audio:"audio/audio7.mp3"
     },
     {
        id:8,
        text:"Gundellona(from Ori Devuda)",
        src:"images/8.jpg",
        audio:"audio/audio8.mp3"
     },
    
    ];

let firstid=0;
let len=myList.length-1;
let currentid=0;
let element=document.getElementById("mycontainer");

let headingelemnt=document.createElement("h1");
headingelemnt.classList.add("heading");
headingelemnt.textContent="Selena Gomez Who Says";
headingelemnt.id="head";

element.appendChild(headingelemnt);

let divcontainer=document.createElement("div");
divcontainer.classList.add("d-flex","flex-row","justify-content-center","mb-3");


let imageelement=document.createElement("img");
imageelement.id=firstid;
imageelement.src="images/1.jfif";
imageelement.classList.add("imgele","mt-4","mb-4");
console.log(imageelement);

divcontainer.appendChild(imageelement);
element.appendChild(divcontainer);


let innerdivcontainer=document.createElement("div");
innerdivcontainer.classList.add("d-flex","flex-row","justify-content-center","m-auto","w-50");
element.appendChild(innerdivcontainer);
let prevcontainer1 = document.createElement("div");
prevcontainer1.classList.add("text-center","icon-container","mr-4","ml-4");
 
let prev=document.createElement("i");
prev.classList.add("fa","fa-step-backward");
prev.setAttribute("aria-hidden","true");
prevcontainer1.appendChild(prev);
innerdivcontainer.appendChild(prevcontainer1);
prevcontainer1.onclick=function(){
    currentid=parseInt(imageelement.id);
    if(isplaying===true){
        audi[currentid].pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        isplaying=false;
    }
    if(currentid===0){
        imageelement.id=len;
        imageelement.src=myList[len]["src"];
        headingelemnt.textContent=myList[len]["text"]; 
        audi[len]=new Audio(myList[len]["audio"]);
        audi[len].play(); 
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        isplaying=true;
    }
    else{
        currentid=currentid-1
        imageelement.src=myList[currentid]["src"];
        headingelemnt.textContent=myList[currentid]["text"]; 
        imageelement.id=currentid;
        audi[currentid]=new Audio(myList[currentid]["audio"]);
        audi[currentid].play(); 
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        isplaying=true;
    }

}


let playcontainer1 = document.createElement("div");
playcontainer1.classList.add("text-center","icon-container","mr-4","ml-4");
let play=document.createElement("i");
play.classList.add("fa","fa-play");
play.setAttribute("aria-hidden","true");
playcontainer1.appendChild(play);
innerdivcontainer.appendChild(playcontainer1);

let isplaying=false;
playcontainer1.onclick=function(){
    currentid=parseInt(imageelement.id);
    if(isplaying===false){
        audi[currentid]=new Audio(myList[currentid]["audio"]);
        audi[currentid].play(); 
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        isplaying=true;
    }
    else{
        audi[currentid].pause(); 
        audi[currentid]=null;
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        isplaying=false;
    }
    
  }


let nextcontainer1 = document.createElement("div");
nextcontainer1.classList.add("text-center","icon-container","mr-4","ml-4");
let next=document.createElement("i");
next.classList.add("fa","fa-step-forward");
next.setAttribute("aria-hidden","true");
nextcontainer1.appendChild(next);



nextcontainer1.onclick=function(){
    currentid=parseInt(imageelement.id);
    if(isplaying===true){
        audi[currentid].pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        isplaying=false;
    }
    if(currentid===len){
        imageelement.id=0;
        imageelement.src=myList[0]["src"];
        headingelemnt.textContent=myList[0]["text"]; 
        audi[0]=new Audio(myList[0]["audio"]);
        audi[0].play(); 
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        isplaying=true;
    }
    else{
        currentid=currentid+1
        imageelement.src=myList[currentid]["src"];
        headingelemnt.textContent=myList[currentid]["text"]; 
        imageelement.id=currentid;
        audi[currentid]=new Audio(myList[currentid]["audio"]);
        audi[currentid].play(); 
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        isplaying=true;
    }

}
innerdivcontainer.appendChild(nextcontainer1);










