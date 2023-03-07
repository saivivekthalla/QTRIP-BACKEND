import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let j = 0;
  for (let i of search) {
    if (i == "=") {
      break;
    }
    j++;
  }
  // console.log(typeof search.slice(j+1,search.length))
  let l = search.length;
  return search.slice(j + 1, l);
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  // console.log(city)
  // let that_city = getCityFromURL(city)
  // console.log(that_city)
  // console.log(`${config.backendEndpoint}/adventures?city=${city}`)
  try {
    let getting = await fetch(
      `${config.backendEndpoint}/adventures?city=${city}`
    );
    let data = await getting.json();
    return data;
  } catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  // console.log(adventures)
  let pointing = document.getElementById("data");
  for (let i = 0; i < adventures.length; i++) {
    pointing.innerHTML += `<div class="col-6 col-lg-3">
  <a id = ${adventures[i].id} href="detail/?adventure=${adventures[i].id}">
  <div class="card  activity-card mt-2">
  <div class = "category-banner">${adventures[i].category}</div>
    <img
      class=" activity-card img"
      src="${adventures[i].image}"
      alt="img"
    />
    <div class="" style="text-align:center;width:100%;">
      <div class="card-body">
        <div class="d-md-flex justify-content-between">

        <span>${adventures[i].name}</span>
        <p>₹${adventures[i].costPerHead}</p>
        </div>
        <div class="given d-md-flex" style="justify-content:space-between;">
        <h5>Duration</h5>
        <p>${adventures[i].duration} Hours</p>
        </div>

      </div>
    </div>
  </div>
  </a>
</div>`;
  }
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

  // let empty = []

  return list.filter((ele) => {
    return ele.duration > parseInt(low) && ele.duration <= parseInt(high);
  });

  // return list

  // return empty
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  // console.log("categoryList")
  if (categoryList.length == 0) {
    // console.log("list")
    return list;
  }
  // console.log(categoryList)
  let empty = [];
  for (let i = 0; i < categoryList.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j].category == categoryList[i]) {
        empty.push(list[j]);
      }
    }
  }

  return empty;
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  // console.log(list)
  if (filters.category.length != 0) {
    // console.log("filters")
    list = filterByCategory(list, filters.category);
  }
  if (filters.duration != "") {
    // console.log("lters")
    // var returned_category = filterByDuration(list, low, high)
    // console.log(filters.duration)
    let arr = filters.duration.split("-");
    list = filterByDuration(list, arr[0], arr[1]);
  }
  // else
  // {
  //   list = filterByCategory(list,filters.category)
  //   console.log(filters.duration.length)
  //   for(let i=0;i<filters.duration.length;i++)
  //   {
  //     console.log("ghjfkjh")
  //     if(filters.duration[i]=="+")
  //     {
  //       var low = parseInt(filters.duration[i-1])
  //       var high = 15
  //     }
  //     if(filters.duration[i]=="-")
  //     {
  //       var low = parseInt(filters.duration[i-1])
  //       var high = parseInt(filters.duration[i+1])
  //     }
  //     console.log(low)
  //   }
  //   // list = filterByDuration(list,low,high)
  // }
  // console.log(list)

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  let storing = JSON.stringify(filters);
  window.localStorage.setItem('filters',storing);

  // return storing;
  // return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  return JSON.parse(window.localStorage.getItem('filters'));  

  // Place holder for functionality to work in the Stubs
 
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  let pointing  = document.getElementById("category-list")
  
  // console.log(filters.category[0])
  for(let i = 0;i<filters.category.length;i++)
  {
  pointing.innerHTML+=`<div class="category-filter">${filters.category[i]}</div>`
  }
  
}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
