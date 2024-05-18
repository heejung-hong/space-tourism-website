/*
// JSON.parse converts JSON to JavaScript object
const dataObject = JSON.parse('{"name": "Moon"}')
console.log(dataObject) // { name: 'Moon' }

// JSON.stringify converts JavaScript object to a string
// when sending data to the API, changes object to JSON string
const dataString = JSON.stringify(dataObject)
console.log(dataString) // {"name":"Moon"}
*/

// fetch is used to make a GET request
// .json() method parses JSON responses into usable JavaScript object literal or array automatically
async function engineer() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  console.log(data);
  let role = data.crew[3].role.toUpperCase();
  document.querySelector('#role').textContent = role;
  let name = data.crew[3].name.toUpperCase();;
  document.querySelector('#name').textContent = name;
  let bio = data.crew[3].bio;
  document.querySelector('#bio').textContent = bio;
  let image = data.crew[3].images.png;
  document.querySelector('#image').src = image;
  document.querySelector('#image').alt = "commander";
}