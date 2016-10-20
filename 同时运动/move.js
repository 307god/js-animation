/**
 * Created by james on 2016/10/20.
 */
var speed;
var icur;
var flag;

//startMove(obj, {attr1:iTarget1, attr2:iTarget2}, fn)
function startMove(obj, json, fn) {
    flag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var attr in json) {
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                icur = parseInt(getStyle(obj, attr));
            }
            speed = (json[attr] - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur != json[attr]) {
                flag = false;
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity: ' + (icur + speed) + ');';
                    obj.style[attr] = (icur + speed) / 100;
                } else {
                    obj.style[attr] = icur + speed + 'px';
                }
                obj.style.fontSize = parseInt(getStyle(obj, 'fontSize')) + speed + 'px';
            }
            if (flag){
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
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