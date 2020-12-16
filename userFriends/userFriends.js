const friendsList = document.querySelector(".friends-list");
const acceptFriend = document.querySelector("#accept-user")

let output = "";

const renderUsers = (users) => {
      users.friends.forEach(user => {
      output += `
      <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
        <img src="./user_profile_pic.png" class="card-img-top" alt="...">
        <div class="card-body" data-id=${user.id}>
          <h5 class="card-username">${user.username}</h5>
          <h6 class="card-email mb-2 text-muted">${user.email}</h6>
          <small class="card-subtitle mb-2 text-muted">${user.timestamp}</small>
          <p class="card-text"><em>"Some quick example text to build on the card"</em></p>
          <button type="submit" class="btn btn-primary" id="accept-user">Accept</button>
          <a  href="#" class="btn btn-primary"  id="decline-user">Decline</a>
        </div>
     </div> 
     `

      friendsList.innerHTML = output;
      });
     

}

const url = "http://35.178.207.61:8080/pubmate/api/0.1/friend_management/1/requests";

// GET 

fetch(url)
  .then(response => response.json())
  .then(data => renderUsers(data))

// DELETE REQUEST

// friendsList.addEventListener("click", (e) => {
//   e.preventDefault();
//   let acceptButtonIsPressed = e.target.id == "accept-user"
//   let declineButtonIsPressed = e.target.id == "decline-user"

//   console.log("Accepted!!!")
// })

// POST - ADD friends


acceptFriend.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Friend submited")
})





function AddFriend() {
  fetch("http://35.178.207.61:8080/pubmate/api/0.1/friend_management/1/request", {
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

requestUser();