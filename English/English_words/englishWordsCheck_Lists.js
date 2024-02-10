import {englishPronounsList} from "./englishPronouns_List.js"
import {englishConjunctionsList} from "./englishConjunctions_List.js"
import {englishPrepositionsList} from "./englishPrepositions_List.js"

/**
 * Controllo delle singole liste di pronomi
 */

function findDuplicateEnglishPronounsList () {
    for(let i = 0; i < englishPronounsList.length; i++){
        for(let j = englishPronounsList.length-1; j > i; j--){
            if(englishPronounsList[i] === englishPronounsList[j]){
                console.log("Il pronome inglese " + englishPronounsList[i] + " esiste già all'indice " + englishPronounsList.lastIndexOf(englishPronounsList[j]));
            }
        }
    }
}

/**
 * Controllo delle singole liste di congiunzioni
 */

function findDuplicateEnglishConjunctionsList () {
    for(let i = 0; i < englishConjunctionsList.length; i++){
        for(let j = englishConjunctionsList.length-1; j > i; j--){
            if(englishConjunctionsList[i] === englishConjunctionsList[j]){
                console.log("La congiunzione inglese " + englishConjunctionsList[i] + " esiste già all'indice " + englishConjunctionsList.lastIndexOf(englishConjunctionsList[j]));
            }
        }
    }
}

/**
 * Controllo delle singole liste di preposizioni
 */

function findDuplicateEnglishPrepositionsList () {
    for(let i = 0; i < englishPrepositionsList.length; i++){
        for(let j = englishPrepositionsList.length-1; j > i; j--){
            if(englishPrepositionsList[i] === englishPrepositionsList[j]){
                console.log("La preposizione inglese " + englishPrepositionsList[i] + " esiste già all'indice " + englishPrepositionsList.lastIndexOf(englishPrepositionsList[j]));
            }
        }
    }
}

findDuplicateEnglishPronounsList();

findDuplicateEnglishConjunctionsList();

findDuplicateEnglishPrepositionsList();