//Helpers
import { BASE_URL } from '../constants/baseUrl';

function getPostInitData(postData) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };
}

function handlepostCartDetailsSuccess(response) {
  if (!response.ok) {
    const { status, statusText } = response;
    console.log(status);
    const message = `Status Code: ${status},  Status Text: ${statusText}`;
    throw new Error(message);
  }
  return response.json();
}

export default function postCartDetails(postData) {
  const postInit = getPostInitData(postData);
  return fetch(`${BASE_URL}/saveCartItems`, postInit).then(
    handlepostCartDetailsSuccess
  );
}
