document.addEventListener('DOMContentLoaded', function () {
    showCubeSide();

})


const cube = document.querySelector('.cuboid');
const radioGroup = document.querySelector('.radio-group');
var currentSide = '';

function showCubeSide() {

    var checkedRadio = radioGroup.querySelector(':checked');

    cube.className = 'cuboid show--' + checkedRadio.value;
    // var newSide = 'show--' + checkedRadio.value;

    // if (cube.classList.contains(currentSide)) {
    //     cube.classList.remove(currentSide);
    // }
    // cube.classList.add(newSide);
    // currentSide = newSide;


}
radioGroup.addEventListener('change', showCubeSide);
