import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Invalid credentials or network error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="card p-5 shadow-lg" style={{ width: "500px", borderRadius: "20px", border: "3px solid #800000" }}>
        <h2 className="text-center mb-4" style={{ color: "#800000", fontWeight: "bold" }}>Admin Login</h2>

        {error && <p className="text-center text-danger">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label" style={{ fontWeight: "bold", color: "#000000" }}>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label" style={{ fontWeight: "bold", color: "#000000" }}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            style={{ backgroundColor: "#800000", borderColor: "#800000", fontWeight: "bold" }}
          >
            Login
          </button>
        </form>

        <p className="text-center text-muted mt-4" style={{ fontSize: "0.85rem" }}>
          © 2025 Admin Portal
        </p>
      </div>
    </div>
  );
}
