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
fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let role = data.crew[0].role.toUpperCase();
    document.querySelector('#role').textContent = role;
    let name = data.crew[0].name.toUpperCase();;
    document.querySelector('#name').textContent = name;
    let bio = data.crew[0].bio;
    document.querySelector('#bio').textContent = bio;
    let image = data.crew[0].images.png;
    document.querySelector('#image').src = image;
    document.querySelector('#image').alt = "commander";
  });


