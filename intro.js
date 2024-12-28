sel = 0
sel2 = 0
sel3 = 0
acceptPressed = 0;
inputname = document.getElementById('inputname')
shirma = document.getElementById('shirma');
ticket = document.getElementById('ticket');
textblock = document.getElementById('textblock');
alertbox = document.getElementById('alert');
accept = document.getElementById('accept');
alert1 = document.getElementById('alert1');
alert2 = document.getElementById('alert2');
setTimeout(() => {
  document.getElementById('prokol').style.transform = 'translateY(-120px)'
  setTimeout(() => {
    shirma.style.transform = 'translateY(-100%)';
    float();
  }, "2000");
}, "200");
function float(){
    if (sel == 0){
    ticket.style.transform = 'rotate(3deg) translateY(-20px)'
    textblock.style.transform = 'rotate(-3deg) translateY(10px)'
    setTimeout(() => {
      if (sel == 0){
        ticket.style.transform = 'rotate(-3deg) translateY(20px)'
        textblock.style.transform = 'rotate(3deg) translateY(-10px)'
        setTimeout(() => {
            float()
          }, 3800 - sel*2850);
        } else {
          if (sel == 0){
            document.getElementById('ticket').style.transitionDuration = '1s'
            document.getElementById('textblock').style.transitionDuration = '3s'
            document.getElementById('ticket').style.transform = 'rotate(0deg) translateY(0px) scale(1.1)'
            document.getElementById('textblock').style.transform = 'rotate(0deg) translateY(-30px) scale(1.1)'
            document.getElementById('ticketshadow').style.boxShadow = 'rgba(248, 230, 215, 0.9) 0px 25px 100px'
            setTimeout(() => {
                document.getElementById('ticketshadow').transitionDuration = '1s'
                document.getElementById('ticketshadow').boxShadow = 'rgba(248, 230, 215, 0.541) 0px 25px 100px'
            }, 200);
          }
          sel3 = 1
          float();
        }
      }, 3800 - sel*2850);
    } else {
        sel2 = 1;
        if (sel3 == 0) {
          document.getElementById('ticketshadow').style.boxShadow = 'rgba(248, 230, 215, 0.9) 0px 25px 100px'
          setTimeout(() => {
              document.getElementById('ticketshadow').transitionDuration = '1s'
              document.getElementById('ticketshadow').boxShadow = 'rgba(248, 230, 215, 0.541) 0px 25px 100px'
          }, 200);
          textblock.style.transitionDuration = "1s";
          ticket.style.transitionDuration = "1s";
          ticket.style.transform = 'rotate(0deg) translateY(0px) scale(1.1)'
          textblock.style.transform = 'rotate(0deg) translateY(0px) scale(1.1)'
        }
        setTimeout(() => {
        textblock.style.transform = 'rotate(0deg) translateY(-600px) scale(1.1)'
        textblock.style.opacity = '0.2'
        ticket.style.transform = 'rotate(0deg) translateY(0px) scale(1.5)'
        setTimeout(() => {
            ticket.style.transitionDuration = "4s";
            float2()
            ticket.addEventListener('click',(e)=>{
                inputname.focus()
                alert1.style.transform = 'scaleX(0.0)';
                alert2.style.transform = 'scaleX(0.0)';
                accept.style.opacity = '1.0';
              })
            
            }, 1000);
          }, 900);
    }
}
function float2(){
  if (acceptPressed == 0) {
    ticket.style.transform = 'scale(1.5) translateY(-10px)'
    accept.style.transform = 'translateY(10px)'
    alertbox.style.transform = 'translateY(10px)'
  }
    setTimeout(() => {
      if (acceptPressed == 0) {
        ticket.style.transform = 'scale(1.5) translateY(10px)'
        accept.style.transform = 'translateY(-10px)'
        alertbox.style.transform = 'translateY(-10px)'
      }
        setTimeout(() => {
            float2();
        }, 3800);
        }, 3800);
}