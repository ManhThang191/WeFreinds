const apiFriendURL = 'http://localhost:5000/api/friend/getAllFriend';

export async function fetchFriends() {
  const res = await fetch(apiFriendURL); // Đổi domain nếu deploy
  if (!res.ok) throw new Error('Failed to fetch friends');
  return res.json();
}
