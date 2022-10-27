//import fundtion to create the DB of businesses from database.js
import { getBusinesses } from "./database.js"

//Build a function named the same inside it that uses .map() to generate an HTML representation of each purchasing agent. Display the agent's name, company, and phone number.


// const businessList = () => {
//     const businesses = getBusinesses()
//     let businessListHTML = "" 
    
//     businesses.forEach(
//     // This function will be invoked on each iteration
//         (businessObject) => {
//             businessListHTML += `
//                 <section class="business">
//                     <h2 class="business__address">${businessObject.companyName}</h2>
//                     <div class="business__address">${businessObject.phoneWork}</div>
//                     </div>
//                 </section>
//                 <hr></hr>
//             `
//         }
//     )       
// return businessListHTML

// }


const businesses = getBusinesses()
export const agentNames = () => {

    const agentHTMLRepresentations = businesses.map(business => (`<div class="business_name">${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast} </div><section class="business">
            <div class="business__address">${business.companyName}</h2>
            <div class="business__address">${business.phoneWork}</div>
            </div>
        </section>
        <hr></hr>
        `))
    // const businessHTMLRepresentations = businesses.map(business => (`${business.companyName} ${business.phoneWork}`))
    
    let finalHTML = ``
    finalHTML += agentHTMLRepresentations.join(` `)

    



return finalHTML

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

                    for (const business of businesses) {
                        if (business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)) {
                            
                            companySearchResultArticle.innerHTML += `<section class="business">
                            <h2 class="business_name">${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h2>
                            <div class="business__address">${business.phoneWork}</div>
                                </section>
                                    <hr></hr>` 

                                    return matchingBusiness
                        }
                    }
                }
             }
        );

