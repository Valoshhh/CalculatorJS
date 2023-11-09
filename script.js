const display = document.createElement('input');
display.type = 'text'; // Définir le type de l'élément comme un champ de texte
display.id = 'display'; // Attribuer un identifiant à l'élément
display.readOnly = true; // Rendre le champ de texte en lecture seule

// Créer un tableau de boutons
const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/', '.', 'DE'
];

// Créer les boutons et associer les gestionnaires d'événements
buttons.forEach(buttonValue => {
    const button = document.createElement('input'); // Créer un élément <input> pour le bouton
    button.type = 'button'; // Définir le type de l'élément comme un bouton
    button.value = buttonValue; // Attribuer la valeur du bouton (chiffre, opérateur, etc.)
    button.onclick = function () { // Attribuer une fonction pour gérer les clics sur le bouton
        if (buttonValue === 'C') { // Si le bouton est "C" (effacer)
            display.value = ''; // Effacer le champ d'affichage
        } else if  (buttonValue === 'DE') {
            display.value = display.value.toString().slice(0, -1)
          } else if (buttonValue === '=') { // Si le bouton est "=" (calcul)
            try {
                display.value = eval(display.value); // Évaluer l'expression et afficher le résultat
            } catch (error) {
                display.value = 'Error'; // En cas d'erreur, afficher "Error"
            }
        } else { // Pour les autres boutons (chiffres et opérateurs)
            display.value += buttonValue; // Ajouter la valeur du bouton au champ d'affichage
        } 
    };

    // Ajouter le bouton au corps du document
    document.body.appendChild(button);
});

// Ajouter l'élément d'affichage au corps du document
document.body.appendChild(display);