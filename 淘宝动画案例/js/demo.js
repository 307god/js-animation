/**
 * Created by james on 2016/10/20.
 */
window.onload = function () {
    var box = document.getElementById('box');
    var aTags = document.getElementsByTagName('a');
    var iTags = document.getElementsByTagName('i');
    var iclose = document.getElementById('close');
    for (var i = 0; i < iTags.length; i++){
        aTags[i].onmouseenter = function () {
            var _this = this.getElementsByTagName('i')[0];
            startMove(_this, {top:-20,opacity:0}, function () {
                _this.style.top='40px';
                startMove(_this,{top:15,opacity:100})
            })
        }
    }

    posChange(box);

    iclose.onclick = function () {
        box.style.display = 'none';
    }
};
