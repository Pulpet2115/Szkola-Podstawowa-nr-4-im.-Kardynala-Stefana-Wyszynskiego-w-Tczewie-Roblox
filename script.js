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
console.log("Strona gotowa, JS działa!");

const toggleBtn = document.getElementById('toggle-dark');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Zmieniamy ikonę przycisku
  if(document.body.classList.contains('dark-mode')){
    toggleBtn.textContent = '☀️ Tryb jasny';
  } else {
    toggleBtn.textContent = '🌙 Tryb ciemny';
  }
});

const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
