
const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {

    const response = await fetch('http://localhost:63342/untitled/contact.html', {
      method: 'POST',
      body: formData,
    });


    if (response.ok) {

      statusMessage.style.display = 'block';
      statusMessage.style.color = 'green';
      statusMessage.textContent = 'Message envoyé avec succès !';
      form.reset();
    } else {
      const errorText = await response.text();
      throw new Error(errorText || 'Une erreur est survenue du côté du serveur');
    }
  } catch (error) {

    statusMessage.style.display = 'block';
    statusMessage.style.color = 'red';
    statusMessage.textContent = `Erreur : ${error.message}`;
    console.error('Erreur complète :', error);
  }
});