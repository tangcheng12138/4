var optionSelect=document.getElementById('option');
var pointOne=document.getElementById('point1');
var pointTwo=document.getElementById('point2');
var pointThree=document.getElementById('point3');

pointOne.onclick=function () {
    optionSelect.className= 'optionSelect1';
}

pointTwo.onclick=function () {
    optionSelect.className= 'optionSelect2';
}

pointThree.onclick=function () {
    optionSelect.className= 'optionSelect3';
}