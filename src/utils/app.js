import cookie from "cookie_js";

const adminToKen = "admin_token";
const usernameKey = "username";

export function getToKen() {    
  return cookie.get(adminToKen)
}

export function setToKen(token) {
  return cookie.set(adminToKen, token)
}

export function removeToKen(token) {
  return cookie.remove(adminToKen)
}

export function setUserName(value) {
  return cookie.set(usernameKey, value)
}

export function getUserName() {
  return cookie.get(usernameKey);
}

export function removeUserName() {
  return cookie.remove(usernameKey)
}