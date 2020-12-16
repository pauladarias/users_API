const friendsList = document.querySelector(".friends-list");

let output = "";

// const renderUsers = (users) => {
//       data.forEach(user => {
//       output += `
//       <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
//         <img src="./user_profile_pic.png" class="card-img-top" alt="...">
//         <div class="card-body" data-id=${data.friends[0].id}>
//           <h5 class="card-username">${data.username}</h5>
//           <h6 class="card-email mb-2 text-muted">${data.email}</h6>
//           <small class="card-subtitle mb-2 text-muted">${data.timestamp}</small>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="card-link" id="edit-user">Edit</a>
//           <a href="#" class="card-link" id="delete-user">Delete</a>
//         </div>
//      </div>
//      `
//     });

// }

const url = "http://35.178.207.61:8080/pubmate/api/0.1/friend_management/1/requests";

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.friends.forEach(user => {
      output += `
      <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
        <img src="./user_profile_pic.png" class="card-img-top" alt="...">
          <h5 class="card-username">${user.username}</h5>
          <h6 class="card-email mb-2 text-muted">${user.email}</h6>
          <small class="card-subtitle mb-2 text-muted">${user.timestamp}</small>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link" id="edit-user">Edit</a>
          <a href="#" class="card-link" id="delete-user">Delete</a>
        </div>
      </div>
      `
      console.log(user)
    })  
    friendsList.innerHTML = output;
  })

