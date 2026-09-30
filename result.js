const resultData =
    JSON.parse(
        localStorage.getItem(
            "examResult"
        )
    );


if (!resultData) {

    window.location.href =
        "index.html";

}


document.getElementById(
    "studentName"
).textContent =
    resultData.studentName;


document.getElementById(
    "marks"
).textContent =
    resultData.marks;


document.getElementById(
    "correct"
).textContent =
    resultData.correct;


document.getElementById(
    "wrong"
).textContent =
    resultData.wrong;


document.getElementById(
    "unattempted"
).textContent =
    resultData.unattempted;
