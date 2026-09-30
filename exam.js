const questions = [

    {
        question:
            "What is the basic unit of life?",

        options: [
            "Tissue",
            "Cell",
            "Organ",
            "Organ System"
        ],

        answer: 1,

        subject: "Biology"
    },


    {
        question:
            "Which organelle is known as the powerhouse of the cell?",

        options: [
            "Nucleus",
            "Ribosome",
            "Mitochondria",
            "Golgi Body"
        ],

        answer: 2,

        subject: "Biology"
    },


    {
        question:
            "Which gas is mainly responsible for photosynthesis?",

        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Hydrogen"
        ],

        answer: 2,

        subject: "Biology"
    },


    {
        question:
            "What is the SI unit of force?",

        options: [
            "Joule",
            "Newton",
            "Watt",
            "Pascal"
        ],

        answer: 1,

        subject: "Physics"
    },


    {
        question:
            "What is the acceleration due to gravity approximately?",

        options: [
            "5.8 m/s²",
            "8.9 m/s²",
            "9.8 m/s²",
            "12.8 m/s²"
        ],

        answer: 2,

        subject: "Physics"
    },


    {
        question:
            "Which of the following is a vector quantity?",

        options: [
            "Mass",
            "Temperature",
            "Speed",
            "Velocity"
        ],

        answer: 3,

        subject: "Physics"
    },


    {
        question:
            "What is the chemical formula of water?",

        options: [
            "CO₂",
            "H₂O",
            "O₂",
            "H₂"
        ],

        answer: 1,

        subject: "Chemistry"
    },


    {
        question:
            "The atomic number represents the number of:",

        options: [
            "Neutrons",
            "Electrons + Neutrons",
            "Protons",
            "Nucleons"
        ],

        answer: 2,

        subject: "Chemistry"
    },


    {
        question:
            "What is the pH of pure water at 25°C?",

        options: [
            "5",
            "6",
            "7",
            "9"
        ],

        answer: 2,

        subject: "Chemistry"
    },


    {
        question:
            "Which particle has a negative charge?",

        options: [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleus"
        ],

        answer: 2,

        subject: "Physics"
    }

];


// =================================
// VARIABLES
// =================================

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let examSubmitted = false;


// =================================
// TIMER
// =================================

// 200 minutes
let totalSeconds = 200 * 60;

let timerInterval;


// =================================
// PAGE LOAD
// =================================

window.onload = function () {

    const studentName =
        localStorage.getItem("studentName");


    if (!studentName) {

        window.location.href =
            "index.html";

        return;
    }


    document.getElementById(
        "studentDisplay"
    ).textContent =
        "Student: " + studentName;


    createPalette();

    loadQuestion();

    startTimer();

};


// =================================
// LOAD QUESTION
// =================================

function loadQuestion() {

    const question =
        questions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        "Question " + (currentQuestion + 1);


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function (option, index) {

            const label =
                document.createElement("label");


            label.className = "option";


            const radio =
                document.createElement("input");


            radio.type = "radio";

            radio.name = "answer";

            radio.value = index;


            if (
                userAnswers[currentQuestion]
                === index
            ) {

                radio.checked = true;

            }


            radio.addEventListener(
                "change",
                function () {

                    userAnswers[
                        currentQuestion
                    ] = index;

                    createPalette();

                }
            );


            label.appendChild(radio);


            label.appendChild(
                document.createTextNode(
                    " " + option
                )
            );


            optionsContainer.appendChild(
                label
            );

        }
    );


    document.getElementById(
        "previousBtn"
    ).disabled =
        currentQuestion === 0;


    createPalette();
}


// =================================
// NEXT
// =================================

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

}


// =================================
// PREVIOUS
// =================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


// =================================
// CLEAR RESPONSE
// =================================

function clearResponse() {

    userAnswers[currentQuestion] =
        null;

    loadQuestion();

}


// =================================
// QUESTION PALETTE
// =================================

function createPalette() {

    const palette =
        document.getElementById(
            "questionPalette"
        );


    palette.innerHTML = "";


    questions.forEach(
        function (question, index) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.textContent =
                index + 1;


            if (
                userAnswers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }

            else {

                button.classList.add(
                    "unattempted"
                );

            }


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            button.onclick =
                function () {

                    currentQuestion =
                        index;

                    loadQuestion();

                };


            palette.appendChild(button);

        }
    );

}


// =================================
// TIMER
// =================================

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(
            function () {

                if (
                    totalSeconds <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    autoSubmit();

                    return;

                }


                totalSeconds--;

                updateTimer();

            },
            1000
        );
}


function updateTimer() {

    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById(
        "timer"
    ).textContent =

        String(minutes).padStart(
            3,
            "0"
        )

        + ":"

        +

        String(seconds).padStart(
            2,
            "0"
        );

}


// =================================
// MANUAL SUBMIT
// =================================

function submitExam() {

    const unanswered =
        userAnswers.filter(
            function (answer) {

                return answer === null;

            }
        ).length;


    const confirmSubmit =
        confirm(

            "Are you sure you want to submit the exam?\n\n"
            +
            "Unattempted Questions: "
            +
            unanswered

        );


    if (!confirmSubmit) {

        return;

    }


    calculateResult();

}


// =================================
// AUTO SUBMIT
// =================================

function autoSubmit() {

    alert(
        "Time is over. Your exam will be submitted automatically."
    );


    calculateResult();

}


// =================================
// RESULT
// =================================

function calculateResult() {

    if (examSubmitted) {

        return;

    }


    examSubmitted = true;


    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    questions.forEach(
        function (question, index) {

            const selected =
                userAnswers[index];


            if (selected === null) {

                unattempted++;

            }

            else if (
                selected === question.answer
            ) {

                correct++;

            }

            else {

                wrong++;

            }

        }
    );


    const marks =
        (correct * 4) -
        (wrong * 1);


    const result = {

        studentName:
            localStorage.getItem(
                "studentName"
            ),

        correct:
            correct,

        wrong:
            wrong,

        unattempted:
            unattempted,

        marks:
            marks,

        totalQuestions:
            questions.length

    };


    localStorage.setItem(
        "examResult",
        JSON.stringify(result)
    );


    window.location.href =
        "result.html";

}
