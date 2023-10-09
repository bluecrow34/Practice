//// countDown

function countDown (x){
    let timer = setInterval(function(){
        x--
    if(x<=0){
        clearInterval (timer);
        console.log('Done!')
    }
    else {
        console.log(x);}
    },1000)
}


/// RandomGame

function randomGame (){
    let num;
    let counter = 0;
let timer = setInterval(function(){
num = Math.random();
counter++
if(num > .75){
    clearInterval(timer);
    console.log(counter);}
},1000)
}
