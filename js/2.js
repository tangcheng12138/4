var optionSelect=document.getElementById('option');
var pointOne=document.getElementById('point1');
var pointTwo=document.getElementById('point2');
var pointThree=document.getElementById('point3');

pointOne.onclick=function () {
    optionSelect.className= 'optionSelect1';
};

pointTwo.onclick=function () {
    optionSelect.className= 'optionSelect2';
};

pointThree.onclick=function () {
    optionSelect.className= 'optionSelect3';
};

window.onscroll=function () {
    if(window.scrollY>0){
        topNavBar.classList.add('topAnimation');
    }else {
        topNavBar.classList.remove('topAnimation');
    }
};

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

var list=document.getElementById('topList');
var aLists=list.getElementsByTagName('a');
for (var i=0;i<aLists.length;i++) {
    aLists[i].onclick=function (x) {
        x.preventDefault();
        var target=x.currentTarget;
        var targetHref=target.getAttribute('href');
        var element=document.querySelector(targetHref);
        var startTop=window.scrollY;
        var targetTop=element.offsetTop-70;
        const coords = { y : startTop };
        const tween = new TWEEN.Tween(coords)
            .to({ y : targetTop}, 1000)
            .easing(TWEEN.Easing.Quadratic.In)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}