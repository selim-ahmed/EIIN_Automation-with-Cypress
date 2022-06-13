/// <reference types="cypress-xpath" />
import React from 'react';



it('EIIN_app', ()=> {
    cy.visit("http://103.4.145.251:3005/")
    cy.viewport(1024, 1080)
  })

    //Apply for EIIN
it('Apply for EIIN', () => {
   
   
    cy.contains('APPLY FOR EIIN/REVIEW').click()
    cy.wait(2000)
     
  })
 
 //login
it('Login EIIN', () => {
   
    cy.get(':nth-child(1) > .form-control').type('mhossain')
        cy.get(':nth-child(2) > .form-control').type('hossain')
        cy.get('.btn-md').click()
        cy.wait(3000) 

  })

  //EIIN Application
it('EIIN Application', () => {
    cy.xpath("//span[contains(text(),'EIIN Applications')]").click()
    cy.wait(3000)
    cy.xpath("//span[contains(text(),'Apply for EIIN')]").trigger('mouseover').click()
    cy.wait(5000)
    
  })

