const counterE = document.querySelector(".counter");
const barE = document.querySelector(".Loading-bar-front");

let idx =0;

updateNum();

function updateNum(){
    counterE.innerHTML=idx+"%"
    barE.style.width=idx+"%"
    idx++
    if(idx<101){
        setTimeout(updateNum,100)
    }
}