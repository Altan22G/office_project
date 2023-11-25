const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Χρήση των στατικών αρχείων στον φάκελο /public
app.use(express.static(path.join(__dirname, 'public')));

// Ρούτα για την αρχική σελίδα
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Εμφάνιση μηνύματος λάθους για αιτήσεις που δε βρήκαν το αντίστοιχο αρχείο
app.use((req, res, next) => {
  res.status(404).send('Συγγνώμη, το αίτημά σας δεν βρήκε το αντίστοιχο αρχείο.');
});

app.listen(port, () => {
  console.log(`Ο Server τρέχει στο http://localhost:${port}`);
});

// Αποθήκευση δεδομένων πελατών σε έναν απλό πίνακα (mock database)
const customers = [];

// Ρούτα για ανάκτηση όλων των πελατών
app.get('/customers', (req, res) => {
  res.json(customers);
});

// Ρούτα για προσθήκη νέου πελάτη
app.post('/customers', express.json(), (req, res) => {
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());