/// <reference types="cypress-xpath" />

import {reviewer} from "./reviewerPageObject"


const reviewer_sa = new reviewer()

it('Banbeis SA reviewer', ()=> {
    reviewer_sa.navigate()
     
})

//Apply for EIIN
it('Review EIIN Applications', () => {
   
   
    reviewer_sa.applyForEIIN()
           
})
       
//login
it('Login as a Banbeis SA', () => {
         
    reviewer_sa.login('banbeis_sa','123456')
      
})

it('Pending Applications', () => {
         
    reviewer_sa.pendingApplications()

       
}) 