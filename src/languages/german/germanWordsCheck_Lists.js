import {germanPronounsList} from "./lista_pronomi_tedeschi.js"
import {germanConjunctionsList} from "./lista_congiunzioni_tedesche.js"
import {germanPrepositionsList} from "./lista_preposizioni_tedesche.js"

/**
 * Controllo delle singole liste di pronomi
 */

function findDuplicateGermanPronounsList () {
    for(let i = 0; i < germanPronounsList.length; i++){
        for(let j = germanPronounsList.length-1; j > i; j--){
            if(germanPronounsList[i] === germanPronounsList[j]){
                console.log("Il pronome tedesco " + germanPronounsList[i] + " esiste già all'indice " + germanPronounsList.lastIndexOf(germanPronounsList[j]));
            }
        }
    }
}

/**
 * Controllo delle singole liste di congiunzioni
 */

function findDuplicateGermanConjunctionsList () {
    for(let i = 0; i < germanConjunctionsList.length; i++){
        for(let j = germanConjunctionsList.length-1; j > i; j--){
            if(germanConjunctionsList[i] === germanConjunctionsList[j]){
                console.log("La congiunzione tedesca " + germanConjunctionsList[i] + " esiste già all'indice " + germanConjunctionsList.lastIndexOf(germanConjunctionsList[j]));
            }
        }
    }
}

/**
 * Controllo delle singole liste di preposizioni
 */

function findDuplicateGermanPrepositionsList () {
    for(let i = 0; i < germanPrepositionsList.length; i++){
        for(let j = germanPrepositionsList.length-1; j > i; j--){
            if(germanPrepositionsList[i] === germanPrepositionsList[j]){
                console.log("La preposizione tedesca " + germanPrepositionsList[i] + " esiste già all'indice " + germanPrepositionsList.lastIndexOf(germanPrepositionsList[j]));
            }
        }
    }
}

findDuplicateGermanPronounsList();

findDuplicateGermanConjunctionsList();

findDuplicateGermanPrepositionsList();