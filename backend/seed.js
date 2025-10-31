const { faker } = require('@faker-js/faker');
const User = require('./Models/userModel');

const seedUsers = async (nombre) => {
  try {
    const count = await User.countDocuments();
    if (count === 0) {
      const users = [];
      console.log('Création de users...');
      for (let i = 0; i < nombre; i++) {
        users.push({
          prenom: faker.person.firstName(),
          nom: faker.person.lastName(),
          email: faker.internet.email(),
          age: faker.number.int({ min: 18, max: 80 }),
          adresse: {
            rue: faker.location.streetAddress(),
            ville: faker.location.city(),
            pays: faker.location.country()
          },
          avatar: faker.image.avatar()
        });
      }
      await User.insertMany(users);
      console.log('Users ajoutés à la BDD!');
    }
  } catch (err) {
    console.error("Erreur lors du seed :", err);
  }
};

seedUsers(10);