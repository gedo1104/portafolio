
tailwind.config = {
    darkMode: 'class', // habilitar dark mode con clase
  }
  
// Script Dark/Light 

const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
});