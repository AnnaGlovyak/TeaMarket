const productsList = document.getElementById('products-list-id');
const searchInput = document.getElementById('search-input-id');

searchInput.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});
