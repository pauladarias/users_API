const usersList = document.querySelector(".pubs-list");
const addUserForm = document.querySelector(".add-pub-form");
const usernameValue = document.getElementById("pub-name-value");
const emailValue = document.getElementById("pub-email-value");
const btnSubmit = document.querySelector(".btn")

const url = "http://35.178.207.61:8080/pubmate/api/0.1/pub/1"

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })