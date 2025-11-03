const FULL_TEXT =
  "Bonjour! je m'appelle monsieur ducon, je suis personne, mon francais n'est pas du tout a la hauteur de ce test...";

const TEXT_LENGTH = FULL_TEXT.length;

let currentPosition = 0;
let currentText = "";

const addLetter = () => {
  currentText += FULL_TEXT[currentPosition];
  currentPosition++;
};

const renderText = () => {
  document.getElementById("app").innerHTML = currentText;
};

const typeWriter = () => {
  addLetter();
  renderText();
  if (currentPosition >= TEXT_LENGTH) {
    clearInterval(interval);
    console.log("DONE!");
  }
};

const interval = setInterval(typeWriter, 15);
