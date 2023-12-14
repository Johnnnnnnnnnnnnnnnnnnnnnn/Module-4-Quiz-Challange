var question;
var points;
var leaderboardButton = document.getElementById("leaderboard")
var screen = document.getElementById("subContainer");
var line = document.getElementById("underline")
var endScreenUI = document.createElement("div");
var endScreenForm = document.createElement("input");
var endScreenText = document.createElement("h2")
var thankYouText = document.createElement("h1")
var submitButton = document.createElement("button");
var timer = document.getElementById("timer");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
footer = document.getElementById("footer");
header = document.getElementById("questionHeader");
var timeLeft = 60;

function endScreen () {
    endScreenText.textContent = "Enter Your Name for the Leaderboard:"
    submitButton.textContent = "Submit";
    submitButton.style.width = "100px";
    submitButton.style.height = "40px";
    submitButton.style.margin = "10px";
    endScreenForm.style.width = "200px";
    endScreenForm.style.height = "20px";
    endScreenForm.style.margin = "5px";
    option1.replaceWith(submitButton);
    option2.replaceWith(endScreenUI);
    option3.replaceWith(endScreenUI);
    option4.replaceWith(endScreenUI);
    line.replaceWith(endScreenUI);
    header.replaceWith(endScreenText);
    question.replaceWith(endScreenForm);

    submitButton.addEventListener("click", storingNames);
};

function storingNames () {
    var endScreenFormVal = endScreenForm.value;
    thankYouText.textContent = "Thank You for Playing " + endScreenFormVal

    if (endScreenFormVal === "") {
        alert("please type something.");
        endScreen();
    }

    else {
        endScreenText.replaceWith(thankYouText);
        submitButton.replaceWith(endScreenUI);
        endScreenForm.replaceWith(endScreenUI);
        footer.replaceWith(endScreenUI);
    };

    leaderboardButton.onclick = function () {
        alert("High Scores: " + endScreenFormVal + " with " + points + " points.")
    }
}

function setTime () {
    var timeInterval = setInterval(
        function () {
            timeLeft--;
            timer.innerHTML = "Time Left: " + timeLeft;

            if(timeLeft <= 0) {
                clearInterval(timeInterval);
                footer.innerHTML = "GAME OVER";
                endScreen();
            }
        }, 1000
    );
};

function question1 () {
    points = 0;
    header.innerHTML = "Question 1";
    question = document.getElementById("question");
    question.innerHTML = "What is 2 + 2?";
    option1.innerHTML = "4";
    option2.innerHTML = "2";
    option3.innerHTML = "3";
    option4.innerHTML = "1";

    option1.onclick = function () {
        points +=1;
        console.log(points);
        console.log("passed");
        footer.innerHTML = "";
        question2();
    };
    
    option2.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option3.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option4.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };

};

function question2 () {
    points = points;
    header.innerHTML = "Question 2";
    question = document.getElementById("question");
    question.innerHTML = "An animal that only eats plants are called?";
    option1.innerHTML = "Omnivore";
    option2.innerHTML = "Carnivore";
    option3.innerHTML = "Herbivore";
    option4.innerHTML = "All the Above";

    option1.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option2.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option3.onclick = function () {
        points +=1;
        console.log(points);
        console.log("passed");
        footer.innerHTML = "";
        question3();
    };
    
    option4.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
}

function question3 () {
    points = points;
    header.innerHTML = "Question 3";
    question = document.getElementById("question");
    question.innerHTML = "what language that people use to program the functionality of a website?";
    option1.innerHTML = "Java Script";
    option2.innerHTML = "Java";
    option3.innerHTML = "C++";
    option4.innerHTML = "C";

    option1.onclick = function () {
        points +=1;
        console.log(points);
        console.log("passed");
        footer.innerHTML = "";
        question4();
    };
    
    option2.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option3.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option4.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
}

function question4 () {
    points = points;
    header.innerHTML = "Question 4";
    question = document.getElementById("question");
    question.innerHTML = "What is the language that is often used to design the structure of a website?";
    option1.innerHTML = "Python";
    option2.innerHTML = "Java Script";
    option3.innerHTML = "CSS";
    option4.innerHTML = "HTML";

    option1.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option2.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option3.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong";
        console.log("passed");
    };
    
    option4.onclick = function () {
        points +=1;
        console.log(points);
        console.log("passed");
        footer.innerHTML = "";
        question5()
    };
};

function question5 () {
    points = points;
    header.innerHTML = "Question 5";
    question = document.getElementById("question");
    question.innerHTML = "What is the language that is often used to design the style of a website?";
    option1.innerHTML = "HTML";
    option2.innerHTML = "CSS";
    option3.innerHTML = "Java Script";
    option4.innerHTML = "C++";

    option1.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong"
        console.log("passed");
    };
    
    option2.onclick = function () {
        points +=1;
        console.log(points);
        console.log("passed");
        timeLeft = 1;
        endScreen();
    };
    
    option3.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong"
        console.log("passed");
    };
    
    option4.onclick = function () {
        timeLeft -= 10;
        footer.innerHTML = "Wrong"
        console.log("passed");
    };
};

setTime();
question1();