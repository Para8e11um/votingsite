cen = document.getElementById('logolefthalf');
cen2 = document.getElementById('logorighthalf');
rectangle = document.getElementById('topheader');
c1 = window.innerWidth;
body = document.getElementById('body1')
transed = 0
setTimeout(() => {
  scroll()
}, 100);
function scroll(){
  if (window.scrollY != 0){
    if (transed == 0){
      transed = 1
      rectangle.style.transitionDuration = '0.5s'
      cen2.style.transitionDuration = '0.5s'
      cen.style.transitionDuration = '0.7s'
      rectangle.styletransitionTimingFunction = 'ease-in-out';
      rectangle.style.transitionDuration = '0.5s'
      rectangle.style.transform = `translateY(-150px)`
      setTimeout(() => {
        rectangle.style.transitionDuration = '0s';
        setTimeout(() => {
          rectangle.style.transitionDuration = '0s';
          c1 = window.innerWidth;
          rectangle.style.transform = `translateY(-150px) translateX(-${c1}px)`;
          setTimeout(() => {
            rectangle.style.transitionDuration = '0s';
            c1 = window.innerWidth;
            rectangle.style.transform = `translateX(-${c1}px)`;
            cen.style.transform = `translateX(${c1/2 - 160}px)`
            cen2.style.transform = `translateX(${c1/2 - 160}px)`
            setTimeout(() => {
              c1 = window.innerWidth;
              rectangle.style.transitionDuration = '0.5s'
              rectangle.style.transform = `translateX(-${c1-400}px)`
            }, 2);
            }, 700);
          }, 3);
        }, 500);
    }
  } else {
    if (transed == 1){
      transed = 0;
      rectangle.style.transitionDuration = '0.5s'
      cen2.style.transitionDuration = '0.7s'
      cen.style.transitionDuration = '0.5s'
      cen.style.transform = `translateX(0px)`
      cen2.style.transform = `translateX(0px)`
      c1 = window.innerWidth;
      rectangle.style.transform = `translateX(-${c1+c1}px)`;
      setTimeout(() => {
        rectangle.style.transitionDuration = '0s';
        c1 = window.innerWidth;
        rectangle.style.transform = `translateY(-150px) translateX(-${3*c1}px)`;
        rectangle.style.transform = `translateY(-150px)`;
        setTimeout(() => {
          rectangle.style.transitionDuration = '0.5s'
          rectangle.style.transform = `translateX(0px)`
        }, 2);
      }, 500);
    }
  }
  setTimeout(() => {
    scroll()
  }, 500);
}

noms = document.getElementById('nominations');
neonother = document.getElementById('neontext2')

checkVisibility1 = () => {

if (noms.getBoundingClientRect().top < window.innerHeight/2 + 800) {

  noms.style.transform = 'translateY(0px)';
  noms.style.opacity = '1.0';
 
  window.removeEventListener('scroll', checkVisibility1)
 
}
}

function otherneonblink(){
  neonother.style.color = 'rgb(250, 162, 121)';
  neonother.style.textShadow = 'rgba(238, 116, 59, 0.76) 0px 0px 30px';
  neonother.style.transitionDuration = '0.1s'
  setTimeout(() => {
    neonother.style.color = 'rgb(49, 49, 49)';
    neonother.style.textShadow = 'rgba(238, 116, 59, 0.76) 0px 0px 0px';
      setTimeout(() => {
        neonother.style.transitionDuration = '0.01s'
      }, 100);
  }, 60);
}

function neonblink(){
  otherneonblink()
  setTimeout(() => {
    otherneonblink();
      setTimeout(() => {
        otherneonblink();
          setTimeout(() => {
            otherneonblink()
              setTimeout(() => {
                otherneonblink()
                  setTimeout(() => {
                    otherneonblink()
                      setTimeout(() => {
                        neonother.style.color = 'rgb(250, 162, 121)';
                        neonother.style.textShadow = 'rgba(238, 116, 59, 0.76) 0px 0px 30px';
                        neonother.style.transitionDuration = '0.1s'
                        repeatneon2()
                      }, 80);
                  }, 100);
              }, 120);
          }, 140);
      }, 160);
  }, 300);
}

checkVisibility2 = () => {

  if (neonother.getBoundingClientRect().top < window.innerHeight/2) {
  
    neonblink()
   
    window.removeEventListener('scroll', checkVisibility2)
   
  }
  }
crt = document.getElementById('crt')
crt2 = document.getElementById('crt2')
  checkVisibility3 = () => {

    if (crt.getBoundingClientRect().top < window.innerHeight/2+50) {
      crt.style.opacity = '1.0'
      crtenable()
     
      window.removeEventListener('scroll', checkVisibility3)
     
    }
    }
    checkVisibility4 = () => {

      if (crt.getBoundingClientRect().top < window.innerHeight/2+100) {
        crt2.style.opacity = '1.0'
        crtenable2()
       
        window.removeEventListener('scroll', checkVisibility4)
       
      }
      }
  

window.addEventListener('scroll', checkVisibility1);
window.addEventListener('scroll', checkVisibility2);
window.addEventListener('scroll', checkVisibility3);
window.addEventListener('scroll', checkVisibility4);