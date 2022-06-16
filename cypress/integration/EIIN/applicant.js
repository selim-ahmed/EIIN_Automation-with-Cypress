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
  
  applicantuser.EIINapplication("6","46", "43", "555", "3441", "383", "33/1, Ka, Nur Maszid Lane, Shamoly, Dhaka",
   "22012456", "+8801712454635", "+8801552556688", "5656266", "fakemail@gmail.com", "https://www.shamolischool.com", 
   "3", "4","2", "19", "4", "2", "2", "4", "1245", "2.36", "13.0548", "51.2784"
  
  )
    
})
