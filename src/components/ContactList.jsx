import ContactCard from './ContactCard';

export default function ContactList({ contacts, onSelect }) {
  return (
    <div className="contact-grid">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onClick={() => onSelect(contact)}
        />
      ))}
    </div>
  );
}
