
/* Mobil meny funktion ska visas */
function menuFunction() {
  menu = document.getElementById("myMenu");
  menu.classList.toggle("responsive");
}



/* js kod för dropdown funktionen */
function buttonFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("myInput").value.toUpperCase();
  const articles = document.querySelectorAll("article[data-text]"); // Välj alla artiklar med data-text

  articles.forEach((article) => {
    const txtValue = article.dataset.text.toUpperCase(); // Hämta värdet från data-text
    if (txtValue.indexOf(input) > -1) {
      article.style.display = ""; // Visa artikeln
    } else {
      article.style.display = "none"; // Dölj artikeln
    }
  });
}




