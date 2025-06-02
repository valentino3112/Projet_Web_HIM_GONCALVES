
let restaurants = [
  {
    name: "Le Petit Bistrot",
    cuisine: "francaise",
    address: "15 Rue de la Paix, Paris",
    phone: "01 42 33 44 55",
    rating: 4,
    price: "€€",
    description: "Bistrot traditionnel avec une excellente cuisine française"
  },
  {
    name: "Bella Italia",
    cuisine: "italienne",
    address: "23 Avenue des Champs, Lyon",
    phone: "04 78 90 12 34",
    rating: 5,
    price: "€€€",
    description: "Authentique restaurant italien avec des pâtes fraîches"
  },
  {
    name: "Dragon d'Or",
    cuisine: "chinoise",
    address: "8 Rue du Commerce, Marseille",
    phone: "04 91 55 77 88",
    rating: 3,
    price: "€",
    description: "Restaurant chinois familial avec de bons plats traditionnels"
  },

  // McDonald's entries
  { name: "McDonald's Champs-Élysées", cuisine: "fast-food", address: "140 Avenue des Champs-Élysées, 75008 Paris", distance: "2.5 km", rating: 4, price: "€€", description: "Restaurant McDonald's sur les Champs-Élysées" },
  { name: "McDonald's République", cuisine: "fast-food", address: "19 Place de la République, 75003 Paris", distance: "0.8 km", rating: 4, price: "€€", description: "McDonald's au cœur de la République" },
  { name: "McDonald's Rue Berger", cuisine: "fast-food", address: "12 Rue Berger, 75001 Paris", distance: "0.3 km", rating: 4, price: "€€", description: "McDonald's de rue, très central" },
  { name: "McDonald's Rivoli", cuisine: "fast-food", address: "116 Rue de Rivoli, 75001 Paris", distance: "0.5 km", rating: 3, price: "€", description: "McDonald's bien connu près de Rivoli" },
  { name: "McDonald's Saint-Germain", cuisine: "fast-food", address: "98 Boulevard Saint-Germain, 75005 Paris", distance: "1.2 km", rating: 4, price: "€€", description: "McDonald's dans le quartier historique de Saint-Germain" },

  // Nash
  { name: "Nash Paris", cuisine: "chicken", address: "235 Rue de Crimée, 75019 Paris", distance: "3.2 km", rating: 5, price: "€€", description: "Restaurant Nash proposant des plats à base de poulet" },

  // Dunkin'
  { name: "Dunkin' Paris", cuisine: "fast-food", address: "19 Boulevard Montmartre, 75002 Paris", distance: "0.7 km", rating: 4, price: "€", description: "Dunkin' pour des gourmandises rapides" },

  // Ippudo
  { name: "Ippudo Louvre", cuisine: "ramen", address: "74-76 Rue Jean-Jacques Rousseau, 75001 Paris", distance: "0.3 km", rating: 5, price: "€€", description: "Ippudo connu pour ses ramen savoureux" },
  { name: "Ippudo Saint-Germain", cuisine: "ramen", address: "14 Rue Grégoire de Tours, 75006 Paris", distance: "1.3 km", rating: 5, price: "€€", description: "Ippudo dans un quartier chic" },

  // Master Poulet
  { name: "Master Poulet La Chapelle", cuisine: "poulet", address: "21 Rue Marx Dormoy, 75018 Paris", distance: "2.8 km", rating: 4, price: "€€", description: "Spécialités Master Poulet de La Chapelle" },
  { name: "Master Poulet 10ème", cuisine: "poulet", address: "Paris 10e arrondissement", distance: "1.5 km", rating: 4, price: "€€", description: "Master Poulet dans le 10e arrondissement" },
  { name: "Master Poulet Oberkampf", cuisine: "poulet", address: "Paris 11e arrondissement (quartier Oberkampf)", distance: "1.1 km", rating: 4, price: "€€", description: "Master Poulet au cœur d'Oberkampf" },

  // Burger
  { name: "Big Fernand", cuisine: "burger", address: "55 Rue du Faubourg Poissonnière, 75009 Paris", distance: "0.5 km", rating: 5, price: "€€", description: "Burgers gourmands chez Big Fernand" },
  { name: "Blend Hamburger", cuisine: "burger", address: "44 Rue d'Argout, 75002 Paris", distance: "0.7 km", rating: 4, price: "€€", description: "Burger élégant et savoureux" },
  { name: "Fresh Burritos", cuisine: "burger", address: "7 Rue de la Grande Truanderie, 75001 Paris", distance: "0.3 km", rating: 4, price: "€€", description: "Burritos frais et délicieux" },

  // Pizza
  { name: "Pizzeria Da Vinci", cuisine: "pizza", address: "159 Rue Saint-Martin, 75003 Paris", distance: "0.4 km", rating: 5, price: "€€€", description: "Pizza artisanale traditionnelle" },
  { name: "Pizza East", cuisine: "pizza", address: "15 Rue de Turbigo, 75002 Paris", distance: "0.6 km", rating: 4, price: "€€", description: "Pizza créative dans un décor moderne" },
  { name: "Ober Mamma", cuisine: "pizza", address: "107 Boulevard Richard-Lenoir, 75011 Paris", distance: "1.1 km", rating: 5, price: "€€€", description: "Pizza authentique et gourmande" },

  // France
  { name: "L'As du Fallafel", cuisine: "falafel", address: "34 Rue des Rosiers, 75004 Paris", distance: "0.9 km", rating: 5, price: "€", description: "Célèbre pour ses fallafels délicieux" },
  { name: "Bistrot Paul Bert", cuisine: "française", address: "18 Rue Paul Bert, 75011 Paris", distance: "1.5 km", rating: 5, price: "€€€", description: "Bistrot traditionnel très apprécié" },
  { name: "Le Comptoir du Relais", cuisine: "française", address: "9 Carrefour de l'Odéon, 75006 Paris", distance: "1.3 km", rating: 4, price: "€€", description: "Cuisine française moderne et inventive" },

  // Chine
  { name: "Dong Huong", cuisine: "chinoise", address: "14 Rue Louis Bonnet, 75011 Paris", distance: "1.4 km", rating: 4, price: "€", description: "Restaurant chinois proposant des plats authentiques" },
  { name: "Les Pâtes Vivantes", cuisine: "chinoise", address: "46 Rue du Faubourg Montmartre, 75009 Paris", distance: "0.8 km", rating: 5, price: "€€", description: "Spécialités de pâtes vivantes, à ne pas manquer" },
  { name: "Higuma", cuisine: "chinoise", address: "32 Rue Sainte-Anne, 75001 Paris", distance: "0.6 km", rating: 4, price: "€€", description: "Higuma est réputé pour ses plats savoureux" },

  // Ramen
  { name: "Ippudo Paris", cuisine: "ramen", address: "65 Rue Jean-Jacques Rousseau, 75001 Paris", distance: "0.3 km", rating: 5, price: "€€", description: "Ippudo propose des ramen délicieux et réconfortants" },
  { name: "Naritake", cuisine: "ramen", address: "31 Rue des Petits Champs, 75001 Paris", distance: "0.5 km", rating: 4, price: "€€", description: "Ramen savoureux dans un cadre convivial" },
  { name: "Dosanko", cuisine: "ramen", address: "49 Rue Sainte-Anne, 75002 Paris", distance: "0.7 km", rating: 4, price: "€€", description: "Dosanko est célèbre pour ses ramen authentiques" },

  // Budget "10" (≈10 €)
  { name: "L'As du Fallafel", cuisine: "falafel", address: "34 Rue des Rosiers, 75004 Paris", distance: "0.9 km", rating: 5, price: "€", description: "Le meilleur fallafel pour un budget réduit" },
  { name: "Breizh Café Crêperie", cuisine: "crêperie", address: "109 Rue Vieille du Temple, 75003 Paris", distance: "1.0 km", rating: 4, price: "€€", description: "Crêperie réputée dans le cœur de Paris" },
  { name: "Du Pain et des Idées", cuisine: "boulangerie", address: "4 Rue Yves Toudic, 75010 Paris", distance: "1.2 km", rating: 5, price: "€€", description: "Boulangerie artisanale offrant des pains et viennoiseries exceptionnels" },

  // Budget "50" (≈50 €)
  { name: "Le Meurice Alain Ducasse", cuisine: "française", address: "228 Rue de Rivoli, 75001 Paris", distance: "0.8 km", rating: 5, price: "€€€€", description: "Restaurant prestigieux au service d'une cuisine raffinée" },
  { name: "Guy Savoy", cuisine: "française", address: "18 Rue Troyon, 75017 Paris", distance: "2.1 km", rating: 5, price: "€€€€", description: "Expérience gastronomique exceptionnelle" },
  { name: "Le Grand Véfour", cuisine: "française", address: "17 Rue de Beaujolais, 75001 Paris", distance: "0.4 km", rating: 5, price: "€€€€", description: "L'un des meilleurs restaurants historiques de Paris" }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const suggestions = document.getElementById('suggestions');
const resultsContainer = document.getElementById('resultsContainer');
const searchResults = document.getElementById('searchResults');

// Fonction de recherche
function searchRestaurants(query) {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(lowerQuery) ||
        restaurant.cuisine.toLowerCase().includes(lowerQuery) ||
        restaurant.address.toLowerCase().includes(lowerQuery) ||
        (restaurant.description || "").toLowerCase().includes(lowerQuery)
    );
}

