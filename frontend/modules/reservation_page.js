import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try{
    let getting = await fetch(`${config.backendEndpoint}/reservations`)
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

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  console.log(reservations)
  if(reservations.length != 0){
    document.getElementById("reservation-table-parent").style.display="block"
    document.getElementById("no-reservation-banner").style.display="none"
  }
  else{
    document.getElementById("no-reservation-banner").style.display="block"
    document.getElementById("reservation-table-parent").style.display="none"
  }
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  let pointing = document.getElementById("reservation-table")
  for(let i=0;i<reservations.length;i++){
  
    let d = new Date(reservations[i].date);
    let text = d.toLocaleString();
    let text1 = text.split(",")[0]
    let text2=text1.split("/")
    let text3 = [text2[1],text2[0],text2[2]]
    //console.log(text3)
    let text4 = text3.join("/")
    console.log(text4)
    const date = new Date(reservations[i].time);


              const monthNames = [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"
              ];


              const day = date.getDate();
              const monthIndex = date.getMonth();
              const year = date.getFullYear();


              const hours = date.getHours();
              const minutes = date.getMinutes();
              const seconds = date.getSeconds();


              const amOrPm = hours < 12 ? "am" : "pm";


              const hours12 = hours % 12 || 12;


              const formattedDate = `${day} ${monthNames[monthIndex]} ${year}, ${hours12}:${minutes}:${seconds} ${amOrPm}`;

              ;
    
              var ele = reservations[i];
  console.log(formattedDate)
  pointing.innerHTML+=
  `<tr>
      <td>${reservations[i].id}</td>
      <td>${reservations[i].name}</td> 
      <td>${reservations[i].adventureName}</td> 
      <td>${reservations[i].person}</td>
      <td>${text4}</td>  
      <td>${reservations[i].price}</td> 
      <td>${formattedDate}</td> 
      <td><button id  = "${reservations[i].id}" class="reservation-visit-button"><a href = "../detail/?adventure=${reservations[i].adventure}">Visit Adventure</a></button</td></tr>`
  }

  
  //Conditionally render the no-reservation-banner and reservation-table-parent
  
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
