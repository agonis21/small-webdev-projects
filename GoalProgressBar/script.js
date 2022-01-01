window.onload = function () {
    addSpanValues();
    addButtonFunctionality();
}

function addSpanValues() {
    //get the goal divs
    var goals = document.querySelectorAll(".goal");

    goals.forEach(function (goal) {
        //get the value of progress bar
        var pval = goal.querySelector("progress").value;

        //span element will be added to label
        var label = goal.querySelector("label");

        //add span elements
        label.innerHTML = "<span>" + pval + "</span>" +
            " " + label.innerHTML.toLowerCase();
    });
}
function updateValues() {
    //get the goal divs
    var goals = document.querySelectorAll(".goal");

    goals.forEach(function (goal) {
        //get the value of progress bar
        var pval = goal.querySelector("progress").value;

        //get the span element and change value 
        var span = goal.querySelector("span");
        span.innerText = pval;
    });
}
function addButtonFunctionality() {
    //get the goal divs
    var goals = document.querySelectorAll(".goal");

    //referenced: https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
    //loop through each of the goal
    goals.forEach(function (goal) {
        //get the progressbar
        var pbar = goal.querySelector("progress");

        //get the buttons, increase btn is always placed
        //first before decrease btn
        var increase_btn = goal.querySelectorAll("button")[0];
        var increase_val = parseInt(increase_btn.innerText);

        var decrease_btn = goal.querySelectorAll("button")[1];
        var decrease_val = parseInt(decrease_btn.innerText);


        //add functionality to the buttons
        increase_btn.addEventListener("click", function () {
            pbar.value += increase_val;
            updateValues();
        }, false);

        decrease_btn.addEventListener("click", function () {
            pbar.value += decrease_val;
            updateValues();
        }, false);

    });
}