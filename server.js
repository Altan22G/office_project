const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Χρησιμοποιούμε το body-parser για να διαχειριστούμε τα δεδομένα από τη φόρμα
app.use(bodyParser.urlencoded({ extended: true }));

// Ορίζουμε τον φάκελο views ως τον φάκελο που περιέχει τα HTML
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin_p.html'));
});

app.get('/insurance-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'car.html'));
});

// Στέλνουμε τα αρχεία HTML ως στατικά αρχεία
app.use(express.static('src'));

// Διαδρομή για την αποδοχή των δεδομένων από τη φόρμα
app.post('/submitInsuranceForm', (req, res) => {
  // Εδώ μπορείτε να χειριστείτε τα δεδομένα που έχουν σταλεί από τη φόρμα
  const formData = req.body;
  console.log(formData);

  // Εδώ μπορείτε να προβείτε σε άλλες ενέργειες, όπως αποθήκευση των δεδομένων σε βάση δεδομένων

  // Απλή απάντηση για την ώρα
  res.send('Τα δεδομένα σας έχουν ληφθεί με επιτυχία!');
});

app.use(express.static(path.join(__dirname, 'public')));  

app.listen(port, () => {
  console.log(`Ο Server τρέχει στο http://localhost:${port}`);
});