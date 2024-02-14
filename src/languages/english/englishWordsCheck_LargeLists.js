import {englishVerbsLargeList} from "./models/englishVerbs_LargeList.js";
import {englishNounsLargeList} from "./models/englishNouns_LargeList.js";
import {englishAdjectivesLargeList} from "./models/englishAdjectives_LargeList.js";
import {englishAdverbsLargeList} from "./models/englishAdverbs_LargeList.js";

/**
 * Checking large list of English verbs
 */

function findDuplicateEnglishVerbsLargeList () {
    for(let i=0; i<englishVerbsLargeList.length; i++){
        for(let j=englishVerbsLargeList.length-1; j>i; j--){
            if(englishVerbsLargeList[i] === englishVerbsLargeList[j]){
                console.log("The English verb " + englishVerbsLargeList[i] + " already exists at index " + englishVerbsLargeList.lastIndexOf(englishVerbsLargeList[j]));
            }
        }
    }
}

/**
 * Checking large list of English nouns
 */

function findDuplicateEnglishNounsLargeList () {
    for(let i = 0; i < englishNounsLargeList.length; i++){
        for(let j = englishNounsLargeList.length-1; j > i; j--){
            if(englishNounsLargeList[i] === englishNounsLargeList[j]){
                console.log("The English noun " + englishNounsLargeList[i] + " already exists at index " + englishNounsLargeList.lastIndexOf(englishNounsLargeList[j]));
            }
        }
    }
}

/**
 * Checking large list of English adjectives
 */

function findDuplicateEnglishAdjectivesLargeList () {
    for(let i = 0; i < englishAdjectivesLargeList.length; i++){
        for(let j = englishAdjectivesLargeList.length-1; j > i; j--){
            if(englishAdjectivesLargeList[i] === englishAdjectivesLargeList[j]){
                console.log("The English adjective " + englishAdjectivesLargeList[i] + " already exists at index " + englishAdjectivesLargeList.lastIndexOf(englishAdjectivesLargeList[j]));
            }
        }
    }
}

/**
 * Checking large list of English adverbs
 */

function findDuplicateEnglishAdverbsLargeList () {
    for(let i = 0; i < englishAdverbsLargeList.length; i++){
        for(let j = englishAdverbsLargeList.length-1; j > i; j--){
            if(englishAdverbsLargeList[i] === englishAdverbsLargeList[j]){
                console.log("The English adverb " + englishAdverbsLargeList[i] + " already exists at index " + englishAdverbsLargeList.lastIndexOf(englishAdverbsLargeList[j]));
            }
        }
    }
}

findDuplicateEnglishVerbsLargeList();

findDuplicateEnglishNounsLargeList();

findDuplicateEnglishAdjectivesLargeList();

findDuplicateEnglishAdverbsLargeList();