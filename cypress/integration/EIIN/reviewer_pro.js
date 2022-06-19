/// <reference types="cypress-xpath" />

import {reviewer} from "./reviewerPageObject"


const reviewer_pro = new reviewer()

it('Banbeis Programmer reviewer', ()=> {
    reviewer_pro.navigate()
     
})

//Apply for EIIN
it('Review EIIN Applications', () => {
   
   
    reviewer_pro.applyForEIIN()
           
})
       
//login
it('Login as a Banbeis Programmer', () => {
         
    reviewer_pro.login('banbeis_pro','123456')
      
})  


it('Institute Registration', () => {
         
    reviewer_pro.instituteRegistration("akkas")

}) 

// it('Pending Applications', () => {
         
//     reviewer_pro.pendingApplications()

// }) 

     

// it('Reviewed Applications', () => {
         
//     reviewer_pro.login('banbeis_pro','123456')
      
// }) 

// it('Rejected Applications', () => {
         
//     reviewer_pro.login('banbeis_pro','123456')
      
// }) 