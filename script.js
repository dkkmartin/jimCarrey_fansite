function checkQuiz() {
    let correctAnswers = 0;

    const closeModal = document.querySelector(".close_modal");
    const modal = document.querySelector(".modal");
    const modalPoints = document.querySelector(".modal_points");
    const modalText = document.querySelector(".modal_text");

    const checkQuiz1 = document.getElementById("question_1_2").checked;
    const checkQuiz2 = document.getElementById("question_2_3").checked;
    const checkQuiz3 = document.getElementById("question_3_3").checked;
    const checkQuiz4 = document.getElementById("question_4_1").checked;
    const checkQuiz5 = document.getElementById("question_5_3").checked;
    const checkQuiz6 = document.getElementById("question_6_2").checked;
    const checkQuiz7 = document.getElementById("question_7_3").checked;

    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    if (checkQuiz1 == true) {
        correctAnswers += 1;
    }

    if (checkQuiz2 == true) {
        correctAnswers += 1;
    }

    if (checkQuiz3 == true) {
        correctAnswers += 1;
    }

    if (checkQuiz4 == true) {
        correctAnswers += 1;
    }

    if (checkQuiz5 == true) {
        correctAnswers += 1;
    }

    if (checkQuiz6 == true) {
        correctAnswers += 1;
    }

    if (checkQuiz7 == true) {
        correctAnswers += 1;
    }

    if (correctAnswers == 0) {
        modalPoints.innerText = `You got ${correctAnswers} correct answers!`;
        modalText.innerText = "You suck..";
    }
    if (correctAnswers == 1) {
        modalPoints.innerText = `You got ${correctAnswers} correct answer!`;
        modalText.innerText = "You should try again!";
    }
    if (correctAnswers >= 2 && correctAnswers <= 3) {
        modalPoints.innerText = `You got ${correctAnswers} correct answers!`;
        modalText.innerText = "Nice try!";
    }
    if (correctAnswers >= 4 && correctAnswers <= 6) {
        modalPoints.innerText = `You got ${correctAnswers} correct answers!`;
        modalText.innerText = "You are doing really good!";
    }
    if (correctAnswers == 7) {
        modalPoints.innerText = `You got ${correctAnswers} correct answers!`;
        modalText.innerText = "Perfect score!";
    }

    modal.classList.add("show");
}

(function showCorrect() {
    const showBtn = document.querySelector(".show_btn");
    showBtn.addEventListener("click", () => {
        const showIt = document.querySelector(".hide").classList.remove("hide");
        showBtn.classList.add("hide");
    });

    let quizList = [
        "1962",
        "Eight months",
        "2000",
        "Ace Ventura: Pet Detective",
        "2008",
        "Toronto",
        "1994",
    ];
    let i = 1;
    const correctAnswers = document.querySelector(".correct_answers");
    quizList.forEach((element) => {
        const newPara = document.createElement("p");
        newPara.innerText = `Question ${i}: ${element}`;
        correctAnswers.appendChild(newPara);
        i++;
    });
})();
