const button = document.getElementById("open");
const letter = document.querySelector(".letter");
const typing = document.getElementById("typing");


button.addEventListener("click",()=>{

letter.scrollIntoView({
behavior:"smooth"
});


typeWriter();

createHearts();

});



const text = 
"Some flowers bloom once a year... 🌸\n\nBut meeting you made my life bloom every single day. ❤️\n\nYou are my favourite person, my happiness, and the most beautiful part of my story.\n\nHappy Girlfriend's Day Pixu 💜";

let index = 0;


function typeWriter(){

if(index < text.length){

if(text.charAt(index)==="\n"){
typing.innerHTML += "<br>";
}
else{
typing.innerHTML += text.charAt(index);
}

index++;

setTimeout(typeWriter,45);

}

}




function createHearts(){

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-20px";
heart.style.fontSize=(15+Math.random()*25)+"px";
heart.style.animation="rise 5s linear";

document.body.appendChild(heart);


setTimeout(()=>{
heart.remove();
},5000);

}

}
/* ===========================
   FINAL LETTER
=========================== */

const openFinalLetter=document.getElementById("openFinalLetter");
const finalPaper=document.getElementById("finalPaper");
const finalTyping=document.getElementById("finalTyping");

const finalMessage=`If I could relive one chapter of my life,
I'd still choose the one where I met you.

Thank you for making ordinary days
feel extraordinary.

Thank you for making distance
feel smaller.

Thank you for making me smile
even on my hardest days.

Happy Girlfriend's Day,
my favourite person. 💜

Forever Yours,

Cupiecakee 🧁`;

let finalIndex=0;
let finalOpened=false;

if(openFinalLetter){

openFinalLetter.addEventListener("click",()=>{

if(finalOpened) return;

finalOpened=true;

finalPaper.classList.add("show");

dropOrchids();

typeFinalLetter();

});

}

function typeFinalLetter(){

if(finalIndex < finalMessage.length){

if(finalMessage.charAt(finalIndex)==="\n"){

finalTyping.innerHTML += "<br>";

}else{

finalTyping.innerHTML += finalMessage.charAt(finalIndex);

}

finalIndex++;


setTimeout(typeFinalLetter,40);

}

}



function dropOrchids(){

for(let i=0;i<20;i++){

const orchid=document.createElement("div");

orchid.innerHTML="🌸";

orchid.style.position="fixed";
orchid.style.left=Math.random()*100+"vw";
orchid.style.top="-30px";
orchid.style.fontSize=(18+Math.random()*20)+"px";
orchid.style.pointerEvents="none";
orchid.style.zIndex="999";
orchid.style.animation=`petalFall ${4+Math.random()*3}s linear forwards`;

document.body.appendChild(orchid);

setTimeout(()=>{
orchid.remove();
},7000);

}

}