// Menu data
const menuData = {
    hamburgueres: {
        title: 'Hambúrgueres',
        items: [
            {
                id: 'x-salada',
                name: 'X-SALADA',
                description: 'Pão, hambúrguer, queijo, presunto, tomate e alface',
                price: 17.99,
                image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
            },
            {
                id: 'x-bacon',
                name: 'X-BACON',
                description: 'Pão, hambúrguer, queijo, maionese e bacon',
                price: 20.99,
                image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'
            },
            {
                id: 'x-egg',
                name: 'X-EGG',
                description: 'Pão, hambúrguer, queijo, presunto, ovo e maionese',
                price: 20.99,
                image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
            },
            {
                id: 'x-tudo',
                name: 'X-TUDO',
                description: 'Pão, hambúrguer, queijo, presunto, ovo, milho, salsicha e batata palha',
                price: 24.99,
                image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg'
            },
            {
                id: 'file-frango',
                name: 'FILÉ DE FRANGO',
                description: 'Pão, filé de frango, queijo, bacon, maionese, tomate e alface',
                price: 24.99,
                image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg'
            },
            {
                id: 'duplo-bacon',
                name: 'DUPLO BACON',
                description: 'Pão, 2 hambúrgueres, queijo, maionese e bacon',
                price: 24.99,
                image: 'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg'
            },
            {
                id: 'dog-chapa',
                name: 'DOG NA CHAPA',
                description: 'Pão, salsicha, queijo, presunto, milho e batata palha',
                price: 20.00,
                image: 'https://images.pexels.com/photos/4113464/pexels-photo-4113464.jpeg'
            }
        ]
    },
    acompanhamentos: {
        title: 'Acompanhamentos',
        items: [
            {
                id: 'batata-p',
                name: 'BATATA FRITA PEQUENA',
                description: 'Porção de batatas fritas crocantes',
                price: 5.50,
                image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'
            },
            {
                id: 'batata-g',
                name: 'BATATA FRITA GRANDE',
                description: 'Porção grande de batatas fritas crocantes',
                price: 10.00,
                image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg'
            },
            {
                id: 'batata-especial',
                name: 'BATATA CHEDDAR E BACON',
                description: 'Batatas fritas com cheddar cremoso e bacon crocante',
                price: 12.99,
                image: 'https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg'
            }
        ]
    }
};

// Mobile menu toggle
const menuButton = document.getElementById('menuButton');
const navList = document.getElementById('navList');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Section toggle
function toggleSection(header) {
    header.classList.toggle('collapsed');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    navList.classList.remove('active');
}

// Create menu cards
function createMenuCard(item) {
    return `
        <div class="menu-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="card-price">R$ ${item.price.toFixed(2)}</span>
                </div>
                <p class="card-description">${item.description}</p>
            </div>
        </div>
    `;
}

// Initialize menu sections
function initializeMenu() {
    Object.entries(menuData).forEach(([sectionId, section]) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            const menuGrid = sectionElement.querySelector('.menu-grid');
            menuGrid.innerHTML = section.items.map(createMenuCard).join('');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMenu);