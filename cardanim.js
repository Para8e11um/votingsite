ids2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function cardup(idcard){
    if (ids2[idcard-1] == 1) {
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transitionDuration = '0.5s';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transformOrigin = 'right';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transform = 'translate(0px, -10px) scale(1.0, 0.95) skew(0deg, 2deg)';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.boxShadow = 'rgba(0, 0, 0, 0.267) -10px 40px 0px';
    }
}

function carddown(idcard){
    if (ids2[idcard-1] == 1){
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.transform = 'translate(0px, 0px) scale(1.0, 1.0) skew(0deg, 0deg)';
        document.getElementById(`${idcard}`).querySelector('.card-effect').style.boxShadow = 'rgba(0, 0, 0, 0.267) -0px 0px 0px';
    }
}
document.getElementById(1).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(1)})
document.getElementById(1).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(1)})
document.getElementById(2).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(2)})
document.getElementById(2).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(2)})
document.getElementById(3).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(3)})
document.getElementById(3).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(3)})
document.getElementById(4).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(4)})
document.getElementById(4).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(4)})
document.getElementById(5).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(5)})
document.getElementById(5).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(5)})
document.getElementById(6).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(6)})
document.getElementById(6).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(6)})
document.getElementById(7).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(7)})
document.getElementById(7).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(7)})
document.getElementById(8).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(8)})
document.getElementById(8).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(8)})
document.getElementById(9).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(9)})
document.getElementById(9).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(9)})
document.getElementById(10).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(10)})
document.getElementById(10).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(10)})
document.getElementById(11).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(11)})
document.getElementById(11).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(11)})
document.getElementById(12).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(12)})
document.getElementById(12).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(12)})
document.getElementById(13).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(13)})
document.getElementById(13).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(13)})
document.getElementById(14).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(14)})
document.getElementById(14).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(14)})
document.getElementById(15).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(15)})
document.getElementById(15).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(15)})
document.getElementById(16).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(16)})
document.getElementById(16).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(16)})
document.getElementById(17).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(17)})
document.getElementById(17).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(17)})
document.getElementById(18).querySelector('.card-effect').addEventListener('pointerenter', function(){cardup(18)})
document.getElementById(18).querySelector('.card-effect').addEventListener('pointerleave', function(){carddown(18)})