import React, { useEffect, useState } from "react";
import './feed.css';

export default function FeedbackApp() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    message: "",
    rating: ""
  });
  const [editId, setEditId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3005";

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/feedback/`);
      if (!res.ok) throw new Error("Failed to fetch feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editId ? `${API_BASE}/api/feedback/${editId}` : `${API_BASE}/api/feedback/`;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit feedback");

      setFormData({ username: "", password: "", message: "", rating: "" });
      setEditId(null);
      fetchFeedbacks();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/feedback/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete feedback");
      fetchFeedbacks();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleEdit = (fb) => {
    setFormData({
      username: fb.username,
      password: fb.password,
      message: fb.message,
      rating: fb.rating,
    });
    setEditId(fb._id);
  };

  return (
    <div className="container-field">
      <h2 className="title">🌟 Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} required />
        <button type="submit" className="btn">{editId ? "Update Feedback" : "Submit Feedback"}</button>
      </form>

      <h3 className="subtitle">📋 All Feedbacks</h3>
      <ul className="feedback-list">
        {feedbacks.map((fb) => (
          <li key={fb._id} className="feedback-card">
            <div>
              <strong>{fb.username}</strong> ⭐ {fb.rating}/5
              <p>{fb.message}</p>
            </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(fb)}>✏️ Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(fb._id)}>🗑️ Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
