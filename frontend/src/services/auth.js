import { apiGet }
  from "./api";

import { CONFIG }
  from "../config";

export async function login(
  email
) {

  return await apiGet(
    "loginWithGoogle",
    {
      email
    }
  );

}

export async function validateSession(
  token
) {

  return await apiGet(
    "validateSession",
    {
      token
    }
  );

}

export async function logout(
  token
) {

  return await apiGet(
    "logout",
    {
      token
    }
  );

}

export function saveToken(
  token
) {

  localStorage.setItem(
    CONFIG.SESSION_KEY,
    token
  );

}

export function getToken() {

  return localStorage.getItem(
    CONFIG.SESSION_KEY
  );

}

export function removeToken() {

  localStorage.removeItem(
    CONFIG.SESSION_KEY
  );

}
