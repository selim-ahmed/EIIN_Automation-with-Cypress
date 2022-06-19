/// <reference types="cypress-xpath" />

import {reviewer} from "./reviewerPageObject"


const reviewer_dg = new reviewer()

it('Banbeis DG reviewer', ()=> {
    reviewer_dg.navigate()
     
})

//Apply for EIIN
it('Review EIIN Applications', () => {
   
   
    reviewer_dg.applyForEIIN()
           
})
       
//login
it('Login as a Banbeis DG', () => {
         
    reviewer_dg.login('banbeis_dg','123456')
      
})  

it('Pending Applications', () => {
         
    reviewer_dg.pendingApplications()
 
      
}) 