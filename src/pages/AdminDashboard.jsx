import React, { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://samarvardak-backend.onrender.com/api/contacts')
      .then(res => res.json())
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching contacts:', err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this submission?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://samarvardak-backend.onrender.com/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setContacts(prev => prev.filter(contact => contact._id !== id));
      } else {
        console.error('Failed to delete contact.');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <section className="admin-dashboard">
      <AdminNav />
      <h2>📋 Contact Submissions</h2>

      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message}</td>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(c._id)}>
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

export default AdminDashboard;
