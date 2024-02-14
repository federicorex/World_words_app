export {bigGermanAdverbsList};

let bigGermanAdverbsList = [
    "zu", "auf", "auch", "nicht", "wie", "so", "noch", "vor", "nur", "viel", "mehr", "gut", "erst", "wieder", "dann", "schon", "immer", "doch", "dabei", "sehr", "da", "nun", "damit", "jetzt", "ganz", "bereits", "rund", "hier", "heute", "selbst", "hoch", "dort", "etwa", "etwas", "weiter", "wo", "dazu", "dafür", "einmal", "allerdings", "kurz", "also", "einfach", "mal", "schnell", "gerade", "zwar", "fast", "davon", "gleich", "natürlich", "jedoch", "darauf, drauf", "besonders", "oft", "wohl", "gar", "gern, gerne", "eigentlich", "nie", "lange", "eben", "oben", "warum", "allein", "kaum", "darüber, drüber", "deshalb", "vielleicht", "sogar", "damals", "sonst", "möglichst", "daran, dran", "anders", "wirklich", "morgen", "je", "eher", "darin, drin", "schließlich", "daher", "recht", "gemeinsam", "dadurch", "zunächst", "bisher", "irgendwie", "manchmal", "halt", "wahrscheinlich", "her", "ebenso", "danach", "dagegen", "ziemlich", "sofort", "außerdem", "inzwischen", "plötzlich", "persönlich", "bald", "genug", "endlich", "insbesondere", "hin", "ebenfalls", "gestern", "jedenfalls", "zusammen", "wobei", "bloß", "wann", "darum", "jeweils", "insgesamt", "unten", "vorher", "beispielsweise", "meist", "trotzdem", "zudem", "leider", "mindestens", "zumindest", "zuerst", "unbedingt", "hinaus", "zuletzt", "dennoch", "lieber", "zugleich", "derzeit", "nochmals, nochmal", "zuvor", "teilweise", "daraus", "miteinander", "durchaus", "deswegen", "überall", "andererseits", "überhaupt", "längst", "stets", "darunter", "lediglich", "weiterhin", "somit", "immerhin", "genauso", "vorn, vorne", "weg", "zurzeit", "wenigstens", "mittlerweile", "wiederum", "sicherlich", "soweit", "vielmehr", "irgendwann", "bislang", "übrigens", "anschließend", "heraus", "dahin", "erstmals", "ursprünglich", "unterwegs", "hingegen", "diesmal", "los", "vorbei", "hinten", "links", "rechts", "möglicherweise", "ansonsten", "online", "et cetera, etc.", "letztlich", "egal", "äußerst", "ohnehin", "einst", "zweimal", "vermutlich", "zurück", "mitten", "angenehm", "davor", "seitdem", "herum", "spätestens", "nahezu", "plus", "momentan", "demnach", "stattdessen", "kürzlich", "daraufhin", "hinzu", "absolut", "raus", "zirka, circa, ca.", "nämlich", "angeblich", "begeistert", "abends", "morgens", "nachts", "früher", "zuhause, zu Hause", "irgendwo", "meistens", "draußen", "sowieso", "einerseits", "sozusagen", "insofern", "nachher", "wieso", "auseinander", "niemals", "freilich", "allzu", "daneben", "woher", "leid", "drüben", "keineswegs", "hinauf", "wohin", "höchstens", "weshalb", "normalerweise", "einander", "beinahe, beinah", "dahinter", "gegebenenfalls", "hierher", "ausgerechnet", "hinein", "hoffentlich", "geradezu", "zugrunde liegen", "innen", "hierzu", "indes", "hierbei", "vorwiegend", "derart", "wozu", "aufeinander", "dorthin", "hierfür", "zustande", "voneinander", "mehrmals", "quer", "teils", "womit", "dementsprechend", "einigermaßen", "hinweg", "quasi", "worauf", "dreimal", "ferner", "seither", "wonach", "vorerst", "dazwischen", "hinterher", "nebeneinander", "anfangs", "jederzeit", "herein, rein", "heuer", "jemals", "nebenbei", "mitunter", "fort", "extra", "demnächst", "heutzutage", "nunmehr", "untereinander", "letztendlich", "womöglich", "herkömmlich", "gleichwohl", "oftmals", "sogleich", "voraus", "allenfalls", "durcheinander", "gewissermaßen", "unterdessen", "zueinander", "abschließend", "wovon", "zwischendurch", "anscheinend", "inwieweit", "woran", "weitaus", "gänzlich", "namens", "umsonst", "wodurch", "aneinander", "beiseite", "daheim", "folglich", "vergleichsweise", "wofür", "nirgendwo", "zweifellos", "erstens", "worüber", "heim", "vorab", "dienstags", "vorwärts", "rauf", "vormittags", "minus", "worum", "zweitens", "nirgends", "vorgestern", "nebenan", "werktags", "hinunter", "sonntags", "freitags", "montags", "rückwärts", "mittwochs", "eh", "drinnen", "viermal", "glücklicherweise", "aufwärts", "mittags", "nachmittags", "zweifach", "samstags", "donnerstags", "woanders", "neulich", "getrennt", "drittens", "zumeist", "tagsüber", "üblicherweise", "gleichfalls", "runter", "schnellstmöglich", "separat", "ineinander", "schätzungsweise", "vorhin", "meinetwegen", "hinüber", "halbtags", "zehnmal", "wochentags", "übermorgen", "widerstandslos", "vorzugsweise", "wovor", "abwärts", "tausendmal", "geradeaus", "hierhin", "huckepack"
];

let totalLengthBigGermanAdverbsList = bigGermanAdverbsList.length;

let checkPositionBigGermanAdverbsList = () => {
    for(let i = 0; i < bigGermanAdverbsList.length; i++) {
        switch (i) {
            case 100:
            case 200:
            case 300:
                console.log(bigGermanAdverbsList[i]);
                break;
        }
    }
}

// console.log(totalLengthBigGermanAdverbsList);
// checkPositionBigGermanAdverbsList();


// for(let i = 0; i < bigGermanAdverbsList.length; i++){
//     if(i == 100){
//         console.log(bigGermanAdverbsList[i]);
//     }
// }

// for(let i = 0; i < bigGermanAdverbsList.length; i++){
//     if(i == 200){
//         console.log(bigGermanAdverbsList[i]);
//     }
// }