function repeatneon1(){
setTimeout(() =>{
  setTimeout(() => {
    textblink()
    setTimeout(() => {
      textblink()
      setTimeout(() => {
        textblink()
        setTimeout(() => {
          neontext.style.color = 'whitesmoke';
          neontext.style.textShadow = 'rgba(245, 245, 245, 0.877) 0px 0px 30px';
          neontext.style.transitionDuration = '0.1s'
        }, 60);
      }, 90);
    }, 100);
  }, 140);
    repeatneon1();
  },3000)
};
function repeatneon2(){
  setTimeout(() =>{
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
          }, 60);
        }, 90);
      }, 100);
    }, 140);
      repeatneon2();
    },3000)
  };
crt = document.getElementById('crt')
  function crtblink(){
    crt.style.background = 'linear-gradient(to top, #000000, #000000,rgb(61, 61, 61),rgb(54, 54, 54))'
    crt.style.boxShadow = '#8b8b8b42 10px 10px 20px'
    crt.style.backgroundSize = 'cover'
    crt.style.backgroundSize = '100% 5px'
    setTimeout(() => {
      crt.style.background = 'linear-gradient(to top, #000000, #000000, #4e4e4e, #444444)'
      crt.style.boxShadow = '#a7a7a742 10px 10px 20px'
      crt.style.backgroundSize = 'cover'
      crt.style.backgroundSize = '100% 5px'
    }, 60);
}
crt2 = document.getElementById('crt2')
  function crtblink2(){
    crt2.style.background = 'linear-gradient(to top, #000000, #000000,rgb(61, 61, 61),rgb(54, 54, 54))'
    crt2.style.boxShadow = '#8b8b8b42 -10px 10px 20px'
    crt2.style.backgroundSize = 'cover'
    crt2.style.backgroundSize = '100% 5px'
    setTimeout(() => {
      crt2.style.background = 'linear-gradient(to top, #000000, #000000, #4e4e4e, #444444)'
      crt2.style.boxShadow = '#a7a7a742 -10px 10px 20px'
      crt2.style.backgroundSize = 'cover'
      crt2.style.backgroundSize = '100% 5px'
    }, 60);
}
function repeatcrt(){
  setTimeout(() =>{
    setTimeout(() => {
      crtblink()
      setTimeout(() => {
        crtblink()
        setTimeout(() => {
          crtblink()
          setTimeout(() => {
            crt.style.background = 'linear-gradient(to top, #000000, #000000, #4e4e4e, #444444)'
            crt.style.boxShadow = '#a7a7a742 10px 10px 20px'
            crt.style.backgroundSize = 'cover'
            crt.style.backgroundSize = '100% 5px'
          }, 60);
        }, 90);
      }, 90);
    }, 90);
      repeatcrt();
    },1500)
  };
  function repeatcrt2(){
    setTimeout(() =>{
      setTimeout(() => {
        crtblink2()
        setTimeout(() => {
          crtblink2()
          setTimeout(() => {
            crtblink2()
            setTimeout(() => {
              crt2.style.background = 'linear-gradient(to top, #000000, #000000, #4e4e4e, #444444)'
              crt2.style.boxShadow = '#a7a7a742 -10px 10px 20px'
              crt2.style.backgroundSize = 'cover'
              crt2.style.backgroundSize = '100% 5px'
            }, 60);
          }, 90);
        }, 90);
      }, 90);
        repeatcrt2();
      },1900)
    };

function crtenable(){
  setTimeout(() => {
    crtblink()
    setTimeout(() => {
      crtblink()
      setTimeout(() => {
        crtblink()
        setTimeout(() => {
          crt.style.background = 'linear-gradient(to top, #000000, #000000, #4e4e4e, #444444)'
          crt.style.boxShadow = '#a7a7a742 10px 10px 20px'
          crt.style.backgroundSize = 'cover'
          crt.style.backgroundSize = '100% 5px'
          repeatcrt();
        }, 60);
      }, 90);
    }, 100);
  }, 360);
}
function crtenable2(){
  setTimeout(() => {
    crtblink()
    setTimeout(() => {
      crtblink()
      setTimeout(() => {
        crtblink()
        setTimeout(() => {
          crt.style.background = 'linear-gradient(to top, #000000, #000000, #4e4e4e, #444444)'
          crt.style.boxShadow = '#a7a7a742 10px 10px 20px'
          crt.style.backgroundSize = 'cover'
          crt.style.backgroundSize = '100% 5px'
          repeatcrt2();
        }, 60);
      }, 90);
    }, 120);
  }, 480);
}