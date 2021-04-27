const cube = document.querySelector('.cuboid');
const radioGroup = document.querySelector('.radio-group');
var currentSide = '';

function showCubeSide() {

    var checkedRadio = radioGroup.querySelector(':checked');

    var newSide = 'show--' + checkedRadio.value;

    if (cube.classList.contains(currentSide)) {
        cube.classList.remove(currentSide);
    }
    cube.classList.add(newSide);
    currentSide = newSide;
}
showCubeSide();
radioGroup.addEventListener('change', showCubeSide);
