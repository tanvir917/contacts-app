const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchContacts() {
  const res = await fetch(`${API_BASE_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch contacts');
  return res.json();
}
