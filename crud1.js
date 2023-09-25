document.addEventListener("DOMContentLoaded", function () {
    const classForm = document.getElementById("class-form");
    const classList = document.getElementById("class-list");

    classForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const classTimings = document.getElementById("class-timings").value;
        const schedule = document.getElementById("schedule").value;
        const teacherName = document.getElementById("teacher-name").value;
        const sectionName = document.getElementById("section-name").value;
        const courseName = document.getElementById("course-name").value;
        const batchNumber = document.getElementById("batch-number").value;

        // Create a new class object
        const classDetails = {
            classTimings,
            schedule,
            teacherName,
            sectionName,
            courseName,
            batchNumber,
        };

        const classItem = document.createElement("div");
        classItem.className = "class-item";
        classItem.innerHTML = `
            <h3>Class Details</h3>
            <p><strong>Class Timings:</strong> ${classDetails.classTimings}</p>
            <p><strong>Schedule of Classes:</strong> ${classDetails.schedule}</p>
            <p><strong>Teacher's Name:</strong> ${classDetails.teacherName}</p>
            <p><strong>Section Name:</strong> ${classDetails.sectionName}</p>
            <p><strong>Course Name:</strong> ${classDetails.courseName}</p>
            <p><strong>Batch Number:</strong> ${classDetails.batchNumber}</p>
        `;

        classList.appendChild(classItem);

        // Clear the form fields
        classForm.reset();
    });
});
