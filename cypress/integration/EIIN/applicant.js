/// <reference types="cypress-xpath" />

import {applicantUser} from "./pageobjects"
//import * as applicantUser from '../EIIN/pageobjects'

const applicantuser = new applicantUser()

// beforeEach(() =>{
//   applicantuser.navigate()
// })
  

it('EIIN_app', ()=> {
  applicantuser.navigate()

})

    //Apply for EIIN
it('Apply for EIIN', () => {
   
   
  applicantuser.applyForEIIN()
     
})
 
 //login
it('Login EIIN', () => {
   
  applicantuser.login('mhossain','hossain')

})

  

  //EIIN Application
it('EIIN Application', () => {
  
  applicantuser.EIINapplication()
    
})

  // it('EIIN Application Address', () => {
  //   applicantuser.address('4')
    
  // })