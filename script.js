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
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('#desImage').src = data.destinations[0].images.png;
    document.querySelector('#desImage').alt = "moon";
    document.querySelector('#desName').textContent = data.destinations[0].name.toUpperCase();
    document.querySelector('#description').textContent = data.destinations[0].description;
    document.querySelector('#distance').textContent = data.destinations[0].distance.toUpperCase();
    document.querySelector('#travel').textContent = data.destinations[0].travel.toUpperCase();
  });

fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('#role').textContent = data.crew[0].role.toUpperCase();
    document.querySelector('#name').textContent = data.crew[0].name.toUpperCase();
    document.querySelector('#bio').textContent = data.crew[0].bio;
    document.querySelector('#image').src = data.crew[0].images.png;
    document.querySelector('#image').alt = "commander";
  });

fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('#techName').textContent = data.technology[0].name.toUpperCase();
    document.querySelector('#techDescription').textContent = data.technology[0].description;
    document.querySelector('#techImage').src = data.technology[0].images.portrait;
    document.querySelector('#techImage').alt = "launch vehicle";
  });

async function moon() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#desImage').src = data.destinations[0].images.png;
  document.querySelector('#desImage').alt = "mars";
  document.querySelector('#desName').textContent = data.destinations[0].name.toUpperCase();
  document.querySelector('#distance').textContent = data.destinations[0].distance.toUpperCase();
  document.querySelector('#travel').textContent = data.destinations[0].travel.toUpperCase();
}
  
async function mars() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#desImage').src = data.destinations[1].images.png;
  document.querySelector('#desImage').alt = "mars";
  document.querySelector('#desName').textContent = data.destinations[1].name.toUpperCase();
  document.querySelector('#distance').textContent = data.destinations[1].distance.toUpperCase();
  document.querySelector('#travel').textContent = data.destinations[1].travel.toUpperCase();
}
  
async function europa() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#desImage').src = data.destinations[2].images.png;
  document.querySelector('#desImage').alt = "mars";
  document.querySelector('#desName').textContent = data.destinations[2].name.toUpperCase();
  document.querySelector('#distance').textContent = data.destinations[2].distance.toUpperCase();
  document.querySelector('#travel').textContent = data.destinations[2].travel.toUpperCase();
}
  
async function titan() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#desImage').src = data.destinations[3].images.png;
  document.querySelector('#desImage').alt = "mars";
  document.querySelector('#desName').textContent = data.destinations[3].name.toUpperCase();
  document.querySelector('#distance').textContent = data.destinations[3].distance.toUpperCase();
  document.querySelector('#travel').textContent = data.destinations[3].travel.toUpperCase();
}

async function commander() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#role').textContent = data.crew[0].role.toUpperCase();
  document.querySelector('#name').textContent = data.crew[0].name.toUpperCase();
  document.querySelector('#bio').textContent = data.crew[0].bio;
  document.querySelector('#image').src = data.crew[0].images.png;
  document.querySelector('#image').alt = "commander";
}

async function specialist() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#role').textContent = data.crew[1].role.toUpperCase();
  document.querySelector('#name').textContent = data.crew[1].name.toUpperCase();
  document.querySelector('#bio').textContent = data.crew[1].bio;
  document.querySelector('#image').src = data.crew[1].images.png;
  document.querySelector('#image').alt = "mission specialist";
}

async function pilot() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#role').textContent = data.crew[2].role.toUpperCase();
  document.querySelector('#name').textContent = data.crew[2].name.toUpperCase();
  document.querySelector('#bio').textContent = data.crew[2].bio;
  document.querySelector('#image').src = data.crew[2].images.png;
  document.querySelector('#image').alt = "pilot";
}

async function engineer() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#role').textContent = data.crew[3].role.toUpperCase();
  document.querySelector('#name').textContent = data.crew[3].name.toUpperCase();
  document.querySelector('#bio').textContent = data.crew[3].bio;
  document.querySelector('#image').src = data.crew[3].images.png;
  document.querySelector('#image').alt = "flight engineer";
}

async function vehicle() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#techName').textContent = data.technology[0].name.toUpperCase();
  document.querySelector('#techDescription').textContent = data.technology[0].description;
  document.querySelector('#techImage').src = data.technology[0].images.portrait;
  document.querySelector('#techImage').alt = "launch vehicle";
}

async function spaceport() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#techName').textContent = data.technology[1].name.toUpperCase();
  document.querySelector('#techDescription').textContent = data.technology[1].description;
  document.querySelector('#techImage').src = data.technology[1].images.portrait;
  document.querySelector('#techImage').alt = "launch vehicle";
}

async function capsule() {
  const response = await fetch('https://raw.githubusercontent.com/heejung-hong/space-tourism-website/main/data.json')
  const data = await response.json();
  document.querySelector('#techName').textContent = data.technology[2].name.toUpperCase();
  document.querySelector('#techDescription').textContent = data.technology[2].description;
  document.querySelector('#techImage').src = data.technology[2].images.portrait;
  document.querySelector('#techImage').alt = "launch vehicle";
}