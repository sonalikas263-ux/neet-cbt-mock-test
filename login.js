function startTest() {

    const nameInput = document.getElementById("studentName");

    const errorMessage =
        document.getElementById("errorMessage");

    const studentName =
        nameInput.value.trim();


    // Check name
    if (studentName === "") {

        errorMessage.textContent =
            "Please enter your name.";

        nameInput.focus();

        return;
    }


    // Save student name
    localStorage.setItem(
        "studentName",
        studentName
    );


    // Go to instructions page
    window.location.href =
        "instructions.html";
}
