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
const businessArray = getBusinesses()

export const businessList = () => {
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



document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                /*
                    When the user presses 'Enter', find the matching business.*/
                if (keyPressEvent.charCode === 13) {

                    for (const business of businessArray) {
                        if (business.companyName.includes(keyPressEvent.target.value)) {
                            
                            companySearchResultArticle.innerHTML += `<section class="business">
                            <h2 class="business_name">${business.companyName}</h2>
                            <div class="business__address">${business.addressFullStreet}</div>
                            <div class="business__address">${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                            </div>
                                </section>
                                    <hr></hr>` 

                                    return matchingBusiness
                                }

                }



                       /*() You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */
                        ///using .find() to return an exact match to what the user types in
                    // const foundBusiness = businessArray.find(businessArray=>(businessArray.companyName === `${keyPressEvent.target.value}`))
                        
                    // companySearchResultArticle.innerHTML = `<section class="business">
                    //     <h2 class="business_name">${foundBusiness.companyName}</h2>
                    //     <div class="business__address">${foundBusiness.addressFullStreet}</div>
                    //     <div class="business__address">${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                    //     </div>
                    //     </section>
                    //     <hr></hr>`
                    }
                        
                }
            
        );
