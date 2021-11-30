import { setAccessToken, getAccessToken } from "./accessTokenHelper";

let baseUrl = "http://localhost:3000";

let token = getAccessToken();

//Register New User
export function registerNewAccount(data, callback) {
  let url = baseUrl + "/api/users";
  let obj = getConfigurationForPostRequest(data);

  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Sign In And Set Access Token at LocaStorage
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

//Get the User Data
export function getMeData(callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/me";

  fetch(url, { headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Get All existing Cards
export function getAllCards(callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards";

  fetch(url, { headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Convert BizNumbers to Cards
export function getFavoriteCards(data, callback) {
  if (!token) return;
  let url = baseUrl + `/api/users/favorite-cards?bizNum=${data}`;

  fetch(url, { headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Post a New Card
export function insertNewCard(data, callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards";
  const normalizedCard = normalizeCardToServer(data);
  let obj = getConfigurationForPostRequest(normalizedCard);
  obj.headers["x-auth-token"] = token;

  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Delete Card
export function deleteCard(idToDelete, callback) {
  if (!token) return;
  let url = baseUrl + "/api/cards/" + idToDelete;

  fetch(url, { method: "DELETE", headers: { "x-auth-token": token } })
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Update Card
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

//Add Card To Favorites
export function addCardToFavorites(cardBizNumber, callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/favorite-cards/";

  let obj = getConfigForPutRequest({ cardBizNumber }, token);
  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//Remove Card From Favorites
export function deleteFromFavorites(cardBizNumber, callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/favorite-cards-delete/";
  let obj = getConfigForPutRequest({ cardBizNumber }, token);
  fetch(url, obj)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

//-------Configuration Functions------//

export const forFirstCharUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function normalizeCardToServer(card) {
  return {
    bizName: forFirstCharUppercase(card.bizName),
    bizAddress: forFirstCharUppercase(card.bizAddress),
    bizDescription: forFirstCharUppercase(card.bizDescription),
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
