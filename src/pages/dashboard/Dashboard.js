import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";
import "../../styles/Dashboard.css";

export default function Dashboard() {
  const studentData = [
    { grade: "10th", students: 30 },
    { grade: "9th", students: 28 },
    { grade: "8th", students: 32 },
    { grade: "7th", students: 26 },
    { grade: "6th", students: 27 },
  ];

  const teacherData = [
    { subject: "Math", count: 3 },
    { subject: "Science", count: 2 },
    { subject: "English", count: 2 },
    { subject: "Computer", count: 1 },
    { subject: "Others", count: 7 },
  ];

  const examData = [
    { month: "Jan", exams: 1 },
    { month: "Feb", exams: 2 },
    { month: "Mar", exams: 1 },
    { month: "Apr", exams: 1 },
    { month: "May", exams: 0 },
    { month: "Jun", exams: 2 },
  ];

  const attendanceData = [
    { month: "Jan", attendance: 90 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 92 },
    { month: "Apr", attendance: 85 },
    { month: "May", attendance: 87 },
    { month: "Jun", attendance: 91 },
  ];

  const passFailData = [
    { name: "Passed", value: 120 },
    { name: "Failed", value: 30 },
  ];

  const COLORS = ["#00bfff", "#ff6b6b", "#f1c40f", "#2ecc71", "#9b59b6"];
  const PASS_FAIL_COLORS = ["#2ecc71", "#e74c3c"];

  const tooltipStyle = {
    backgroundColor: "#2c3e50",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "500",
    padding: "8px",
  };

  const axisStyle = { stroke: "#7f8c8d", fontSize: 12 };

  const stats = [
    { title: "Students", value: 150, growth: "+5%", link: "/students" },
    { title: "Teachers", value: 15, growth: "+2%", link: "/teachers" },
    { title: "Classes", value: 15, growth: "+1%", link: "/classes" },
    { title: "Exams", value: 5, growth: "-1%", link: "/exams" },
  ];

  return (
    <div className="dashboard-container">
      <h1>School Management Dashboard</h1>
    

      {/* Stats Cards */}
      <div className="dashboard-cards">
        {stats.map((stat, index) => (
          <Link key={index} to={stat.link} className="card-link">
            <div className="card">
              <h2>{stat.title}</h2>
              <p>{stat.value}</p>
              <span className={`growth ${stat.growth.includes("-") ? "down" : "up"}`}>
                {stat.growth} {stat.growth.includes("-") ? "↓" : "↑"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-container">

        {/* Students Bar Chart with animation */}
        <div className="chart-card">
          <h3>Students by Grade</h3>
          <BarChart width={400} height={250} data={studentData}>
            <CartesianGrid stroke="#2c3e50" strokeDasharray="3 3" />
            <XAxis dataKey="grade" stroke={axisStyle.stroke} />
            <YAxis stroke={axisStyle.stroke} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: "#2c3e50" }} />
            <Bar dataKey="students" fill="#00bfff" radius={[5,5,0,0]} animationDuration={1500} />
          </BarChart>
        </div>

        {/* Teachers Pie Chart with animation */}
        <div className="chart-card">
          <h3>Teachers by Subject</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={teacherData}
              dataKey="count"
              nameKey="subject"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {teacherData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: "#2c3e50" }} />
          </PieChart>
        </div>

        {/* Exams Trend Line Chart */}
        <div className="chart-card">
          <h3>Exams Trend</h3>
          <LineChart width={400} height={250} data={examData}>
            <CartesianGrid stroke="#2c3e50" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke={axisStyle.stroke} />
            <YAxis stroke={axisStyle.stroke} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: "#2c3e50" }} />
            <Line type="monotone" dataKey="exams" stroke="#ff6b6b" strokeWidth={3} animationDuration={1500} />
          </LineChart>
        </div>

        {/* Attendance Trend Line Chart */}
        <div className="chart-card">
          <h3>Attendance Trend</h3>
          <LineChart width={400} height={250} data={attendanceData}>
            <CartesianGrid stroke="#2c3e50" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke={axisStyle.stroke} />
            <YAxis stroke={axisStyle.stroke} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: "#2c3e50" }} />
            <Line type="monotone" dataKey="attendance" stroke="#2ecc71" strokeWidth={3} animationDuration={1500} />
          </LineChart>
        </div>

        {/* Pass/Fail Pie Chart */}
        <div className="chart-card">
          <h3>Pass/Fail Distribution</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={passFailData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              label
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {passFailData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PASS_FAIL_COLORS[index]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: "#2c3e50" }} />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
