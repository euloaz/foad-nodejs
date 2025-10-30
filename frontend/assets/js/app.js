const API_URL = 'http://localhost:8002/api/users';

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des users:', error);
    }
}

function displayUsers(users) {
    const container = document.getElementById('users-container');
    container.innerHTML = ''; 
    
    users.forEach(user => {
        const card = createUserCard(user);
        container.appendChild(card);
    });
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    
    card.innerHTML = `
        <img id="avatar" src="${user.avatar}" alt="${user.prenom}">
        <h2>${user.prenom} ${user.nom}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Âge:</strong> ${user.age} ans</p>
        <p><strong>Adresse:</strong> ${user.adresse.rue}, ${user.adresse.ville}, ${user.adresse.pays}</p>
    `;
    
    return card;
}

fetchUsers();