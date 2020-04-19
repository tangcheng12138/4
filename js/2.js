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

window.onscroll=function (x) {
    if(window.scrollY>0){
        topNavBar.classList.add('topAnimation');
    }else {
        topNavBar.classList.remove('topAnimation');
    }

    var data=document.querySelectorAll('[data-x]');
    var min=0;
    for(var i=1;i<data.length;i++){
        if(Math.abs(data[i].offsetTop-window.scrollY)<Math.abs(data[min].offsetTop-window.scrollY)){
            min=i;
        }
    }
    for(var i=0;i<data.length;i++){
        data[i].classList.remove('active');
    }
    data[min].classList.add('active');
    var id=data[min].getAttribute('id');
    var a=document.querySelector('a[href="#'+id+'"]');
    var li=a.parentNode;
    var brother=li.parentNode.children;
    for(var i=0;i<brother.length;i++){
        brother[i].classList.remove('active');
    }
    li.classList.add('active');
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