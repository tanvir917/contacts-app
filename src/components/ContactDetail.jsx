import { useEffect } from 'react';
import { getAvatarColor, getInitials } from '../utils/avatar';

export default function ContactDetail({ contact, onClose }) {
  const color = getAvatarColor(contact.name);
  const initials = getInitials(contact.name);
  const { address, company } = contact;

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const fullAddress = [
    address.suite,
    address.street,
    address.city,
    address.zipcode,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" role="dialog" aria-label={contact.name}>
        {/* Header */}
        <div className="modal-header">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <div className="avatar modal-avatar" style={{ background: color }}>
            {initials}
          </div>
          <div>
            <div className="modal-name">{contact.name}</div>
            <div className="modal-username">@{contact.username}</div>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="detail-section">
            <h3>Contact Info</h3>
            <div className="detail-row">
              <span className="icon">✉</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="detail-row">
              <span className="icon">📞</span>
              <span>{contact.phone}</span>
            </div>
            <div className="detail-row">
              <span className="icon">🌐</span>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.website}
              </a>
            </div>
          </div>

          <div className="detail-section">
            <h3>Address</h3>
            <div className="detail-row">
              <span className="icon">📍</span>
              <span>{fullAddress}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Company</h3>
            <div className="detail-row">
              <span className="icon">🏢</span>
              <span>
                <strong>{company.name}</strong>
              </span>
            </div>
            <div className="detail-row">
              <span className="icon">💬</span>
              <span>"{company.catchPhrase}"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
