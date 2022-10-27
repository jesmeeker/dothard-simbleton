import { getBusinesses } from "./database.js";





export const newYorkBusiness = () => {
    //call the getBusinesses function that returns a new array of business objects from DB 
    let businesses = getBusinesses()
    // .filter that puts NY businesses into a new array newYorkBusinessesArray
    const newYorkBusinessesArray = businesses.filter(businesses => businesses.addressStateCode === 'NY')
    //define a string for HTML
    let newYorkBusinessListHTML = ""

    //use .forEach to iterate array and generate HTML for each object
    newYorkBusinessesArray.forEach(

        (businessObject) => {
            newYorkBusinessListHTML += `
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

    return newYorkBusinessListHTML
}