// Afficher les suggestions
function showSuggestions(results) {
    if (results.length === 0) {
        suggestions.style.display = 'none';
        return;
    }
    suggestions.innerHTML = results.slice(0, 5).map(restaurant =>
        `<div class="suggestion-item" onclick="selectSuggestion('${restaurant.name}')">${restaurant.name} - ${restaurant.cuisine}</div>`
    ).join('');
    suggestions.style.display = 'block';
}

// Sélectionner une suggestion
function selectSuggestion(name) {
    searchInput.value = name;
    suggestions.style.display = 'none';
    performSearch();
}

// Effectuer la recherche
function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        resultsContainer.style.display = 'none';
        return;
    }
    const results = searchRestaurants(query);
    displayResults(results);
}

// Afficher les résultats
function displayResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<p>Aucun restaurant trouvé pour votre recherche.</p>';
    } else {
        searchResults.innerHTML = results.map(restaurant => `
        <div class="result-item">
          <div class="result-title">${restaurant.name}</div>
          <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
          <p><strong>Adresse:</strong> ${restaurant.address}</p>
          <p><strong>Téléphone:</strong> ${restaurant.phone || 'Non renseigné'}</p>
          <p><strong>Note:</strong> ${Array(restaurant.rating + 1).join('⭐')}</p>
          <p><strong>Prix:</strong> ${restaurant.price || 'Non renseigné'}</p>
          <p><strong>Description:</strong> ${restaurant.description}</p>
        </div>
      `).join('');
    }
    resultsContainer.style.display = 'block';
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    const results = searchRestaurants(e.target.value);
    showSuggestions(results);
});
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        suggestions.style.display = 'none';
        performSearch();
    }
});
searchBtn.addEventListener('click', () => {
    suggestions.style.display = 'none';
    performSearch();
});
document.addEventListener('click', (e) => {
    if (!e.target.closest('.searchbar')) {
        suggestions.style.display = 'none';
    }
});