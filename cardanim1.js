ids2 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
decs = document.getElementById('descbox')
function cardup(idcard){
    if (ids2[idcard-1] == 1) {
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transitionTimingFunction = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transitionDuration = '0.5s';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transformOrigin = 'right';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transform = 'translate(0px, -10px) scale(1.0, 0.95) skew(0deg, 2deg)';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.boxShadow = 'rgba(0, 0, 0, 0.267) -10px 40px 0px';
        descbox.style.opacity = '0.0'
        descbox.style.transform = 'translateX(300px)'
        setTimeout(() => {
            descbox.innerHTML = desc[idcard-1];
            descbox.style.transitionDuration = '0s'
            descbox.style.transform = 'translateX(-300px)'
            setTimeout(() => {
                descbox.style.transitionDuration = '0.3s'
                descbox.style.opacity = '1.0'
                descbox.style.transform = 'translateX(0px)'
            }, 10);
        }, 300);
    }
}

function carddown(idcard){
    if (ids2[idcard-1] == 1){
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transitionTimingFunction = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transform = 'translate(0px, 0px) scale(1.0, 1.0) skew(0deg, 0deg)';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.boxShadow = 'rgba(0, 0, 0, 0.267) -0px 0px 0px';
    }
}
if (elems >0){
    document.getElementById(1).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(1)})
    document.getElementById(1).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(1)})
    if (elems >1){
    document.getElementById(2).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(2)})
    document.getElementById(2).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(2)})
        if (elems >2){
        document.getElementById(3).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(3)})
        document.getElementById(3).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(3)})
        if (elems >3){
            document.getElementById(4).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(4)})
            document.getElementById(4).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(4)})
            if (elems >4){
                document.getElementById(5).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(5)})
                document.getElementById(5).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(5)})
                if (elems > 5){
                    document.getElementById(6).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(6)})
                    document.getElementById(6).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(6)})
                    if (elems > 6){}
                        document.getElementById(7).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(7)})
                        document.getElementById(7).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(7)})
                        if (elems > 7){
                            document.getElementById(8).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(8)})
                            document.getElementById(8).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(8)})
                            if (elems > 8){
                                document.getElementById(9).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(9)})
                                document.getElementById(9).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(9)})
                                if (elems>9){
                                    document.getElementById(10).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(10)})
                                    document.getElementById(10).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(10)})
                                    if (elems>10){
                                        document.getElementById(11).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(11)})
                                        document.getElementById(11).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(11)}) 
                                        if (elems>11){
                                            document.getElementById(12).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(12)})
                                            document.getElementById(12).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(12)})
                                            if (elems>12){
                                                document.getElementById(13).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(13)})
                                                document.getElementById(13).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(13)})
                                                if (elems>13){
                                                    document.getElementById(14).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(14)})
                                                    document.getElementById(14).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(14)})
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}