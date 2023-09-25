document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentList = document.getElementById("student-list");

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Get the values entered by the admin
        const name = document.getElementById("name").value;
        const fatherName = document.getElementById("father-name").value;
        const rollNumber = document.getElementById("roll-number").value;
        const contactNumber = document.getElementById("contact-number").value;
        const cnic = document.getElementById("cnic").value;
        const picture = document.getElementById("picture").value; // Note: You may need to handle file uploads differently.
        const courseName = document.getElementById("course-name").value;
        const assignedClass = document.getElementById("assigned-class").value;

        // Create a new student object
        const studentDetails = {
            name,
            fatherName,
            rollNumber,
            contactNumber,
            cnic,
            picture,
            courseName,
            assignedClass,
        };

        // Add the student details to the student list
        const studentItem = document.createElement("div");
        studentItem.className = "student-item";
        studentItem.innerHTML = `
            <h3>Student Details</h3>
            <p><strong>Name:</strong> ${studentDetails.name}</p>
            <p><strong>Father's Name:</strong> ${studentDetails.fatherName}</p>
            <p><strong>Roll Number:</strong> ${studentDetails.rollNumber}</p>
            <p><strong>Contact Number:</strong> ${studentDetails.contactNumber}</p>
            <p><strong>CNIC Number:</strong> ${studentDetails.cnic}</p>
            <p><strong>Course Name:</strong> ${studentDetails.courseName}</p>
            <p><strong>Assigned Class:</strong> ${studentDetails.assignedClass}</p>
        `;

        studentList.appendChild(studentItem);

        studentForm.reset();
    });
});
