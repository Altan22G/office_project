const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Ορίζουμε τον transporter για την αποστολή email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Το email από το οποίο θα στέλνετε τα email
    pass: 'your_email_password' // Ο κωδικός του email από το οποίο θα στέλνετε τα email
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submitForm', (req, res) => {
  const formData = req.body;
  console.log(formData);

  // Στέλνουμε το email
  const mailOptions = {
    from: 'petraltan2008@gmail.com',
    to: 'petraltan2008@example.com', // Το email του παραλήπτη
    subject: 'Νέο μήνυμα επικοινωνίας',
    text: `Όνομα: ${formData.name}\nEmail: ${formData.email}\nΜήνυμα: ${formData.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Το μήνυμά σας στάλθηκε με επιτυχία.');
    }
  });
});

app.listen(port, () => {
  console.log(`Ο Server τρέχει στο http://localhost:${port}`);
});
