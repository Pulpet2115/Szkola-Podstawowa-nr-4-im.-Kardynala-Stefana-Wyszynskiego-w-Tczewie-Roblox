const klasy = ["8A", "8B", "7A", "7B", "6A", "6B"];

klasy.forEach(klasa => {
  const kontener = document.querySelector(`#${klasa} .uczniowie`);

  // tymczasowe przykładowe uczniowie (ty później będziesz mógł zmieniać)
  const uczniowie = []; // pusta lista na start

  uczniowie.forEach(u => {
    const div = document.createElement("div");
    div.textContent = `${u.imie} ${u.nazwisko} - Średnia: ${u.srednia ?? "brak"}`;
    kontener.appendChild(div);
  });
});

