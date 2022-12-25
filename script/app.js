const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
console.log(img);
const lbtn = document.getElementById('left');
const rbtn = document.getElementById('right');

let index=0;
let interval = setInterval(run,2000);

function run(){
    index++;
    changeImage();
    
}

function changeImage(){
    if(index>img.length-1){
        index=0;
    } else if(index<0){
        index = img.length-1;
    }
    imgs.style.transform = `translateX(${index*-500}px)`
}

lbtn.addEventListener('click',()=>{
    index--;
    changeImage();
    resetInterval();
})
function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run,2000);
}

rbtn.addEventListener('click',()=>{
    index++;
    changeImage();
    resetInterval();
})