// function fetchData() {
//   fetch("http://35.178.207.61:8080/pubmate/api/0.1/user/1")
//   .then(response => {
//     console.log(response)
//     if (!response.ok) {
//       throw Error("ERROR")
//     }
//     return response.json()
//   }).then(data => {
//     console.log(data.username)
//     // mapping over (if array of users) each user 
//     //const html = data.users.map(user =>{
//       // return `<p>Name: ${user.name}</p>
//     //})
//     document.querySelector("#app").innerHTML = 
//       `
//       <h1>USERS</h1>
//       <div class="user">
//         <h1>${data.id}</h1>
//         <p>User Name: ${data.username}</p>
//         <p>User Email: ${data.email}</p>
//       </div>
//       `

//   }).catch(err =>{
//     console.log(err)
//   })
// }

// fetchData();

// function postData() {
//   fetch("http://35.178.207.61:8080/pubmate/api/0.1/user", {
//     method: "POST", 
//     headers: {
//       "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//       username: "Paula",
//       email: "pauldare@mail.com"
//     })
//   })
//   .then(response => {
//     console.log(response)
//     if (!response.ok) {
//       throw Error("ERROR")
//     }
//     return response.json()
//   }).then(data => {
//     console.log(data)
      
//   }).catch(err =>{
//     console.log(err)
//   })
// }

// postData();


// ----------------------

const usersList = document.querySelector(".users-list");
const addUserForm = document.querySelector(".add-user-form");
const usernameValue = document.getElementById("username-value");
const emailValue = document.getElementById("email-value");
const btnSubmit = document.querySelector(".btn")
let output = "";

//const renderUsers = (users) => {
      // data.forEach(user => {
    //   output += `
    //   <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
    //     <img src="./user_profile_pic.png" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       <a href="#" class="card-link">Edit</a>
    //       <a href="#" class="card-link">Delete</a>
    //     </div>
    //  </div>
    //   `
    // });

//}

const url = "http://35.178.207.61:8080/pubmate/api/0.1/user/1";

fetch(url)
  .then(response => response.json())
  .then(data => {
    //.then(data => renderUsers(data))
    usersList.innerHTML = `
      <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
        <img src="./user_profile_pic.png" class="card-img-top" alt="...">
        <div class="card-body" data-id=${data.id}>
          <h5 class="card-username">${data.username}</h5>
          <h6 class="card-email mb-2 text-muted">${data.email}</h6>
          <small class="card-subtitle mb-2 text-muted">${data.timestamp}</small>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link" id="edit-user">Edit</a>
          <a href="#" class="card-link" id="delete-user">Delete</a>
        </div>
     </div>
     `
  usersList.addEventListener("click", (e) =>{
    e.preventDefault();
    let editButtonIsPressed = e.target.id == "edit-user"
    let deleteButtonIsPressed = e.target.id == "delete-user"

    let id = (e.target.parentElement.dataset.id)

    //DELETE EXISTING USER
      if(deleteButtonIsPressed) {
        fetch("http://35.178.207.61:8080/pubmate/api/0.1/user/" + `${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(() => location.reload())
      }

      if(editButtonIsPressed) {
        const parent = e.target.parentElement;
        let usernameContent = parent.querySelector(".card-username").textContent
        let emailContent = parent.querySelector(".card-email").textContent

        usernameValue.value = usernameContent;
        emailValue.value = emailContent;
      }

      // UPDATE THE EXISTING USER
      btnSubmit.addEventListener("click", () => {
       fetch("http://35.178.207.61:8080/pubmate/api/0.1/user/" + `${id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           username: usernameValue.value,
           email: emailValue.value
         })
         .then(res => res.json())
         .then(() => location.reload)
       })
      })
    })
  })

  // POST METHOD ADD USER - input value - NOT WORKING -----------

  // addUserForm.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   console.log(usernameValue.value)
  //   fetch("http://35.178.207.61:8080/pubmate/api/0.1/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({
  //       username: usernameValue.value,
  //       email: emailValue.value
  //     })
  //   })
  //   .then(response => response.text())
  //   console.log(response)
  //   .then(text => {
  //     console.log(text)
  //     // const dataArr = [];
  //     // dataArr.push(data);
  //     //renderUsers(dataArr)
  //   })
  // })

function postData() {
  fetch("http://35.178.207.61:8080/pubmate/api/0.1/user", {
    method: "POST", 
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      id: "6",
      username: 'Paula',
      email: 'pauldare@mail.com'
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

postData();



