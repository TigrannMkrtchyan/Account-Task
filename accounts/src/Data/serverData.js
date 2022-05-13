export const serverData = () => {
  return fetch('http://localhost:4000/data')
    .then(response => response.json())
}