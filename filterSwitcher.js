function showFilterForCategory () {
    const choosenCategory = document.querySelector('.prod-cat');

    choosenCategory.addEventListener('click', function (e) {
        const category = e.target.innerText;
        const teaCategory = document.querySelector('.tea-filter');
        const coffeeCategory = document.querySelector('.coffee-filter');

        if (category.toLowerCase().includes('tea')) {
            teaCategory.style.display = 'block';
            coffeeCategory.style.display = 'none';
        } else {
            teaCategory.style.display = 'none';
            coffeeCategory.style.display = 'block';

        }
    })
}
export { showFilterForCategory };