
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

        cy.get(':nth-child(3) > .accordion-item > .d-flex > :nth-child(1) > .sidebar-text').click()
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').trigger('mouseover')
        cy.wait(3000)
        cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text', {timeout: 5000}).contains('Apply For EIIN').click()
        
        //cy.get('div.dropdown', {timeout:10000}).contains('Admin').click()

        //cy.get('div.subdropdown', {timeout:10000}).contains('Catalog Admin').should('be.visible')

        //cy.get('div.subdropdown').contains('Catalog Admin').click({ force: true })
     
    }

    address(division){

       cy.get(':nth-child(5) > :nth-child(1) > .form-control').select(division).should('have.value', division)
        
        
        
        // cy.get(':nth-child(6) > :nth-child(1) > .form-control').select(district).should('have.value', district)
        // cy.get(':nth-child(7) > :nth-child(1) > .form-control').select(thana).should('have.value' , thana)
        // cy.get(':nth-child(8) > :nth-child(1) > .form-control').select(union).should('have.value' , union)
        // cy.get(':nth-child(9) > :nth-child(1) > .form-control').select(mouza).should('have.value' , mouza)
        // cy.get(':nth-child(10) > :nth-child(1) > .form-control').select(postOffice).should('have.value', postOffice)
        // cy.get('.mb-3 > .form-control').type(address)
        
    }

    // contactInfo(telephone, mobile, alternateMobile, fax, email, website){
    //     cy.get(':nth-child(13) > .form-control').type(telephone)
    //     cy.get(':nth-child(14) > .form-control').type(mobile)
    //     cy.get(':nth-child(15) > .form-control').type(alternateMobile)
    //     cy.get(':nth-child(16) > .form-control').type(fax)
    //     cy.get(':nth-child(17) > .form-control').type(email)
    //     cy.get(':nth-child(18) > .form-control').type(website)
        
    // }

    // instituteInfo(
    //     instituteType, 
    //     InstituteForWhome, 
    //     NoOfShift, 
    //     constituency,
    //     management, 
    //     areaStatus, 
    //     geoPosition, 
    //     region,
    //     dagNo, 
    //     totalLand, 
    //     latitude, 
    //     longitude){
    //     cy.get(':nth-child(20) > :nth-child(1) > .form-control').select(instituteType).should('have.value' ,instituteType)
    //     cy.get(':nth-child(21) > :nth-child(1) > .form-control').select(InstituteForWhome).should('have.value' ,InstituteForWhome)
    //     cy.get(':nth-child(22) > .form-control').type(NoOfShift)
    //     cy.get('label.ml-5 > input').first().check()
    //     cy.get(':nth-child(24) > :nth-child(1) > .form-control').select(constituency).should('have.value', constituency)
    //     cy.get(':nth-child(25) > :nth-child(1) > .form-control').select(management).should('have.value', management)
    //     cy.get(':nth-child(26) > :nth-child(1) > .form-control').select(areaStatus).should('have.value' , areaStatus)
    //     cy.get(':nth-child(27) > :nth-child(1) > .form-control').select(geoPosition).should('have.value', geoPosition)
    //     cy.get(':nth-child(28) > :nth-child(1) > .form-control').select(region).should('have.value' ,region)
    //     cy.get(':nth-child(29) > .form-control').type(dagNo)
    //     cy.get(':nth-child(30) > .form-control').type(totalLand)
    //     cy.get(':nth-child(31) > .form-control').type(latitude)
    //     cy.get(':nth-child(32) > .form-control').type(longitude)
        
    // }

    // saveToNext(){
    //     // cy.get('.mb-10 > .f-right').click()
    //     cy.contains('Save & Next').click();
        
    // }
    
    
}