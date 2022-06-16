
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

    

    EIINapplication(division, district, thana, union, mouza, postOffice, address, telephone, mobile,
        alterMobile, faxNo, email, website,instituteType, forWhom, noOfShift, constituencyId, managementId,
        areaStatusId, geographicalPositionId, regionId, dagNo, totalLand, Latitude, Longitude
        
        ){

        cy.xpath("//span[contains(text(),'EIIN Applications')]").click()
        cy.wait(3000)
        cy.xpath("//span[contains(text(),'Apply for EIIN')]").invoke('show')
        cy.contains('Apply for EIIN').click({force: true})
        cy.xpath("//span[contains(text(),'Apply for EIIN')]").click({force:true})
        cy.wait(3000)
        
        //Address
        cy.xpath("//select[contains(@name,'divisionId')]").select(division, {force:true}).should('have.value', division)
        cy.xpath("//select[@name='districtId']").select(district, {force:true}).should('have.value', district)
        cy.xpath("//select[@name='thanaId']").select(thana, {force:true}).should('have.value', thana)
        cy.xpath("//select[@name='unionId']").select(union, {force:true}).should('have.value', union)
        cy.xpath("//select[@name='mouzaId']").select(mouza, {force:true}).should('have.value', mouza)
        cy.xpath("//select[@name='postOfficeId']").select(postOffice, {force:true}).should('have.value', postOffice)
        cy.xpath("//textarea[@name='address']").type(address)
        
        //Contact Info
        cy.xpath("//input[@placeholder='Enter Telephone']").type(telephone)
        cy.xpath("//input[@placeholder='Enter Mobile']").type(mobile)
        cy.xpath("//input[@placeholder='Enter Alternate Mobile']").type(alterMobile)
        cy.xpath("//input[@placeholder='Enter Fax']").type(faxNo)
        cy.xpath("//input[@placeholder='Enter Email']").type(email)
        cy.xpath("//input[@placeholder='Enter WebSite']").type(website)

        //Institute Information
        cy.xpath("//select[@name='instituteTypeId']").select(instituteType, {force:true}).should('have.value', instituteType)
        cy.xpath("//select[@name='instituteForWhomId']").select(forWhom, {force:true}).should('have.value', forWhom)
        cy.xpath("//input[@placeholder='Enter Number Of Shift']").type(noOfShift)
        //Radio Button 
        cy.xpath("//input[contains(@value,'false')]").check()
        cy.xpath("//select[contains(@name,'constituencyId')]").select(constituencyId, {force:true}).should('have.value', constituencyId)
        cy.xpath("//select[@name='managementId']").select(managementId, {force:true}).should('have.value', managementId)
        cy.xpath("//select[@name='areaStatusId']").select(areaStatusId, {force:true}).should('have.value', areaStatusId)
        cy.xpath("//select[@name='geographicalPositionId']").select(geographicalPositionId, {force:true}).should('have.value', geographicalPositionId)
        cy.xpath("//select[@name='regionId']").select(regionId, {force:true}).should('have.value', regionId)
        cy.xpath("//input[@placeholder='Enter Dag No']").type(dagNo)
        cy.xpath("//input[@placeholder='Enter Total Land Area']").type(totalLand)
        cy.xpath("//input[@placeholder='Enter Latitude']").type(Latitude)
        cy.xpath("//input[@placeholder='Enter Longitude']").type(Longitude)
        
        
        
        // cy.get(':nth-child(3) > .accordion-item > .d-flex > :nth-child(1) > .sidebar-text').click()
        // cy.wait(3000)
        // cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').invoke('show')
        // cy.contains('Apply for EIIN').click({force: true})
        // cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click({force:true})
        // cy.wait(3000)


        //Save & Next Button
        //cy.xpath("//button[@type='submit']").click()
    
    }

}