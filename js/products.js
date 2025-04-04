// Google Sheets API configuration
const SPREADSHEET_ID = 'TU_SPREADSHEET_ID'; // Reemplazar con el ID real
const API_KEY = 'TU_API_KEY'; // Reemplazar con la API key real

// Function to fetch products from Google Sheets
async function fetchProducts() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Products!A2:H?key=${API_KEY}`);
        const data = await response.json();
        return data.values || [];
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
            <img src="${product[4]}" alt="${product[1]}" class="product-image">
            <h3>${product[1]}</h3>
            <p class="price">$${product[2]}</p>
            <p class="description">${product[3]}</p>
            <button class="snipcart-add-item"
                data-item-id="${product[0]}"
                data-item-price="${product[2]}"
                data-item-url="/"
                data-item-description="${product[3]}"
                data-item-image="${product[4]}"
                data-item-name="${product[1]}">
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