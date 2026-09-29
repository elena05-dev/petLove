const BASE_URL = "https://petlove.b.goit.study/api";

export async function registerUser(name, email, password) {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function loginUser(email, password) {
  const response = await fetch(`${BASE_URL}/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  console.log(response.ok);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/users/current`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return data;
}

export async function logoutUser() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/users/signout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}
