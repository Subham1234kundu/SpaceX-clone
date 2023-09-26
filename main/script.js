const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");

let scrollStarted = false;
btn.addEventListener("click",()=>{
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("scroll-stop");
    menu.classList.toggle("show-menu");


})


const counters = document.querySelectorAll(".counter");
document.addEventListener("scroll",scrollPage);

function scrollPage(){
   const scrollpos = window.scrollY;
   if(scrollpos>100 && !scrollStarted){
    countUp();
    
    scrollStarted = true;
   }else if(scrollpos<100 && scrollStarted){
    reset();
    scrollStarted = false;
   }
}
function countUp(){
    counters.forEach((counter)=>{
    counter.innerText = "0";

    const counterUpdate = ()=>{
        //target value of the counter
        const target = Number(counter.getAttribute("deta-target"));
        // console.log(target);
        //current value
        const c = Number(counter.innerText);
        
        //create an increment
        const increment = target/100;

        if(c<target){
          //roundUp an set the counter val
          counter.innerText = `${Math.ceil(c+increment)}` 
          setTimeout(counterUpdate,55);
        }else{
            counter.innerText = target;
        }
       
    }

    counterUpdate();
    }) 
}

function reset(){
    counters.forEach((count)=>{
    count.innerHTML = "0";
    })
}
