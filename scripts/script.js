 // SIDENAV

 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// PROGRESS SECTION

function add25(progClass) {
  const progLine = document.querySelector(progClass);
  progLine.value = (progLine.value + 25) % 125;
  localStorage.setItem(progClass, progLine.value);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lines').forEach(progBar => {
    const progClass = '.' + progBar.classList[1];
    progBar.value = parseInt(localStorage.getItem(progClass)) || 0;
  });
});

// Получение элементов прогресса и установка значений из localStorage
let progressBars = document.querySelectorAll('.lines');

progressBars.forEach((progBar) => {
  let progClass = '.' + progBar.classList[1];
  let storedValue = localStorage.getItem(progClass);

  // Проверим, что storedValue - числовое значение или преобразуем его в 0
  progBar.value = !isNaN(parseInt(storedValue)) ? parseInt(storedValue) : 0;
});


// METRONOME SECTION

function checkMark(className) {
  const cell = document.querySelector('.' + className);
  
  if (!cell) {
    console.error(`Element with class ${className} not found.`);
    return;
  }
  
  if (!cell.classList.contains('is-green')) {
    cell.classList.add('is-green');
    localStorage.setItem(className, 'true');
  } else {
    cell.classList.remove('is-green');
    localStorage.removeItem(className);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.x').forEach(cell => {
    const className = cell.classList[1];
    if (localStorage.getItem(className) === 'true') {
      cell.classList.add('is-green');
    }
    // Bind click event if needed
    cell.addEventListener('click', () => checkMark(className));
  });
});



// PROGRAM


document.addEventListener("DOMContentLoaded", () => {
  const allLevelsTable = document.querySelector("#all-levels-table");

  if (!allLevelsTable) {
    // Exit if the table is not present on the page
    return;
  }

  // Loop through the rows of the main table
  for (let i = 1; i < allLevelsTable.rows.length; i++) {
    const level = allLevelsTable.rows[i].cells[2].textContent;
    const targetSection = document.querySelector(`#level-${level}-table`);

    if (!targetSection) {
      continue; // Skip to the next row
    }

    // Add a new row to the target table
    const newRow = targetSection.insertRow();
    for (let j = 0; j < allLevelsTable.rows[i].cells.length; j++) {
      const cell = newRow.insertCell();
      cell.textContent = allLevelsTable.rows[i].cells[j].textContent;
    }
  }
});
