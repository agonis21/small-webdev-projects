window.onload = function () {
    //get the goal divs
    var goals = document.querySelectorAll(".goal");

    

    //loop through each of the goal
    for (var i = 0; i < goals.length; goals++) {
        var goal = goals[i];

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
        }, false);

        decrease_btn.addEventListener("click", function () {
            pbar.value += decrease_val;
        }, false);

        //fix event listener bug
    }
}