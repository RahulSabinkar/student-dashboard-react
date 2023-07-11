import { useState } from "react";

const students = [
  { name: "Hitesh Kumar", id: "141", details: "Details about Hitesh Kumar" },
  { name: "John Doe", id: "142", details: "Details about John Doe" },
  { name: "Jane Smith", id: "143", details: "Details about Jane Smith" },
  { name: "Alex Johnson", id: "144", details: "Details about Alex Johnson" },
  { name: "Emily Wilson", id: "145", details: "Details about Emily Wilson" },
  { name: "David Brown", id: "146", details: "Details about David Brown" },
  { name: "Sarah Davis", id: "147", details: "Details about Sarah Davis" },
  { name: "Michael Lee", id: "148", details: "Details about Michael Lee" },
  { name: "Jessica Taylor", id: "149", details: "Details about Jessica Taylor" },
  { name: "Christopher Clark", id: "150", details: "Details about Christopher Clark" },
  { name: "Amanda Hall", id: "151", details: "Details about Amanda Hall" },
  { name: "Matthew Wright", id: "152", details: "Details about Matthew Wright" },
  { name: "Olivia Martin", id: "153", details: "Details about Olivia Martin" },
  { name: "Ryan Anderson", id: "154", details: "Details about Ryan Anderson" },
  { name: "Sophia Martinez", id: "155", details: "Details about Sophia Martinez" }
];

export default function Profile() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="list-wrapper">
      <ul className="list">
        {students.map((student) => (
          <li className="list-item" key={student.id} onClick={() => handleStudentClick(student)}>
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
            <p>{selectedStudent.details}</p>
          </div>
        )}
      </div>
    </div>
  );
}
