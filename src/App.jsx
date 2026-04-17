import { useState } from 'react';
import { useContacts } from './hooks/useContacts';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import SearchBar from './components/SearchBar';
import './App.css';

export default function App() {
  const { contacts, loading, error } = useContacts();
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = contacts.filter((c) => {
    const q = query.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.company.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="app-icon">📇</span> Contacts
          </h1>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </header>

      <main className="app-main">
        {loading && (
          <div className="status-message">
            <div className="spinner" />
            <p>Loading contacts…</p>
          </div>
        )}

        {error && (
          <div className="status-message error-message">
            <p>⚠ {error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="status-message">
            <p>No contacts match "<strong>{query}</strong>"</p>
          </div>
        )}

        {!loading && !error && (
          <ContactList contacts={filtered} onSelect={setSelected} />
        )}
      </main>

      {selected && (
        <ContactDetail contact={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
