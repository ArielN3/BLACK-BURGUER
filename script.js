// Menu data
const menuData = {
    hamburgueres: {
        title: 'Hambúrgueres',
        items: [
            {
                id: 'x-salada',
                name: 'X-SALADA',
                description: 'Pão, hambúrguer, queijo, presunto, tomate e alface',
                price: 8.99,
                image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
            },
           
            {
                id: 'x-bacon',
                name: 'X-BACON',
                description: 'Pão, hambúrguer, queijo, maionese e bacon',
                price: 11.00,
                image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'
            },

            

            {
                id: 'x-egg',
                name: 'X-EGG',
                description: 'Pão, hambúrguer, queijo, presunto, ovo e maionese',
                price: 11.00,
                image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
            },
           

            {
                id: 'x-tudo',
                name: 'X-TUDO',
                description: 'Pão, hambúrguer, queijo, presunto, ovo, milho, salsicha e batata palha',
                price: 14.00,
                image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg'
            },
           

            {
                id: 'file-frango',
                name: 'FILÉ DE FRANGO',
                description: 'Pão, filé de frango, queijo, bacon, maionese, tomate e alface',
                price: 14.00,
                image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg'
            },
            
            {
                id: 'duplo-bacon',
                name: 'DUPLO BACON',
                description: 'Pão, 2 hambúrgueres, queijo, maionese e bacon',
                price: 14.00,
                image: 'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg'
            },
           

            {
                id: 'dog-chapa',
                name: 'DOG NA CHAPA',
                description: 'Pão, salsicha, queijo, presunto, milho e batata palha',
                price: 10.00,
                image: 'https://images.pexels.com/photos/4113464/pexels-photo-4113464.jpeg'
            },
            {
                id: 'quente-no-molho',
                name: 'Cachorro quente no molho',
                description: 'Molho caseiro',
                price:8.00,
                image: 'https://i.pinimg.com/736x/8b/9e/f8/8b9ef8fb5777e2a50c11635ed0700751.jpg'
            }
            
        ]
    },
    trioshamburgueres: {
        title: 'trios-Hambúrgueres',
        items: [
           
            {
                id: 'TRIO-x-salada',
                name: 'TRIO-X-SALADA',
                description: 'Pão, hambúrguer, queijo, presunto, tomate e alface',
                price: 17.99,
                image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
            },
            
            {
                id: 'TRIO-x-bacon',
                name: 'TRIO-X-BACON',
                description: 'Pão, hambúrguer, queijo, maionese e bacon',
                price: 20.99,
                image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'
            },

            
            {
                id: 'TRIO-x-egg',
                name: 'TRIO-X-EGG',
                description: 'Pão, hambúrguer, queijo, presunto, ovo e maionese',
                price: 20.99,
                image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
            },

            
            {
                id: 'TRIO-x-tudo',
                name: 'TRIO-X-TUDO',
                description: 'Pão, hambúrguer, queijo, presunto, ovo, milho, salsicha e batata palha',
                price: 24.99,
                image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg'
            },

           
            {
                id: 'TRIO-file-frango',
                name: 'TRIO-FILÉ DE FRANGO',
                description: 'Pão, filé de frango, queijo, bacon, maionese, tomate e alface',
                price: 24.99,
                image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg'
            },
           
            {
                id: 'TRIO-duplo-bacon',
                name: 'TRIO-DUPLO BACON',
                description: 'Pão, 2 hambúrgueres, queijo, maionese e bacon',
                price: 24.99,
                image: 'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg'
            },

            
            {
                id: 'TRIO-dog-chapa',
                name: 'TRIO-DOG NA CHAPA',
                description: 'Pão, salsicha, queijo, presunto, milho e batata palha',
                price: 20.00,
                image: 'https://images.pexels.com/photos/4113464/pexels-photo-4113464.jpeg'
            },

            {
                id: 'trio-quente-no-molho',
                name: 'TRIO-Cachorro quente no molho',
                description: 'Molho caseiro',
                price: 8.00,
                image: 'https://i.pinimg.com/736x/8b/9e/f8/8b9ef8fb5777e2a50c11635ed0700751.jpg'
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
            },
            {
                id: 'Caldo',
                name: 'Caldos Variados',
                description: 'Caldo 300ml',
                price: 7.00,
                image: 'https://guiadacozinha.com.br/wp-content/uploads/2023/03/tamanho-padrao-gc-15.jpg'
            }
        ]
    },
    bebidas: {
        title: 'Bebidas',
        items: [
            {
                id: 'refri-lata-310',
                name: 'REFRIGERANTE LATA',
                description: 'Refrigerante em lata de 310 ml (diversos sabores)',
                price: 5.00,
                image: 'https://paroquiasantaclaradf.com.br/wp-content/uploads/2021/07/Design-sem-nome-10.png'
            },
            {
                id: 'guarana-268',
                name: 'GUARANÁ ANTARCTICA',
                description: 'Guaraná Antarctica garrafinha de 268 ml',
                price: 4.50,
                image: 'https://i.ibb.co/SwzZk6k5/image.png" alt="image"'
            },
            {
                id: 'guarana-200',
                name: 'GUARANÁ ANTARCTICA',
                description: 'Guaraná Antarctica em garrafinha de 200 ml',
                price: 3.00,
                image: 'https://i.ibb.co/SwzZk6k5/image.png" alt="image"'
            },
            {
                id: 'fanta-600',
                name: 'FANTA LARANJA E UVA',
                description: 'Fanta laranja ou uva em garrafa PET de 600 ml',
                price: 6.00,
                image: 'https://logonews.fr/wp-content/uploads/2023/04/fanta_thumbnail_logonews.jpg" alt="image"'
            },
            {
                id: 'guaramix-300',
                name: 'GUARAMIX MIX PET',
                description: 'Guaramix PET 300 ml',
                price: 3.50,
                image: 'https://i.ibb.co/FL6V2P5c/image.png" alt="image"'
            },
            {
                id: 'guaramix-copo-290',
                name: 'GUARAMIX COPO',
                description: 'Guaramix servido em copo de 290 ml',
                price: 3.50,
                image: 'https://i.ibb.co/FL6V2P5c/image.png" alt="image"'
            },
            {
                id: 'coca-pet-600',
                name: 'COCA-COLA PET',
                description: 'Coca-Cola em garrafa PET de 600 ml',
                price: 7.90,
                image: 'https://pbs.twimg.com/profile_images/1744786283531059200/lrggJynL_400x400.jpg" alt="image"'
            },
            {
                id: 'coca-ns-vidro',
                name: 'COCA-COLA Ns/vidro',
                description: 'Coca-Cola versão Ns em garrafa de vidro',
                price: 3.50,
                image: 'https://pbs.twimg.com/profile_images/1744786283531059200/lrggJynL_400x400.jpg" alt="image"'
            },
            {
                id: 'coca-ks-vidro',
                name: 'COCA-COLA Ks/vidro',
                description: 'Coca-Cola versão Ks em garrafa de vidro',
                price: 4.00,
                image: 'https://pbs.twimg.com/profile_images/1744786283531059200/lrggJynL_400x400.jpg"'
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
