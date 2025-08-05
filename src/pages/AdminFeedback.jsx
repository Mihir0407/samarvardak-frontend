import React, { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import './AdminDashboard.css';

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/feedback')
      .then(res => res.json())
      .then(data => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching feedbacks:', err);
        setLoading(false);
      });
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this feedback?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`'https://samarvardak-backend.onrender.com/api/feedback/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setFeedbacks(prev => prev.filter(f => f._id !== id));
      } else {
        console.error('Failed to delete feedback.');
      }
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <section className="admin-dashboard">
      <AdminNav />
      <h2>💬 User Feedback</h2>

      {loading ? (
        <p>Loading...</p>
      ) : feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Feedback</th>
              <th>Date</th>
              <th>Actions</th> {/* 👈 Added delete column */}
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((f) => (
              <tr key={f._id}>
                <td>{f.name}</td>
                <td>{f.feedback}</td>
                <td>{new Date(f.createdAt).toLocaleString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(f._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default AdminFeedback;
