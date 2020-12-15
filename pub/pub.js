const pubsList = document.querySelector(".pubs-list");
const addPubForm = document.querySelector(".add-pub-form");
const pubNameValue = document.getElementById("pub-name-value");
const pubEmailValue = document.getElementById("pub-email-value");
const btnSubmit = document.querySelector(".btn")

const url = "http://35.178.207.61:8080/pubmate/api/0.1/pub/1"

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.categories.food)
    pubsList.innerHTML = `
    <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
    <img style="margin-top: 1rem; border-radius: 5px" src="./pub_profile_pic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-pub-name">${data.landlord}</h5>
      <h6 class="card-pub-group mb-2 text-muted">${data.group}</h6>
      <p class="card-pub-description"><em>"${data.description}"</em></p>
      <p class="card-pub-county">${data.county_province}</p>
      <p class="card-pub-email">${data.email}</p>
      <p class="card-pub-phone">${data.phone}</p>
      <a href="#" class="card-link">Edit</a>
      <a href="#" class="card-link">Delete</a>
      <a href="../pubAll/pubAll.html" class="card-link">Pub Info</a>
    </div>
  </div>
    `
console.log(data.categories.food)
  })