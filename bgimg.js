state = 0
function repeat(){
setTimeout(() =>{
    if (state == 0){
    document.getElementById('backgroundimg').style.transform = 'translateX(-30%) rotate(3deg)';
    state = 1
    } else if (state == 1){
    document.getElementById('backgroundimg').style.transform = 'translateX(0%) rotate(-1deg)';
    state = 0
    }
    repeat();
  },10000)
};
repeat()
