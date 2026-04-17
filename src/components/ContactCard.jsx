import { getAvatarColor, getInitials } from '../utils/avatar';

export default function ContactCard({ contact, onClick }) {
  const color = getAvatarColor(contact.name);
  const initials = getInitials(contact.name);

  return (
    <article className="contact-card" onClick={onClick} tabIndex={0} role="button"
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}>
      <div className="avatar" style={{ background: color }}>
        {initials}
      </div>
      <div className="card-info">
        <div className="card-name">{contact.name}</div>
        <div className="card-detail">
          <span className="icon">✉</span> {contact.email}
        </div>
        <div className="card-detail">
          <span className="icon">📞</span> {contact.phone}
        </div>
        <div className="card-company">{contact.company.name}</div>
      </div>
    </article>
  );
}
