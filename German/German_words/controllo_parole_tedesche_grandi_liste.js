import {bigGermanVerbsList} from "./grande_lista_verbi_tedeschi.js";
import {bigGermanNounsList} from "./grande_lista_sostantivi_tedeschi.js";
import {bigGermanAdjectivesList} from "./grande_lista_aggettivi_tedeschi.js";
import {bigGermanAdverbsList} from "./grande_lista_avverbi_tedeschi.js";

function findDuplicateBigVerbsList () {
    for(let i=0; i<bigGermanVerbsList.length; i++){
        for(let j=bigGermanVerbsList.length-1; j>i; j--){
            if(bigGermanVerbsList[i] === bigGermanVerbsList[j]){
                console.log("Il verbo tedesco " + bigGermanVerbsList[i] + " esiste già all'indice " + bigGermanVerbsList.lastIndexOf(bigGermanVerbsList[j]));
            }
        }
    }
}

function findDuplicateBigNounsList () {
    for(let i = 0; i < bigGermanNounsList.length; i++){
        for(let j = bigGermanNounsList.length-1; j > i; j--){
            if(bigGermanNounsList[i] === bigGermanNounsList[j]){
                console.log("Il sostantivo tedesco " + bigGermanNounsList[i] + " esiste già all'indice " + bigGermanNounsList.lastIndexOf(bigGermanNounsList[j]));
            }
        }
    }
}

function findDuplicateBigGermanAdjectivesList () {
    for(let i = 0; i < bigGermanAdjectivesList.length; i++){
        for(let j = bigGermanAdjectivesList.length-1; j > i; j--){
            if(bigGermanAdjectivesList[i] === bigGermanAdjectivesList[j]){
                console.log("L'aggettivo tedesco " + bigGermanAdjectivesList[i] + " esiste già all'indice " + bigGermanAdjectivesList.lastIndexOf(bigGermanAdjectivesList[j]));
            }
        }
    }
}

function findDuplicateBigGermanAdverbsList () {
    for(let i = 0; i < bigGermanAdverbsList.length; i++){
        for(let j = bigGermanAdverbsList.length-1; j > i; j--){
            if(bigGermanAdverbsList[i] === bigGermanAdverbsList[j]){
                console.log("L'avverbio tedesco " + bigGermanAdverbsList[i] + " esiste già all'indice " + bigGermanAdverbsList.lastIndexOf(bigGermanAdverbsList[j]));
            }
        }
    }
}

findDuplicateBigVerbsList();

findDuplicateBigNounsList();

findDuplicateBigGermanAdjectivesList();

findDuplicateBigGermanAdverbsList();