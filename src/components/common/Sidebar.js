import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Sidebar.css"; // Import sidebar styles

function Sidebar() {
  // State to toggle submenus
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div className="sidebar">
     
      <ul className="sidebar-menu">
        <li><Link to="/">Dashboard</Link></li>

        <li>
          <button onClick={() => toggleMenu("students")}>Students</button>
          <ul className={`submenu ${openMenu === "students" ? "open" : ""}`}>
            <li><Link to="/students">View Students</Link></li>
            <li><Link to="/add-student">Add Student</Link></li>
          </ul>
        </li>

        <li>
          <button onClick={() => toggleMenu("teachers")}>Teachers</button>
          <ul className={`submenu ${openMenu === "teachers" ? "open" : ""}`}>
            <li><Link to="/teachers">View Teachers</Link></li>
            <li><Link to="/add-teacher">Add Teacher</Link></li>
          </ul>
        </li>

        <li>
          <button onClick={() => toggleMenu("classes")}>Classes</button>
          <ul className={`submenu ${openMenu === "classes" ? "open" : ""}`}>
            <li><Link to="/classes">View Classes</Link></li>
            <li><Link to="/add-class">Add Class</Link></li>
          </ul>
        </li>

        <li>
          <button onClick={() => toggleMenu("exams")}>Exams</button>
          <ul className={`submenu ${openMenu === "exams" ? "open" : ""}`}>
            <li><Link to="/exams">Exams</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/grades">Grades</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
