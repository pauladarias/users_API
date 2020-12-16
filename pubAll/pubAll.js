const pubsAll = document.querySelector(".pub-all");
const pubNameValue = document.getElementById("pub-name-value");
const pubEmailValue = document.getElementById("pub-email-value");

const url = "http://35.178.207.61:8080/pubmate/api/0.1/pub/1/all"

fetch(url)
  .then(response => response.json())
  .then (data => {
    pubsAll.innerHTML = `

    <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
      <img style="margin-top: 1rem; border-radius: 5px" src="./pub_profile_pic.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-pub-name">${data.pub.landlord}</h5>
        <h6 class="card-pub-group mb-2 text-muted">${data.pub.group}</h6>
        <p class="card-pub-description">${data.pub.description}</p>
        <p class="card-pub-address">${data.pub.line1}, ${data.pub.line2}, ${data.pub.line3}. ${data.pub.city}</p>
        <p class="card-pub-county">${data.pub.county_province}</p>
        <p class="card-pub-zipcode">${data.pub.zip_or_postcode}</p>
        <p class="card-pub-country">${data.pub.country}</p>
        <p class="card-pub-email">${data.pub.email}</p>
        <p class="card-pub-phone">${data.pub.phone}</p>
        <p class="card-pub-coordinate">${data.pub.coordinate.x} // ${data.pub.coordinate.y}</p>
        <p class="card-pub-photo">${data.pub.imageUrl}</p>
        <p class="card-pub-date">${data.pub.timestamp}</p>
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
      </div>
    </div>

    <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
      <div class="card-body">
        <h5>${data.pub.landlord}'s Categories</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Food
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Restaurant
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Live Sport
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Live Music
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Beer Garden
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Child Friendly
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Pub Quiz
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Real Ale
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Craft Beer
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Micro Brewery
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Sunday Roast
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Breakfast
          </label>
        </div>       
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
          <label class="form-check-label" for="defaultCheck2">
            Vegan
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Accommodation
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            After Work
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            River Side
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Games Room
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Take Away
          </label>
        </div>
   

        <h5 style="margin-top: .5rem">${data.pub.landlord}'s Amenities and Facilities</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Pool Table
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Dart Board
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Beer Garden
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Outdoor Seating
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Disabled Access
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Parking
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Near Public Transport
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Outdoors Heaters
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="food" checked>
          <label class="form-check-label" for="food">
            Function Room
          </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="food" checked>
        <label class="form-check-label" for="food">
          Open Fire
        </label>
      </div>
        
        <div style="margin-top: 1rem">
          <a href="#" class="card-link">Edit</a>
        </div>

      </div> 
    </div>

    <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
      <div class="card-body">
      <h4 style="margin-top: .5rem">${data.pub.landlord}'s Opening Hours</h4>
      <p style="margin-top: 1rem"><strong>Monday:</strong> ${data.openingHours.monday[0].open} - ${data.openingHours.monday[0].closed} - ${data.openingHours.monday[1].open} ${data.openingHours.monday[1].closed}</p>
      <p><strong>Tuesday:</strong> ${data.openingHours.tuesday[0].open} - ${data.openingHours.tuesday[0].closed} - ${data.openingHours.tuesday[1].open} ${data.openingHours.tuesday[1].closed}</p>
      <p><strong>Wednesday:</strong> ${data.openingHours.wednesday[0].open} - ${data.openingHours.wednesday[0].closed} - ${data.openingHours.wednesday[1].open} ${data.openingHours.wednesday[1].closed}</p>
      <p><strong>Thursday:</strong> ${data.openingHours.thursday[0].open} - ${data.openingHours.thursday[0].closed} - ${data.openingHours.thursday[1].open} ${data.openingHours.thursday[1].closed}</p>
      <p><strong>Friday:</strong> ${data.openingHours.friday[0].open} - ${data.openingHours.friday[0].closed} - ${data.openingHours.friday[1].open} ${data.openingHours.friday[1].closed}</p>
      <p><strong>Saturday:</strong> ${data.openingHours.saturday[0].open} - ${data.openingHours.saturday[0].closed} </p>
      <p><strong>Sunday:</strong> ${data.openingHours.sunday[0].open} - ${data.openingHours.sunday[0].closed} </p>
      </div>
    </div>

    <div class="card mt-4 col-md-6 bg-light" style="width: 18rem;">
      <div class="card-body">
      <h4 style="margin-top: .5rem">${data.pub.landlord}'s Reviews</h4>
      <p style="margin-top: 1rem"><em>"${data.commentry[0].text}"</em></p>
      <p style="text-align: center">Rating: ${data.commentry[0].rate} - Pricing: ${data.commentry[0].price}</p>
      <hr>
      <p><em>"${data.commentry[1].text}"</em></p>
      <p style="text-align: center">Rating: ${data.commentry[1].rate} - Pricing: ${data.commentry[1].price}</p>

      </div>
    </div>


    `
 
  })

