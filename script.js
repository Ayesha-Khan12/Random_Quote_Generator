function getUser() {
    const jokeContainer = document.getElementById('jokeContainer');

    fetch('https://v2.jokeapi.dev/joke/Programming')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Joke not found');
        }
        return response.json();
      })
      .then((data) => {
        jokeContainer.innerHTML = `
          <p>${data.joke || `${data.setup} <br> <strong>${data.delivery}</strong>`}</p>
        `;
      })
      .catch((error) => {
        jokeContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
      });
  }

  getUser();