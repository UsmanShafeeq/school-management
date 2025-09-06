import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Students from "../pages/students/Students";
import Teachers from "../pages/teachers/Teachers";
import Classes from "../pages/classes/Classes";
import Exams from "../pages/exams/Exams";
import Results from "../pages/exams/Results";
import Grades from "../pages/exams/Grades";

// Forms
import StudentForm from "../components/forms/StudentForm";
import TeacherForm from "../components/forms/TeacherForm";
import ClassForm from "../components/forms/ClassForm";

// Layout
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* Dashboard Layout (Navbar + Sidebar + Footer) */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<StudentForm />} />      {/* Add Student */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/add-teacher" element={<TeacherForm />} />      {/* Add Teacher */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/add-class" element={<ClassForm />} />          {/* Add Class */}
        <Route path="/exams" element={<Exams />} />
        <Route path="/results" element={<Results />} />
        <Route path="/grades" element={<Grades />} />
      </Route>

      {/* Auth pages (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default AppRoutes;
