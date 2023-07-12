import { useState } from "react";
import { students } from "./students";

export default function Profile() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="container">
      <div className="side-panel">
        <div className="side-upper-panel">Class 5 - Section A Strength: 56</div>
        <div className="side-lower-panel">
          <div className="side-lower-panel-heading">Students Profiles</div>
          <div className="side-lower-panel-list-wrapper">
            <ul className="list">
              {students.map((student) => (
                <li
                  className={`list-item ${selectedStudent === student ? 'active' : ''}`}
                  key={student.id}
                  onClick={() => handleStudentClick(student)}
                >
                  <div className="list-item-image-container">
                    <img
                      src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                      alt="Avatar"
                      className="list-item-image"
                    />
                  </div>
                  <div className="list-item-content">
                    <p className="list-item-content-name">{student.name}</p>
                    <p className="list-item-content-id">
                      Student ID: {student.id}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="main-panel">
        {selectedStudent ? (
          <div>
            <div className="upper-main-panel">
              <div className="student-details">
                <div className="student-profile-image-container">
                <img
                  src="https://images.unsplash.com/photo-1630178836733-3d61d8974258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                  alt="Avatar"
                  className="student-profile-image"
                />
                </div>
                <div className="student-info">
                  <p className="student-info-name">{selectedStudent.name}</p>
                    <p className="student-info-text">Student ID: {selectedStudent.id}</p>
                    <div className="gender-age">
                      <span className="student-info-text">{selectedStudent.gender}</span>
                      <span className="student-info-text">|</span>
                      <span className="student-info-text">{selectedStudent.age}</span>
                    </div>
                    <p className="student-info-text">{selectedStudent.grade}</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="parent-details">
                <div className="parent-info">
                  <div className="mother-info">
                    <p className="parent-info-title">Mother:</p>
                    <p className="parent-info-name">{selectedStudent.motherName}</p>
                    <p className="parent-info-text">{selectedStudent.motherEmail}</p>
                    <p className="parent-info-text">{selectedStudent.motherPhoneNumber}</p>
                  </div>
                  <div className="father-info">
                    <p className="parent-info-title">Father:</p>
                    <p className="parent-info-name">{selectedStudent.fatherName}</p>
                    <p className="parent-info-text">{selectedStudent.fatherEmail}</p>
                    <p className="parent-info-text">{selectedStudent.fatherPhoneNumber}</p>
                  </div>
                </div>
                <div className="parent-info-address"><p>Address: {selectedStudent.address}</p></div>
              </div>
            </div>
            <div className="lower-main-panel">Dashboard</div>
          </div>
        ) : (
          <div>Please select a student</div>
        )}
      </div>
    </div>
  );
}
