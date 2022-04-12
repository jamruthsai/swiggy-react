import { BASE_URL } from '../constants/baseUrl';

function handleRestaurantDataSuccess(response) {
  if (!response.ok) {
    const { status, statusText } = response;
    const message = `Status Code: ${status},  Status Text: ${statusText}`;
    throw new Error(message);
  }
  return response.json();
}

function fetchRestaurantData(id = 0) {
  return fetch(`${BASE_URL}/restaurants/${id}`).then(
    handleRestaurantDataSuccess
  );
}

export default fetchRestaurantData;
