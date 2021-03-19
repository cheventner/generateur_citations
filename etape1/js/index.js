// Chaque citation est la combinaison d'au moins 3 morceaux de
// phrases ( à vous de préparer ces morceaux de phrase )
// A défaut d'être intelligible, la phrase doit être cohérente (pas de point d'exclamation
// au milieu d'une phrase)

// tableaux des citations / sentencesTab
let sentencesTab = [
  "pour se construire",
  "à l’aube du millénaire",
  "afin d’atteindre le bonheur",
  "pendant le confinement",
  "pour arriver au bout",
  "il faut",
  "il aurait pu",
  "il fallait",
  "il pourrait",
  "je pense que des fois",
  "Cupidon devrait s'inscrire",
  "dans un club de tir",
  "on aurait pu",
  "trouver sa voie",
  "mettre la notice",
  "indiquer le bon chemin",
  "faire un labyrinthe",
  "fournir les bonnes briques",
];

// Création des parties aléatoires
function getRandom(tabQuote) {
  // création d'un nouveau tableau afin ne pas vider le tableau sentencestab
  let sentences = tabQuote.slice();
  let quote = "";
  // boucle pour générer 3 morceaux de phrases différents
  for (let i = 0; i < 3; i++) {
    let randomSentence = [Math.floor(Math.random() * sentences.length)];
    quote += sentences[randomSentence];
    
    // Condition qui affecte une virgule à chaque partie de phrase
    if (i <= 1) {
      quote += ", ";
    }
    sentences.splice(randomSentence, 1);
    }
  // Ajout du point en fin de phrase
  quote = `${quote}${"."}`;
  // innerHTML renvoi dans l'id "quote" du HTML, la 1ere lettre en majuscule + le reste en minuscule
  document.querySelector("#quote").innerHTML =
    quote.charAt(0).toUpperCase() + quote.substring(1).toLowerCase();
  return quote;
}
// Bouton qui génère une nouvelle citation à chaque clic
let btnGenerer = document.querySelector(`#btn-generate`);
btnGenerer.addEventListener(`click`, () => {
  getRandom(sentencesTab);
});
