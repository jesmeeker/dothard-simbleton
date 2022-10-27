//import fundtion to create the DB of businesses from database.js
import { getBusinesses } from "./database.js"


//build and export a function named businessList()
/*
  Business List Component Function

  Responsibility:
    Generate the HTML representation for every business object

  Parameters:
    None

  Returns:
    (string) - HTML representation of entire business list
*/

export const businessList = () => {
    const businessArray = getBusinesses()
    let businessListHTML = "<h1>Active Businesses</h1>"

    //use .forEach to generate HTML representation of businesses
    businessArray.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            businessListHTML += `
                <section class="business">
                    <h2 class="business_name">${businessObject.companyName}</h2>
                    <div class="business__address">${businessObject.addressFullStreet}</div>
                    <div class="business__address">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                    </div>
                </section>
                <hr></hr>
            `
        }
    )

    return businessListHTML
}

