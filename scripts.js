const cube = document.querySelector('.cuboid');
const radioGroup = document.querySelector('.radio--group');
const cubeSides = document.querySelectorAll('.cube__side');

const numberHeight = document.querySelector('input[name="height"]');
const numberWidth = document.querySelector('input[name="width"]');
const numberDepth = document.querySelector('input[name="depth"]');

const screenSizeHeight = document.querySelector('.height');
const screenSizeWidth = document.querySelector('.width');
const screenSizeDepth = document.querySelector('.depth');

radioGroup.addEventListener('change', showCubeSide => {
    var checkedRadio = radioGroup.querySelector(':checked');
    cube.className = 'cuboid show--' + checkedRadio.value;
});


numberHeight.addEventListener('change', showSizes => {

    var newSize = screenSizeHeight.innerText = numberHeight.value + 'px';
    cubeSides.forEach(cubeSide => {
        cubeSide.style.setProperty('--height', `${newSize}`);
    });
});
numberWidth.addEventListener('change', showSizes => {

    var newSize = screenSizeWidth.innerText = numberWidth.value + 'px';
    cubeSides.forEach(cubeSide => {
        cubeSide.style.setProperty('--width', `${newSize}`);
    });
});
numberDepth.addEventListener('change', showSizes => {

    var newSize = screenSizeDepth.innerText = numberDepth.value + 'px';
    cubeSides.forEach(cubeSide => {
        cubeSide.style.setProperty('--depth', `${newSize}`);
    });
});
