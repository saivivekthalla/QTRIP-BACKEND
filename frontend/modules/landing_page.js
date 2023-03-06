import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log(cities)
  //Updates the DOM with the cities
  cities.forEach((key) => {
    
    addCityToDOM(key.id, key.city, key.description, key.image);
    
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
  let result = await fetch(`${config.backendEndpoint}/cities`)
  
  let data= result.json()
  
  return data
  }
  catch(err){
    return null
  }
  
  

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let pointing = document.getElementById("data")
  
  pointing.innerHTML+= `<div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                                <div class="tile card">
                                  <a id = ${id} href="pages/adventures/?city=${id}">
                                  <img class="card-img" src=${image} alt="img">
                                  <div class="kkk card-img-overlay">
                                    <h4 >${city}</h4>
                                    <p >${description}</p>
                                </div>
                                  
                                </a>
                                </div>
                                
                              </div>`
   
    // return pointing



}

export { init, fetchCities, addCityToDOM };
