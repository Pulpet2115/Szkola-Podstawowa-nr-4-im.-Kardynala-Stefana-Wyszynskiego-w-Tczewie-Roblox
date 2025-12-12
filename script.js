const classes = ["8A", "8B", "7A", "7B", "6A", "6B"];
const data = {};

const container = document.getElementById("classes");

classes.forEach(cls => {
  data[cls] = [];

  const card = document.createElement("div");
  card.className = "class-card";

  card.innerHTML = `
    <div class="class-header">
      <h2>${cls}</h2>
      <button onclick="addStudent('${cls}')">➕ Dodaj ucznia</button>
    </div>
    <div id="${cls}-list"></div>
  `;

  container.appendChild(card);
});

function addStudent(cls) {
  const name = prompt("Imię i nazwisko ucznia:");
  if (!name) return;

  data[cls].push({ name, grades: [] });
  render(cls);
}

function addGrade(cls, index) {
  const grade = Number(prompt("Ocena 1–6:"));
  if (grade < 1 || grade > 6) return;

  data[cls][index].grades.push(grade);
  render(cls);
}

function avg(grades) {
  if (grades.length === 0) return "-";
  return (grades.reduce((a,b)=>a+b,0) / grades.length).toFixed(2);
}

function render(cls) {
  const list = document.getElementById(`${cls}-list`);
  list.innerHTML = "";

  data[cls].forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "student";

    div.innerHTML = `
      <span><b>${s.name}</b></span>
      <span>Oceny: ${s.grades.join(", ") || "-"}</span>
      <span>Średnia: ${avg(s.grades)}</span>
      <button onclick="addGrade('${cls}', ${i})">➕ Ocena</button>
    `;

    list.appendChild(div);
  });
}

// TRYB CIEMNY
const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// PRZYCISKI "ZARZĄDZAJ"
document.querySelectorAll(".zarzadzaj").forEach(btn => {
  btn.addEventListener("click", () => {
    const klasa = btn.closest(".klasa").dataset.klasa;
    alert("Zarządzanie klasą: " + klasa);
  });
});
