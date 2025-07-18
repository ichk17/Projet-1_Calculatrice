/* ----------------------- Projet #1 : Calculatrice ----------------------- */

// MENU
let choix = prompt(
            'Que souhaitez-vous faire ? \n\n'
                     + '1. Addition \n'
                     + '2. Multiplication \n'
                     + '3. Soustraction \n'
                     + '4. Division \n');


// Récupérer les nombres 1, 2, 3 et 4
do {
    switch (choix) {
        case 'Addition':
            choix = "1";
            break;
        case 'Multiplication':
            choix = "2";
            break;
        case 'Soustraction':
            choix = "3";
            break;
        case 'Division':
            choix = "4";
            break;
    }
} while (choix !== '');