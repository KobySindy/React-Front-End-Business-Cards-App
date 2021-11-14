export function getAccessToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function setAccessToken(token) {
  localStorage.setItem("token", token);
}

export function clearAccessToken() {
  localStorage.removeItem("token");
}
