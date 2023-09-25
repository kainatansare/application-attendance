document.addEventListener("DOMContentLoaded", function () {
    const classSelect = document.getElementById("class-select");
    const attendanceCard = document.getElementById("attendance-card");

    classSelect.addEventListener("change", function () {
        // Simulate fetching student data from the server based on the selected class
        const selectedClass = classSelect.value;
        const studentsData = getStudentData(selectedClass);

        // Generate the attendance card with student placeholders
        const attendanceHTML = generateAttendanceCard(studentsData);
        attendanceCard.innerHTML = attendanceHTML;
    });

    attendanceCard.addEventListener("input", function (e) {
        if (e.target.classList.contains("attendance-status")) {
            // Handle real-time attendance marking and display student details
            const studentId = e.target.getAttribute("data-student-id");
            const attendanceStatus = e.target.value;
            const studentData = getStudentDetails(studentId);

            // Display student details and update attendance status
            displayStudentDetails(studentData, attendanceStatus);
        }
    });

    function getStudentData(selectedClass) {
        const studentsData = [
            { id: 1, name: "Student 1", rollNumber: "1001", status: "Present" },
            { id: 2, name: "Student 2", rollNumber: "1002", status: "Present" },
            // Add more students' data here
        ];
        return studentsData;
    }

    function getStudentDetails(studentId) {
        return { id: studentId, name: "Student Name", fatherName: "Father's Name", cnic: "12345-6789012-3" };
    }

    function generateAttendanceCard(studentsData) {
        let html = "";
        studentsData.forEach((student) => {
            html += `
                <div class="student-info">
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
                    <label for="attendance-status-${student.id}">Attendance Status:</label>
                    <input type="text" id="attendance-status-${student.id}" class="attendance-status" data-student-id="${student.id}" value="${student.status}">
                    <select>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Late">Late</option>
                        <option value="Leave">Leave</option>
                    </select>
                </div>
            `;
        });
        return html;
    }

    function displayStudentDetails(studentData, attendanceStatus) {
        const studentId = studentData.id;
        const studentInfoDiv = attendanceCard.querySelector(`.student-info[data-student-id="${studentId}"]`);
        studentInfoDiv.innerHTML += `
            <p><strong>Father's Name:</strong> ${studentData.fatherName}</p>
            <p><strong>CNIC:</strong> ${studentData.cnic}</p>
            <p><strong>Attendance Status:</strong> ${attendanceStatus}</p>
        `;
    }
});
