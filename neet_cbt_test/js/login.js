function startTest() {

    const nameInput = document.getElementById("studentName");
    const errorMessage = document.getElementById("errorMessage");

    const studentName = nameInput.value.trim();

    if (studentName === "") {

        errorMessage.textContent = "Please enter your name.";

        return;
    }

    // Save student name
    localStorage.setItem("studentName", studentName);

    // Go to instructions
    window.location.href = "instructions.html";
}