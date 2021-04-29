const cube = document.querySelector('.cuboid');
const radioGroup = document.querySelector('.radio--group');

radioGroup.addEventListener('change', showCubeSide => {
    var checkedRadio = radioGroup.querySelector(':checked');
    cube.className = 'cuboid show--' + checkedRadio.value;
});
