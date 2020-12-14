function fetchData() {
  fetch("http://35.178.207.61:8080/pubmate/api/0.1/user/1")
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw Error("ERROR")
    }
    return response.json()
  }).then(data => {
    console.log(data.username)
    // mapping over (if array of users) each user 
    //const html = data.users.map(user =>{
      // return `<p>Name: ${user.name}</p>
    //})
    document.querySelector("#app").innerHTML = 
      `
      <h1>USERS</h1>
      <div class="user">
        <h1>${data.id}</h1>
        <p>User Name: ${data.username}</p>
        <p>User Email: ${data.email}</p>
      </div>
      `
      
  }).catch(err =>{
    console.log(err)
  })
}

fetchData();