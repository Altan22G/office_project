const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

let formData;  // Μετακινήστε τη δήλωση έξω από το app.post

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/car', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'car.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'contact.html'));
});

// Ορίζουμε τον transporter για την αποστολή email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'petraltan2008@gmail.com', // Το email από το οποίο θα στέλνετε τα email
    pass: '@ltpetr2008' // Ο κωδικός του email από το οποίο θα στέλνετε τα email
  }
});

app.post('/submitContactForm', handleContactForm);

function handleContactForm(req, res) {
  formData = req.body;  // Εδώ ορίζεται το formData
  console.log(formData);

  // Στέλνουμε το email
  const email = formData.email;
  const mailOptions = {
    from: email,
    to: 'petraltan2008@example.com',
    subject: 'Νέο μήνυμα επικοινωνίας',
    text: `Όνομα: ${formData.name}\nEmail: ${formData.email}\nΜήνυμα: ${formData.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Το μήνυμά σας στάλθηκε με επιτυχία.');
    }
  });
}

app.listen(port, () => {
  console.log(`Ο Server τρέχει στο http://localhost:${port}`);
});
