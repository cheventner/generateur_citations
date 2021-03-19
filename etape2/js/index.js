// Chaque citation est la combinaison d'au moins 3 morceaux de
// phrases (à vous de préparer ces morceaux de phrase)
// A défaut d'être intelligible, la phrase doit être cohérente (pas de point d'exclamation
// au milieu d'une phrase)

// tableaux des citations / sentencesTab

const yodaSentences = {
  titre: "Maître Yoda",
  sentences: [
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
  ],
};
const doyaSentences = {
  titre: "Maître Doya",
  sentences: [
    "au delà",
    "enfin libre",
    "c'est l'avenir",
    "le printemps",
    "au petit matin",
    "est là",
    "le petit déjeuner",
    "il fallait",
    "il pourrait",
    "il est important",
    "battre le fer",
    "en accord",
    "est servi",
    "le petit déjeuner",
    "au boulot",
    "pour les vacances",
    "à contrario",
    "une opportunité",
  ],
};

const sentencesTab = [yodaSentences, doyaSentences];
const titlesTab = sentencesTab.map((sentenceObj) => sentenceObj.titre);
const numberOfQuote = document.querySelector("#quote-number");
const typeOfQuote = document.querySelector("#quote-type");
const btnGenerer = document.getElementById(`btn-generate`);

//! Variable pour le paramètrage de la fenetre pop-up
const swalFire = (html) => {
  swal.fire({
      title: "Voici votre citation",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      type: "success",
      html,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Recommencer",
      confirmButtonColor: "#686666",
      confirmButtonAriaLabel: "Recommencer",
      cancelButtonText: "Quitter",
      cancelButtonAriaLabel: "Quitter",
    })
    .then((response) => {
      if (response.isConfirmed) {
        btnGenerer.click();
      }
    });
};

//! Remplissage du select "des types de citations"
function fillSelect(textsTab, $select) {
  for (let i = 0; i < textsTab.length; i++) {
    let $option = document.createElement("option");

    $option.value = i;
    $option.text = textsTab[i];
    $select.append($option);
  }
}
fillSelect(titlesTab, typeOfQuote);

//! Création des parties aléatoires
function getRandom(tabQuote, numberToDisplay) {
  let elementHtmlQuote = document.createElement("div");
  for (let i = 0; i < numberToDisplay; i++) {
    let sentences = tabQuote.slice();
    let quote = "";
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      const randomSentence = sentences[randomIndex];
      quote += randomSentence;
      if (i === 0) {
        quote += ", ";
        quote =
          quote.charAt(0, 1).toUpperCase() + quote.substring(1).toLowerCase();
      }
      else if( i === 1){
        quote += " ";
      }
      else if (i === 2) {
        quote += ".";
      }
          sentences.splice(randomIndex, 1);
    }
    let generateQuote = document.createElement("blockquote");
    generateQuote.append(quote);
    elementHtmlQuote.append(generateQuote);
  }

  return elementHtmlQuote;
}

//! Bouton qui génère la citation d'après les choix de l'utilisateur
btnGenerer.addEventListener(`click`, () => {
  const numberToDisplay = numberOfQuote.value;
  const typeOfDisplay = typeOfQuote.value;
  const tabtoDisplay = sentencesTab[typeOfDisplay];
  // const ponctuation = tabtoDisplay;
  if (tabtoDisplay) {
    const quotesBlock = getRandom(tabtoDisplay.sentences, numberToDisplay);

    swalFire(quotesBlock);
  }
});

// les morceaux de phrases doivent être différents en plus du Math.random il faut eviter les doublons OK
// le premier mot de la citation doit avoir une majuscule OK
// le dernier mot de la citation doit etre suivi d'un point
// Pouvoir mettre en ordre les morceaux de phrases dans citations
//vider le tableau après le clic /OK/ création d'un tableau temporaire qui receptionne les 3 bouts de phrases et se vident
