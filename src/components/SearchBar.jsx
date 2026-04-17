export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search by name, email, or company…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search contacts"
      />
    </div>
  );
}
