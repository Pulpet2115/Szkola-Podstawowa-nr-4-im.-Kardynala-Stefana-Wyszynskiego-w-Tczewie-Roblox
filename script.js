// script.js

// Puste listy uczniów w klasach
const klasy = {
  "8A": [],
  "8B": [],
  "7A": [],
  "7B": [],
  "6A": [],
  "6B": []
};

// Funkcja tworząca sekcje klas w HTML
function wyswietlKlasy() {
  const container = document.getElementById('klasy');
  container.innerHTML = ''; // czyścimy zawartość

  for (const nazwaKlasy in klasy) {
    const klasaDiv = document.createElement('div');
    klasaDiv.className = 'klasa';
    
    const tytul = document.createElement('h2');
    tytul.textContent = nazwaKlasy;
    klasaDiv.appendChild(tytul);

    const lista = document.createElement('ul');
    if (klasy[nazwaKlasy].length === 0) {
      const puste = document.createElement('li');
      puste.textContent = 'Brak uczniów';
      lista.appendChild(puste);
    } else {
      klasy[nazwaKlasy].forEach(uczen => {
        const li = document.createElement('li');
        li.textContent = `${uczen.imie} – Średnia: ${uczen.srednia ?? 'brak ocen'}`;
        lista.appendChild(li);
      });
    }

    klasaDiv.appendChild(lista);
    container.appendChild(klasaDiv);
  }
}

// Wywołanie na start
wyswietlKlasy();

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  background-color: #f9f9f9;
  color: #333;
}

header {
  background-color: #4b6cb7;
  color: white;
  padding: 1rem;
  text-align: center;
}

header nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0.5rem 0 0 0;
}

header nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

main {
  padding: 2rem;
}

h2 {
  color: #4b6cb7;
  margin-bottom: 1rem;
}

.klasa-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.klasa {
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  flex: 1 1 100px;
  text-align: center;
  font-weight: bold;
}

.ogloszenie {
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 5px solid #4b6cb7;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

footer {
  background-color: #4b6cb7;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

