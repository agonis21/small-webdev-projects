function returnListPermutations(input_list, n) {
    var all_permutations = [];

    if (n == 1) { return input_list; }
    if (n > 1) {
        for (var i = 0; i < input_list.length; i++) {
            var list_below = returnListPermutations(input_list, n - 1);
            for (var k = 0; k < list_below.length; k++) {
                all_permutations.push(input_list[i] + "/" + list_below[k]);
            }
        }
    }

    //updating progress
    var progress = document.querySelector(".progress");
    progress.innerText += "|";

    return all_permutations;

    /* for (var i = 0; i < input_list.length; i++) {
         return returnListPermutations(input_list, n - 1);
     }*/

}
function removePronounRepeat(input_list) {
    var new_list = [];
    var flag;

    for (var i = 0; i < input_list.length; i++) {
        flag = false;

        var pronouns = input_list[i].split("/");
  
        for (var k = 0; k < pronouns.length; k++) {
            for (var m = 0; m < pronouns.length; m++) {
                if (k != m) {
                    if (pronouns[m] == pronouns[k]) {
                        flag = true;
                    }
                } 
            }
        }

        if (!flag) { new_list.push(input_list[i]); }
    }

    

    return new_list;
}
window.onload = function () {
    //list from this site: https://www.fastcompany.com/90635735/instagram-profile-pronouns-heres-how-to-display-your-gender-identity
    var pronoun_list_raw = `co / cos
                    e / ey / em / eir
                    fae / faer
                    he / him / his
                    she / her / hers
                    mer / mers
                    ne / nir / nirs
                    nee / ner / ners
                    per / pers
                    they / them / theirs
                    thon / thons
                    ve / ver / vis
                    vi / vir
                    xe / xem / xyr
                    ze / zie / zir / hir`;
    //regex to convert raw text to js array
    var pronoun_list = pronoun_list_raw.split(/[\s\n,/]+/);

    var container = document.querySelector(".container");
    var pronounDivs = [];
    for (var i = 0; i < 1; i++) {
        pronounDivs.push(addCombinationDiv());
        var pronounLabel = pronounDivs[i].querySelector(".combinationLabel");
        var pronounComboTile = pronounDivs[i].querySelector(".combinationTable");

        //filling up pronounDiv[i] with content
        pronounLabel.innerText = (i + 1) + "-pronoun Combo";
        //fill the up the tables

        var combo_pronoun_list = removePronounRepeat(returnListPermutations(
            pronoun_list, i+1));

        for (var k = 0; k < combo_pronoun_list.length; k++) {
            addPronounComboTile(pronounComboTile, combo_pronoun_list[k]);
        }
       
        
    }

    var generate_btn = document.querySelector(".generate button");
    generate_btn.addEventListener("click", function (e) {
        var randPronounDiv = document.querySelector(".generate .randomPronoun");
        var randPronounText = generateRandomPronoun(randPronounDiv, Math.floor(Math.random() * 4));

        randPronounDiv.innerText = randPronounText;

    });

}

function generateRandomPronoun(pronoun_list, pronoun_length) {
    var pronouns = [];

    for (var i = 0; i < pronoun_length; i++) {
        var randPronoun = pronoun_list[Math.floor(Math.random() * pronoun_list.length)];

        if (pronouns.includes(randPronoun)) {
            i--;
        } else {
            pronouns.push(randPronoun);
        }
    }

    return pronouns.join("/");

}

function addPronounComboTile(element, pronoun) {
    var pronounDiv = document.createElement("div");
    pronounDiv.className = "pronounTile";
    pronounDiv.innerText = pronoun;

    return element.appendChild(pronounDiv);
}

function addCombinationDiv() {
    /*
    <div class="combinationDiv">
        <div class="combinationLabel"></div>
        <div class="combinationTable">

        </div>
    </div>
    */

    var combDiv = document.createElement("div");
    combDiv.className = "combinationnDiv";
    var combLabel = document.createElement("div");
    combLabel.className = "combinationLabel";
    var combTable = document.createElement("div");
    combTable.className = "combinationTable";

    combDiv.appendChild(combLabel);
    combDiv.appendChild(combTable);

    document.body.querySelector(".container").appendChild(combDiv);

    return combDiv;
}

