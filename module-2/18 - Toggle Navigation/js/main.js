const button = document.querySelector('.toggle-btn');
console.log(button);

button.addEventListener('click', function(event) {
    event.stopPropagation();
    this.nextElementSibling.classList.toggle('expanded');
});

const dropdown = document.querySelector('.dropdown > a');

dropdown.addEventListener('click', function(event) {
    event.preventDefault();
    this.nextElementSibling.classList.toggle('expanded');
});

