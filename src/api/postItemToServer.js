//Helpers
import _uniqueId from 'lodash/uniqueId';
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

export default function postItemToServer(key, value) {
  const postData = {
    id: _uniqueId(),
    [key]: value,
  };
  const postInit = getPostInitData(postData);
  fetch(`${BASE_URL}/saveCartItems`, postInit);
}
