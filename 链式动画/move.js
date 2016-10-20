/**
 * Created by james on 2016/10/20.
 */
var speed = 0;
var icur = 0;

function startMove(obj, attr, iTarget,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (attr == 'opacity'){
            icur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
        } else {
            icur = parseInt(getStyle(obj, attr));
        }
        speed = (iTarget - icur)/8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (icur == iTarget){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }else{
            if (attr == 'opacity'){
                obj.style.filter = 'alpha(opacity: '  + (icur + speed) + ');';
                obj.style[attr] = (icur + speed)/100;
            } else {
                obj.style[attr] = icur + speed + 'px';
            }
            obj.style.fontSize = parseInt(getStyle(obj, 'fontSize')) + speed+ 'px';
        }
    },30)
}

function getStyle(obj, attr){
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}