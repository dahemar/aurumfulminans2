document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLink = document.getElementById('mobileMenuLink');
    const mobileNav = document.getElementById('mobileNav');
    let isMenuOpen = false;

    mobileMenuLink.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        mobileNav.style.display = isMenuOpen ? 'block' : 'none';
        
        // Cambiar el ícono del menú
        const svg = mobileMenuLink.querySelector('svg');
        if (isMenuOpen) {
            svg.innerHTML = `
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            `;
        } else {
            svg.innerHTML = `
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            `;
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
            isMenuOpen = false;
            
            // Restaurar el ícono del menú
            const svg = mobileMenuLink.querySelector('svg');
            svg.innerHTML = `
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            `;
        });
    });
}); 