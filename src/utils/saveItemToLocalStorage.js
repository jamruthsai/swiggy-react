export default function saveItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
