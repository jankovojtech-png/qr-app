import { client } from "./supabase.js";

export async function getCurrentUser() {
  const { data, error } = await client.auth.getUser();
  if (error) return null;
  return data?.user || null;
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = "/login.html";
    return null;
  }
  return user;
}

export async function redirectIfLoggedIn(path = "/admin.html") {
  const user = await getCurrentUser();
  if (user) window.location.href = path;
}

export async function logout() {
  await client.auth.signOut();
  window.location.href = "/login.html";
}