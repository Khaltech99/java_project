"strict";

document.querySelector(".input__check").addEventListener("click", function() {
    const secretNumber = (document.querySelector(".question").textContent =
        Number(Math.trunc(Math.random() * 20) + 1));
    let userInput = Number(document.querySelector(".input").value);
    let score = Number(document.querySelector(".scored").textContent);
    if (userInput === secretNumber) {
        document.querySelector(".scored").textContent = score - 1;
        document.querySelector(".highscore--num").textContent = score - 1;

        document.querySelector(".correct").textContent =
            "congratulations ,you got it right";
        document.querySelector("body").style.backgroundColor = "green";
    } else if (userInput < secretNumber) {
        document.querySelector(".scored").textContent = score - 1;
        document.querySelector(".correct").textContent =
            "oops ,your input is a bit low ! try again";
        document.querySelector("body").style.backgroundColor = "black";
    } else if (userInput > secretNumber) {
        document.querySelector(".scored").textContent = score - 1;
        document.querySelector(".correct").textContent =
            "oops ,your input is a bit high ! try again";
        document.querySelector("body").style.backgroundColor = "black";
    }
});

document.querySelector(".row").addEventListener("click", function() {
    document.querySelector(".correct").textContent = "start guessing";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".question").textContent = "?";
    document.querySelector(".highscore--num").value = "0";
    document.querySelector(".scored").textContent = "20";
});