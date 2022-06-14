
export class applicantUser{

    navigate(){

        cy.visit("http://103.4.145.251:3005/")
        cy.viewport(1024, 1080)

    }
       
    applyForEIIN(){
        cy.contains('APPLY FOR EIIN/REVIEW').click()
        cy.wait(2000)
        
    }

    login(username, pass){
        cy.get(':nth-child(1) > .form-control').type(username)
        cy.get(':nth-child(2) > .form-control').type(pass)
        cy.get('.btn-md').click()
        cy.wait(3000) 
    }

    

    EIINapplication(){

        cy.xpath("//span[contains(text(),'EIIN Applications')]").click()
        cy.wait(3000)
        cy.xpath("//span[contains(text(),'Apply for EIIN')]").invoke('show')
        //cy.xpath("//span[contains(text(),'Apply for EIIN')]").invoke('show')
        cy.contains('Apply for EIIN').click({force: true})
        //cy.eq('1')
        cy.xpath("//span[contains(text(),'Apply for EIIN')]").click({force:true})
        //cy.xpath("//span[contains(text(),'Apply for EIIN')]").click()
        cy.wait(5000)
        
       
        // cy.get(':nth-child(3) > .accordion-item > .d-flex > :nth-child(1) > .sidebar-text').click()
        // cy.wait(5000)
        // cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').trigger('click')
        // cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click()
        
        //cy.contains('Apply for EIIN').click({force:true})
        //cy.url().should('include', 'http://103.4.145.251:3005/portal/institute-application/apply') 
          
        
        //cy.get('div.dropdown', {timeout:10000}).contains('Admin').click()
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text', {timeout:3000}).contains('Apply For EIIN').should('be.visible')
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click({ force: true })
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').contains('Apply For EIIN').click({ force: true })

    }

    address(division){

       cy.xpath("//select[contains(@name,'divisionId')]").select(division).should('have.value', division)
       cy.xpath("//select[@name='districtId']").select()
       cy.xpath("//select[@name='thanaId']").select()
       cy.xpath("//select[@name='unionId']").select()
       cy.xpath("//select[@name='mouzaId']").select()
       cy.xpath("//select[@name='postOfficeId']").select()
       cy.xpath("//textarea[@name='address']").select()
       cy.xpath("").select()
       cy.xpath("").select()
       cy.xpath("").select()
       cy.xpath("").select()
       cy.xpath("").select()
       cy.xpath("").select()
        
        
        
        // cy.get(':nth-child(6) > :nth-child(1) > .form-control').select(district).should('have.value', district)
        // cy.get(':nth-child(7) > :nth-child(1) > .form-control').select(thana).should('have.value' , thana)
        // cy.get(':nth-child(8) > :nth-child(1) > .form-control').select(union).should('have.value' , union)
        // cy.get(':nth-child(9) > :nth-child(1) > .form-control').select(mouza).should('have.value' , mouza)
        // cy.get(':nth-child(10) > :nth-child(1) > .form-control').select(postOffice).should('have.value', postOffice)
        // cy.get('.mb-3 > .form-control').type(address)
        
    }

    contactInfo(){
        
       cy.xpath("//input[@placeholder='Enter Telephone']").select()
       cy.xpath("//input[@placeholder='Enter Telephone']").select()
       cy.xpath("//input[@placeholder='Enter Alternate Mobile']").select()
       cy.xpath("//input[@placeholder='Enter Fax']").select()
       cy.xpath("//input[@placeholder='Enter Email']").select()
       cy.xpath("//input[@placeholder='Enter WebSite']").select()
       cy.xpath("//input[@placeholder='Enter WebSite']").select()
       cy.xpath("//input[@placeholder='Enter WebSite']").select()
       cy.xpath("//input[@placeholder='Enter WebSite']").select()
       cy.xpath("//input[@placeholder='Enter WebSite']").select()
       

    }

   instituteInfo(){

        cy.xpath("//select[@name='instituteTypeId']").select()
        cy.xpath("//select[@name='instituteForWhomId']").select()
        cy.xpath("//input[@placeholder='Enter Number Of Shift']").select()
        //Radio button (Institute has english version?)
        cy.xpath("//select[contains(@name,'constituencyId')]").select()
        cy.xpath("//select[@name='managementId']").select()
        cy.xpath("//select[@name='managementId']").select()
        cy.xpath("//select[@name='geographicalPositionId']").select()
        cy.xpath("//select[@name='regionId']").select()
        cy.xpath("//input[@placeholder='Enter Dag No']").select()
        cy.xpath("//input[@placeholder='Enter Total Land Area']").select()
        cy.xpath("//input[@placeholder='Enter Latitude']").select()
        cy.xpath("//input[@placeholder='Enter Longitude']").select()
        //Save & Next Button
        //cy.xpath("//button[@type='submit']").click()
       
    }

}



// Some usefull commands.
// cy.get('.new-todo', {timeout:6000}).type("clear room{enter}")    ---type aspecific text and hit enter
// cy.get('label').should('have.text', 'clear room')     --  validate content
// cy.contains('Clear Completed').click()