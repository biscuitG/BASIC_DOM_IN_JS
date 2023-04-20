console.log(typeof document); // object
console.log(document.body); // code inside body
console.log(document.documentElement) // all code
console.log(document.body.firstchild); // text 
console.log(document.body.firstElementChild); // firstDiv
console.log(document.body.childNodes); // all child print {text,div,text,div,..}
const arr=(document.body.children); //{div,div,..,script} all enclosed tags 
// arr is not actually array
const makeArr=Array.from(arr); // it amke virtual array
console.log(makeArr);
console.log(arr);
for(let i=0;i<makeArr.length;i++){
    console.log(makeArr[i]);
}
console.log(typeof arr,typeof makeArr); // both obj but makeArr have all function of array weird
console.log(document.children); // all children


// this things we will use 
let areWala="defre"
console.log(areWala);  // defre , else same as below
console.log(document.getElementById("areWala"));
console.log(document.getElementsByClassName("ok")[0]);// as multiple clsss has same name

// span select
const bal=document.getElementsByTagName("span");
console.log(bal[0].innerHTML);
bal[0].textContent="Hifddfhdfhfbfxb";
// bal[0].innerHTML=`<span class="hdf> Nice </span>`
// innerhtml rewrite full html , while textconeten just chnage content inside html
bal[0].style.backgroundColor='red';


// work on btn
const btn=document.getElementById("btn"); // btn now is element
console.log(btn);
btn.style.backgroundColor='blue';
btn.style.border="none";
btn.style.padding='10px 10px';
btn.style.cursor='pointer';

// get class and id
const bld=document.querySelector("#value");
console.log(bld);  // if not found bld is null
bld.innerHTML="defr";



// get attribute 
// get and set attribute

// add new eleemnt by JS when i click on button

function  bringHead(){

const h2= document.createElement("h2");
h2.innerText='fwf';
h2.textContent='yo';
const myText=document.createTextNode("write what youw want to print ");
h2.append(myText);
console.log(h2);
document.body.prepend(h2);

}
const list=document.querySelectorAll("button");
list[1].innerText='dekhlo delete krke';
list[1].onclick=removeHead;
btn.onclick=bringHead;
function removeHead(){
    const h2=document.querySelectorAll("h2");
    h2[0].remove();
}







