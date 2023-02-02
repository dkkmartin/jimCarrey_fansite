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
        console.log(correctAnswers);
    }

    if (checkQuiz2 == true) {
        correctAnswers += 1;
        console.log(correctAnswers);
    }

    if (checkQuiz3 == true) {
        correctAnswers += 1;
        console.log(correctAnswers);
    }

    if (checkQuiz4 == true) {
        correctAnswers += 1;
        console.log(correctAnswers);
    }

    if (checkQuiz5 == true) {
        correctAnswers += 1;
        console.log(correctAnswers);
    }

    if (checkQuiz6 == true) {
        correctAnswers += 1;
        console.log(correctAnswers);
    }

    if (checkQuiz7 == true) {
        correctAnswers += 1;
        console.log(correctAnswers);
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
