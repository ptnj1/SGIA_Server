const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();

app.use(express.json()); // Pour parser les requêtes JSON

// Remplacez `getUserFromDatabase` par votre propre fonction pour récupérer l'utilisateur depuis votre base de données
const getUserFromDatabase = async (email) => {
  // Retourne un objet user contenant l'email et le hash du mot de passe
  return {
    email: 'user@example.com',
    passwordHash: await bcrypt.hash('password', 10),
  };
};

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserFromDatabase(email);
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    // Si les identifiants ne correspondent pas, renvoyer une réponse d'erreur
    return res.status(401).json({ error: 'Mauvaises identifiants' });
  }
  const token = jwt.sign({ email: user.email }, 'votreSecretJWT'); // Remplacez `votreSecretJWT` par votre propre secret JWT
  res.json({ token });
});

app.listen(3001, () => {
  console.log('Serveur démarré sur le port 3001');
});
