body = document.getElementById('body1')
cen = document.getElementById('logolefthalf');
cen2 = document.getElementById('logorighthalf');
rectangle = document.getElementById('topheader');
shirma = document.getElementById('shirma')
neontext = document.getElementById('neontext')


function blink(){
    rectangle.style.opacity = '1.0'
    shirma.style.opacity = '0.0'
    setTimeout(() => {
        rectangle.style.transitionDuration = '0.1s'
        shirma.style.transitionDuration = '0.1s'
        rectangle.style.opacity = '0.0'
        shirma.style.opacity = '1.0'
        setTimeout(() => {
            rectangle.style.transitionDuration = '0.01s'
            shirma.style.transitionDuration = '0.01s'
        }, 100);
    }, 60);
}
mainnom = document.getElementById('mainnominations')

setTimeout(() => {
    if (window.innerWidth > mainnom.offsetWidth){
        document.getElementById('slider-container').style.display = 'none'
        document.getElementById('mainnominations').style.margin = 'auto'
        document.getElementById('mainnominations').style.transform = 'translateX(0px)'
    }
    blink();
    setTimeout(() => {
        blink();
        setTimeout(() => {
            blink();
            setTimeout(() => {
                blink();
                setTimeout(() => {
                    blink()
                    setTimeout(() => {
                        blink()
                        setTimeout(() => {
                            blink()
                            setTimeout(() => {
                                blink()
                                setTimeout(() => {
                                    blink()
                                    setTimeout(() => {
                                        rectangle.style.opacity = '1.0'
                                        shirma.style.opacity = '0.0'
                                        body.style.overflowY = 'auto';
                                        document.getElementById('slider-container').style.zIndex = '70'
                                        document.getElementById('shirma2').style.opacity = '0.5'
                                        document.getElementById('shirma2').style.background = 'linear-gradient(rgba(148, 84, 54, 0.23), rgba(5, 5, 5, 1))'
                                        nominationblink()
                                        setTimeout(() => {
                                            shirma.style.display = 'none';
                                        }, 3000);
                                    }, 80);
                                }, 60);
                            }, 80);
                        }, 100);
                    }, 120);
                }, 140);
            }, 900);
        }, 140);
    }, 600);
}, 1000);
function textblink(){
    neontext.style.color = 'whitesmoke';
    neontext.style.textShadow = 'rgba(245, 245, 245, 0.877) 0px 0px 30px';
    neontext.style.transitionDuration = '0.1s'
    setTimeout(() => {
        neontext.style.color = 'rgb(49, 49, 49)';
        neontext.style.textShadow = 'rgba(245, 245, 245, 0.877) 0px 0px 0px';
        setTimeout(() => {
             neontext.style.transitionDuration = '0.01s'
        }, 100);
    }, 60);
}
function nominationblink(){
    textblink()
    setTimeout(() => {
        textblink();
        setTimeout(() => {
            textblink();
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
                            repeatneon1()
                        }, 80);
                    }, 100);
                }, 120);
            }, 140);
        }, 160);
    }, 300);
}