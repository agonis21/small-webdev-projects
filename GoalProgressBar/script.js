window.onload = function () {
    addGoals();
    addSpanValues();
    addButtonFunctionality();
}

var goal_list = [
    {
        goalID: "books",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "books read this year"
    },
    {
        goalID: "essays",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "essays written this year"
    },
    {
        goalID: "songs",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "songs produced this year"
    }, {
        goalID: "movies",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "avant-garde movies watched this year"
    },
    {
        goalID: "photos",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "photos edited this year"
    },
    {
        goalID: "meditation",
        curVal: 0,
        maximum: 2022,
        step: 1,
        description: "minutes meditated this year"
    },
    {
        goalID: "journal",
        curVal: 0,
        maximum: 222,
        step: 1,
        description: "gratitude entries journaled this year"
    },
    {
        goalID: "projects",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "web projects coded this year"
    },
    {
        goalID: "approach",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "approaches this year"
    },
    {
        goalID: "mealprep",
        curVal: 0,
        maximum: 222,
        step: 1,
        description: "meal prep this year"
    },
    {
        goalID: "palces",
        curVal: 0,
        maximum: 22,
        step: 1,
        description: "new places visited this year"
    },
    {
        goalID: "miles",
        curVal: 0,
        maximum: 222,
        step: 1,
        description: "miles ran this year"
    },

];

function addGoals() {
    goal_list.forEach(function (goal) {
        createGoal(
            goal.goalID,
            goal.curVal,
            goal.maximum,
            goal.step,
            goal.description
        );
    });
}
function createGoal(goalID, curVal, maximum, step, description) {
    //creates a goal in this structure
        /*<div class="goal">
            <button type="button increase">+1</button>
            <button type="button decrease">-1</button>
            <label for="books">Books read this year: </label>
            <progress id="books" value="0" max="22"> 0 </progress>
        </div>*/
    var container = document.querySelector(".container");
    var goalDiv = document.createElement("div");
    goalDiv.className = "goal";

    var inc_btn = document.createElement("button");
    goalDiv.appendChild(inc_btn);
    inc_btn.classList.add("button");
    inc_btn.classList.add("increase");
    inc_btn.innerText = "+" + step;
   

    var dec_btn = document.createElement("button");
    goalDiv.appendChild(dec_btn);
    dec_btn.classList.add("button");
    dec_btn.classList.add("decrease");
    dec_btn.innerText = "-" + step;

    var label = document.createElement("label");
    goalDiv.appendChild(label);
    label.htmlFor = goalID;
    label.innerText = description;

    var progress_bar = document.createElement("progress");
    goalDiv.appendChild(progress_bar);
    progress_bar.id = goalID;
    progress_bar.value = curVal;
    progress_bar.max = maximum;

    //the goal div is done, now append it to container
    container.append(goalDiv);
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