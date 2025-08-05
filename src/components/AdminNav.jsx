import { NavLink } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <NavLink to="/only-you-4092-secret-panel" className="admin-link">
        📨 Contacts
      </NavLink>
      <NavLink to="/admin-feedback" className="admin-link">
  💬 Feedback
</NavLink>

    </nav>
  );
};

export default AdminNav;
