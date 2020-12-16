const pubsList = document.querySelector(".pubs-list");
const addPubForm = document.querySelector(".add-pub-form");
const pubNameValue = document.getElementById("pub-name-value");
const pubGroupValue = document.getElementById("pub-group-value");
const pubDescriptionValue = document.getElementById("pub-description-value");
const pubCountyValue = document.getElementById("pub-county-value");
const pubEmailValue = document.getElementById("pub-email-value");
const pubPhoneValue = document.getElementById("pub-phone-value");
const btnSubmit = document.querySelector(".btn")

const url = "http://35.178.207.61:8080/pubmate/api/0.1/pub/1"

fetch(url)
  .then(response => response.json())
  .then(data => {
    pubsList.innerHTML = `
    <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
    <img style="margin-top: 1rem; border-radius: 5px" src="./pub_profile_pic.jpg" class="card-img-top" alt="...">
    <div class="card-body" data-id=${data.id}>
      <h5 class="card-pub-name">${data.landlord}</h5>
      <h6 class="card-pub-group mb-2 text-muted">${data.group}</h6>
      <p class="card-pub-description"><em>"${data.description}"</em></p>
      <p class="card-pub-county">${data.county_province}</p>
      <p class="card-pub-email">${data.email}</p>
      <p class="card-pub-phone">${data.phone}</p>
      <a href="#" class="card-link" id="edit-pub">Edit</a>
      <a href="#" class="card-link" id="delete-pub">Delete</a>
      <a href="../pubAll/pubAll.html" class="card-link">Pub Info</a>
    </div>
  </div>
    `
    pubsList.addEventListener("click", (e) =>{
      e.preventDefault();
      let editButtonIsPressed = e.target.id == "edit-pub"
      let deleteButtonIsPressed = e.target.id == "delete-pub"
  
      let id = (e.target.parentElement.dataset.id)
  
      //DELETE EXISTING USER
        if(deleteButtonIsPressed) {
          fetch("http://35.178.207.61:8080/pubmate/api/0.1/pub/" + `${id}`, {
            method: "DELETE",
          })
            .then(res => res.json())
            .then(() => location.reload())
        }
  
        if(editButtonIsPressed) {
          const parent = e.target.parentElement;
          let pubNameContent = parent.querySelector(".card-pub-name").textContent
          let pubGroupContent = parent.querySelector(".card-pub-group").textContent
          let pubDescriptionContent = parent.querySelector(".card-pub-description").textContent
          let pubCountyContent = parent.querySelector(".card-pub-county").textContent
          let pubEmailContent = parent.querySelector(".card-pub-email").textContent
          let pubPhoneContent = parent.querySelector(".card-pub-phone").textContent
  
          pubNameValue.value = pubNameContent;
          pubGroupContent.value = pubGroupContent;
          pubDescriptionContent.value = pubDescriptionContent;
          pubCountyContent.value = pubCountyContent;
          pubEmailValue.value = pubEmailContent;
          pubPhoneContent.value = pubPhoneContent;
        }
  
        // UPDATE THE EXISTING USER
        btnSubmit.addEventListener("click", () => {
         fetch("http://35.178.207.61:8080/pubmate/api/0.1/pub/" + `${id}`, {
           method: "PATCH",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
             pubname: pubNameValue.value,
             pubgroup: pubGroupValue.value,
             pubemail: pubEmailValue.value
           })
           .then(res => res.json())
           .then(() => location.reload)
         })
        })
      })



  })

  function addPub() {
    fetch("http://35.178.207.61:8080/pubmate/api/0.1/pub/", {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        id: 1,
        landlord: "Museum Tavern",
        group: "ales and more",
        description: "The local pub"

      })
    })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw Error("ERROR")
      }
      return response.text()
    }).then(text => {
      console.log(text)
        
    })
  }
  
  addPub();
