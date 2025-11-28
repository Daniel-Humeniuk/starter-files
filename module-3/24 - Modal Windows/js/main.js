const closeBtn = document.querySelector('.close');
const modalWindow = document.querySelector('.overlay');
closeBtn.addEventListener('click', function() {
    modalWindow.style.display = 'none';
});

setTimeout(function() {
    modalWindow.style.display = 'flex';
}, 2000);