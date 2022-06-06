/// <reference types="cypress-xpath" />

import {applicantUser} from "./pageobjects"

const applicantuser = new applicantUser()


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

   
  // //Basic Information
  // it('Basic Information of EIIN Application', () => {

  //   applicantuser.basicInfo('Jugipara School-4','জুগিপাড়া স্কুল-4')
    
  // })
   
     //Address
  //it('Address', () => {  

    // applicantuser.address('4')

    // applicantuser.address(8,60,492,7017,56942,496,
    //   'The school was established in 1832 as Rangpur Zamindar School,by the local Zaminders or landlords.')
    //,'Dhaka','Mohammadpur','WARD NO-32 (45)','BABAR ROAD','Mohammadpur Housing - 1207',
    //'The school was established in 1832 as Rangpur Zamindar School,by the local Zaminders or landlords.'

  //})  