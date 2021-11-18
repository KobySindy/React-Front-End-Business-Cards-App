import { setAccessToken, getAccessToken } from "./accessTokenHelper";

let baseUrl = "http://localhost:3000";

let token = getAccessToken();

export function registerNewAccount(data, callback) {
  let url = baseUrl + "/api/users";
  let obj = getConfigurationForPostRequest(data);

  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

export function signInUser(data, callback) {
  let url = baseUrl + "/api/auth";
  let obj = getConfigurationForPostRequest(data);
  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => {
      if (json.token) {
        token = json.token;
        setAccessToken(token);
      }
      callback(json);
    })
    .catch((error) => callback(error));
}

export function getMeData(callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/me";
  fetch(url, { headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

export function getAllCards(callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards";
  fetch(url, { headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//------Mannage Cards CRUD------//

export function insertNewCard(data, callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards";
  let obj = getConfigurationForPostRequest(data);
  obj.headers["x-auth-token"] = token;

  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

export function deleteCard(idToDelete, callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards/" + idToDelete;
  fetch(url, { method: "DELETE", headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

export function updateThisCard(card, callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards/" + card._id;
  const normalizedCard = normalizeCardToServer(card);
  let obj = getConfigForPutRequest(normalizedCard, token);

  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//------Add Card To Favorites------//

export function addCardToFavorites(cardId, callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/favorite-cards/";

  let obj = getConfigForPutRequest({ cardId }, token);

  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//-------Set Configuration Functions------//

function normalizeCardToServer(card) {
  return {
    bizName: card.bizName,
    bizAddress: card.bizAddress,
    bizDescription: card.bizDescription,
    bizPhone: card.bizPhone,
  };
}

function getConfigurationForPostRequest(data) {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };
}

function getConfigForPutRequest(data, token) {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    method: "PUT",
    body: JSON.stringify(data),
  };
}
