import React, { useEffect, useState } from "react";
import { 
  FaBook, FaChalkboardTeacher, FaClipboardList, FaMoneyBillWave, FaUsers, FaSchool 
} from "react-icons/fa";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell
} from "recharts";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

import PublicNavbar from "../../components/common/PublicNavbar";
import "../../styles/home.css";

export default function Home() {
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [classes, setClasses] = useState(0);
  const [exams, setExams] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(prev => (prev < 1200 ? prev + 12 : 1200));
      setTeachers(prev => (prev < 85 ? prev + 1 : 85));
      setClasses(prev => (prev < 25 ? prev + 1 : 25));
      setExams(prev => (prev < 200 ? prev + 2 : 200));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const examData = [
    { name: "Math", passed: 80, failed: 20 },
    { name: "English", passed: 90, failed: 10 },
    { name: "Science", passed: 75, failed: 25 },
    { name: "History", passed: 85, failed: 15 },
  ];

  const feeData = [
    { name: "Paid", value: 400 },
    { name: "Pending", value: 100 },
  ];

  const COLORS = ["#007bff", "#ffc107"];

  const particlesInit = async (main) => await loadFull(main);
  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
      collisions: { enable: false },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <div className="home">
      {/* Navbar */}
      <PublicNavbar />

      {/* Hero Section */}
      <header className="hero">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
        <div className="hero-content">
          <h1>Welcome to School Management System 🎓</h1>
          <p>Streamline admissions, classes, exams, fees, and results – all in one place.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stats-grid">
          <div className="stat-card"><FaBook size={30} /> <span>{students} Students</span></div>
          <div className="stat-card"><FaChalkboardTeacher size={30} /> <span>{teachers} Teachers</span></div>
          <div className="stat-card"><FaSchool size={30} /> <span>{classes} Classes</span></div>
          <div className="stat-card"><FaClipboardList size={30} /> <span>{exams} Exams</span></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <FaBook size={40} />
            <h3>📚 Student Management</h3>
            <p>Manage student profiles, academic progress, and attendance efficiently.</p>
          </div>
          <div className="card">
            <FaChalkboardTeacher size={40} />
            <h3>👩‍🏫 Teacher Management</h3>
            <p>Assign teachers, manage schedules, and track performance metrics.</p>
          </div>
          <div className="card">
            <FaClipboardList size={40} />
            <h3>📝 Exam & Results</h3>
            <p>Conduct exams online and publish results instantly with analytics.</p>
          </div>
          <div className="card">
            <FaMoneyBillWave size={40} />
            <h3>💳 Fee Management</h3>
            <p>Track payments, generate invoices, and manage finances seamlessly.</p>
          </div>
          <div className="card">
            <FaUsers size={40} />
            <h3>👨‍👩‍👧 Parent Portal</h3>
            <p>Keep parents updated with student progress and school events.</p>
          </div>
          <div className="card">
            <FaSchool size={40} />
            <h3>🏫 Class Scheduling</h3>
            <p>Organize classes, timetables, and attendance effectively.</p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts">
        <h2>School Analytics</h2>
        <div className="charts-grid">
          <div className="chart-card">
            <h3>Exam Results Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={examData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="passed" fill="#007bff" />
                <Bar dataKey="failed" fill="#ffc107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-card">
            <h3>Fee Payment Status</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={feeData} dataKey="value" nameKey="name" outerRadius={80} label>
                  {feeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} School Management System | Designed with ❤️</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
