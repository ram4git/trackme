const BASE_URL = 'https://uinames.com/api/?ext'

const checkStatus = function(response) {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export function getRandomContacts(size) {
  const URL = `${BASE_URL}&amount=${size}`;
  return fetch(URL)
    .then(checkStatus)
    .then(response => response.json())
    .catch(e => e);
}
