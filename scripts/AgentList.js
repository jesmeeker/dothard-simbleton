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


export const agentNames = () => {
    const businesses = getBusinesses()

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

// let agents = agentNames()
// console.log(agents)