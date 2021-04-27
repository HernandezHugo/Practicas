document.addEventListener('DOMContentLoaded', function () {
    showCubeSide();
});


const cube = document.querySelector('.cuboid');
const radioGroup = document.querySelector('.radio-group');
const currentClass = '';

function showCubeSide() {

    const checkedRadio = radioGroup.querySelector(':checked');

    const side = 'show--' + checkedRadio.value;


    // if (currentClass) {
    //     cube.classList.remove(currentClass);
    // }
    // cube.classList.add(side);
    // currentClass = side;

    // console.log(checkedRadio.value);

}
radioGroup.addEventListener('change', showCubeSide);
