import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let l = search.length
  for(var i=0;i<l;i++)
  {
    if(search[i]=="=")
    {
      break
    }
  }
  return search.slice(i+1,l)


  // Place holder for functionality to work in the Stubs
  return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
  let getting = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`)
  // console.log(getting)
  return await getting.json()
  }
  catch(err)
  {
    return null
  }
  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  console.log(adventure)
  let pointing = document.getElementById("adventure-name")
  pointing.innerHTML=`${adventure.name}`
  
  let pointing1 = document.getElementById("adventure-subtitle")
  pointing1.innerHTML=`${adventure.subtitle}`
  let pointing2 = document.getElementById("photo-gallery")
    for(let i=0;i<adventure.images.length;i++){
   pointing2.innerHTML+=`<div><img class="activity-card-image" src="${adventure.images[i]}"</div>`
    }
    console.log(pointing2)

   let pointing3 = document.getElementById("adventure-content")
  pointing3.innerHTML=`${adventure.content}`
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let photo = document.getElementById("photo-gallery");
  photo.innerHTML = ``;
  let div = `
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators" id = "indicators">
  </div>
  <div class="carousel-inner" id = "carouselItem">
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `;
  photo.innerHTML += div;
  let count = 0;
  let carouselItem = document.getElementById("carouselItem");
  let indicator = document.getElementById("indicators");
  images.forEach((key) => {
    let photoDiv;
    if (count == 0) {
      photoDiv = `
    <div class="carousel-item active">
      <img src="${key}" class="d-block activity-card-image" alt="..." />
    </div>
    `;
    } else {
      photoDiv = `
    <div class="carousel-item">
      <img src="${key}" class="d-block activity-card-image" alt="..." />
    </div>
    `;
    }

    let buttonDiv = `
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${count}" class="active" aria-current="true" aria-label="Slide ${count}"></button>
    `;

    carouselItem.innerHTML += photoDiv;
    count += 1;
    indicator.innerHTML += buttonDiv;
  });
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
