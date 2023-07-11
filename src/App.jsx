import { useState } from "react";
import { students } from "./students";

export default function Profile() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="list-wrapper">
      <ul className="list">
        {students.map((student) => (
          <li
            className="list-item"
            key={student.id}
            onClick={() => handleStudentClick(student)}
          >
            <div>
              <img
                src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                alt="Avatar"
                className="list-item-image"
              />
            </div>
            <div className="list-item-content">
              <h4>{student.name}</h4>
              <p>Student ID: {student.id}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="main-content">
        {selectedStudent && (
          <div>
            <h2>{selectedStudent.name}</h2>
            <p>ID: {selectedStudent.id}</p>
            <p>Gender: {selectedStudent.gender}</p>
            <p>Age: {selectedStudent.age}</p>
            <p>Grade: {selectedStudent.grade}</p>
            <p>Mother&apos;s Name: {selectedStudent.motherName}</p>
            <p>Mother&apos;s Email: {selectedStudent.motherEmail}</p>
            <p>
              Mother&apos;s Phone Number: {selectedStudent.motherPhoneNumber}
            </p>
            <p>Father&apos;s Name: {selectedStudent.fatherName}</p>
            <p>Father&apos;s Email: {selectedStudent.fatherEmail}</p>
            <p>
              Father&apos;s Phone Number: {selectedStudent.fatherPhoneNumber}
            </p>

            <p>Address: {selectedStudent.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}
