import {englishPronounsList} from "./models/englishPronouns_List.js"
import {englishConjunctionsList} from "./models/englishConjunctions_List.js"
import {englishPrepositionsList} from "./models/englishPrepositions_List.js"

/**
 * Checking list of English pronouns
 */

function findDuplicateEnglishPronounsList () {
    for(let i = 0; i < englishPronounsList.length; i++){
        for(let j = englishPronounsList.length-1; j > i; j--){
            if(englishPronounsList[i] === englishPronounsList[j]){
                console.log("The english pronoun " + englishPronounsList[i] + " already exists at index " + englishPronounsList.lastIndexOf(englishPronounsList[j]));
            }
        }
    }
}

/**
 * Checking list of English conjunctions
 */

function findDuplicateEnglishConjunctionsList () {
    for(let i = 0; i < englishConjunctionsList.length; i++){
        for(let j = englishConjunctionsList.length-1; j > i; j--){
            if(englishConjunctionsList[i] === englishConjunctionsList[j]){
                console.log("The english conjunction " + englishConjunctionsList[i] + " already exists at index " + englishConjunctionsList.lastIndexOf(englishConjunctionsList[j]));
            }
        }
    }
}

/**
 * Checking list of English prepositions
 */

function findDuplicateEnglishPrepositionsList () {
    for(let i = 0; i < englishPrepositionsList.length; i++){
        for(let j = englishPrepositionsList.length-1; j > i; j--){
            if(englishPrepositionsList[i] === englishPrepositionsList[j]){
                console.log("The english preposition " + englishPrepositionsList[i] + " already exists at index " + englishPrepositionsList.lastIndexOf(englishPrepositionsList[j]));
            }
        }
    }
}

findDuplicateEnglishPronounsList();

findDuplicateEnglishConjunctionsList();

findDuplicateEnglishPrepositionsList();