import { getBusinesses } from "./database.js"

//Build a function named the same inside it that uses .filter() to generate a list of companies in the industry of "Manufacturing".

export const manufacturingBusinesses = () => {
    const businesses = getBusinesses()
    const manufacturingBusinessArray = businesses.filter(businesses => businesses.companyIndustry === 'Manufacturing')
    let manufacturingHTML = ""
    manufacturingBusinessArray.forEach(

    (businessObject) => {
        manufacturingHTML += `
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

    return manufacturingHTML
}


//Invoke the function in the correct place in main.js to view your results on the DOM.*/