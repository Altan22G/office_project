function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('/submitContactForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Το μήνυμά σας στάλθηκε με επιτυχία!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος.');
    });
  }