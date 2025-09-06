// src/routes/AppRoutes.js 
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ===== Public Pages =====
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Features from "../pages/features/Features";
import Contact from "../pages/contact/Contact";

// ===== Auth Pages =====
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// ===== Dashboard Pages =====
import Dashboard from "../pages/dashboard/Dashboard";
import Students from "../pages/students/Students";
import Teachers from "../pages/teachers/Teachers";
import Classes from "../pages/classes/Classes";
import Exams from "../pages/exams/Exams";
import Results from "../pages/exams/Results";
import Grades from "../pages/exams/Grades";

// ===== Forms =====
import StudentForm from "../components/forms/StudentForm";
import TeacherForm from "../components/forms/TeacherForm";
import ClassForm from "../components/forms/ClassForm";

// ===== Layouts =====
import DashboardLayout from "../layouts/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= Public Pages ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />

      {/* ================= Auth Pages ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ================= Dashboard Pages (No Login Required) ================= */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Student Management */}
        <Route path="/students" element={<Students />} />
        <Route path="/students/add" element={<StudentForm />} /> {/* Separate Add Student Route */}

        {/* Teacher Management */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/add" element={<TeacherForm />} /> {/* Separate Add Teacher Route */}

        {/* Class Management */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/add" element={<ClassForm />} /> {/* Separate Add Class Route */}

        {/* Exams & Results */}
        <Route path="/exams" element={<Exams />} />
        <Route path="/results" element={<Results />} />
        <Route path="/grades" element={<Grades />} />
      </Route>

      {/* ================= Redirect Unknown Pages ================= */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
