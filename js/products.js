// Function to fetch products from JSON file
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render products
function renderProducts(products) {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <p class="description">${product.description}</p>
            <button class="snipcart-add-item"
                data-item-id="${product.id}"
                data-item-price="${product.price}"
                data-item-url="/"
                data-item-description="${product.description}"
                data-item-image="${product.image}"
                data-item-name="${product.name}">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Initialize products
document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    renderProducts(products);
}); 