import { useState } from "react";
import { students } from "./students";

export default function Profile() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="container">
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
      </div>
      <div className="main-content">
        {selectedStudent && (
          <div className="student-details">
            <div className="left-segment">
              <div className="avatar-wrapper">
                <img
                  src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                  alt="Avatar"
                  className="avatar-image"
                />
              </div>
              <div className="student-info">
                <h2>{selectedStudent.name}</h2>
                <p>Student ID: {selectedStudent.id}</p>
                <p>Gender: {selectedStudent.gender}</p>
                <p>Age: {selectedStudent.age}</p>
                <p>Grade: {selectedStudent.grade}</p>
              </div>
            </div>

            <div className="right-segment">
              <div className="mother-details">
                <h3 className="segment-title">Mother</h3>
                <div className="segment-details">
                  <p>{selectedStudent.motherName}</p>
                  <p>Email: {selectedStudent.motherEmail}</p>
                  <p>Phone Number: {selectedStudent.motherPhoneNumber}</p>
                </div>
              </div>
              <div className="father-details">
                <h3 className="segment-title">Father</h3>
                <div className="segment-details">
                  <p>{selectedStudent.fatherName}</p>
                  <p>Email: {selectedStudent.fatherEmail}</p>
                  <p>Phone Number: {selectedStudent.fatherPhoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
