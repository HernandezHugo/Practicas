const cube = document.querySelector('.cuboid');
const radioGroup = document.querySelector('.radio--group');
const cubeSides = document.querySelectorAll('.cube__side');

const numberHeight = document.querySelector('input[name="height"]');
const numberWidth = document.querySelector('input[name="width"]');
const numberDepth = document.querySelector('input[name="depth"]');

const screenSizeHeight = document.querySelector('.height');
const screenSizeWidth = document.querySelector('.width');
const screenSizeDepth = document.querySelector('.depth');

radioGroup.addEventListener('change', () => {
    let checkedRadio = radioGroup.querySelector(':checked');
    cube.className = 'cuboid show--' + checkedRadio.value;
});


numberHeight.addEventListener('change', () => {
    let newSize = screenSizeHeight.innerText = numberHeight.value + 'px';
    cubeSides.forEach(cubeSide => {
        cubeSide.style.setProperty('--height', `${newSize}`);
    });
});
numberWidth.addEventListener('change', () => {
    let newSize = screenSizeWidth.innerText = numberWidth.value + 'px';
    cubeSides.forEach(cubeSide => {
        cubeSide.style.setProperty('--width', `${newSize}`);
    });
});
numberDepth.addEventListener('change', () => {
    let newSize = screenSizeDepth.innerText = numberDepth.value + 'px';
    cubeSides.forEach(cubeSide => {
        cubeSide.style.setProperty('--depth', `${newSize}`);
    });
});
