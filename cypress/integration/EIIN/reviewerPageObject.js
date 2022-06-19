export class reviewer{

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

    instituteRegistration(search_institute_registration){
        
        cy.xpath("//span[contains(text(),'Institute Registrations')]").click()
        cy.wait(3000)
        cy.xpath("//span[contains(text(),'Registrations Under Review')]").invoke('show')
        cy.contains('Registrations Under Review').click({force: true})
        cy.xpath("//span[contains(text(),'Registrations Under Review')]").click({force:true})
        cy.wait(3000)
        cy.xpath("//input[contains(@placeholder,'Search')]").type(search_institute_registration).type('{enter}')
        cy.wait(2000)
        cy.xpath("//button[@class='btn btn-color']").click()
        cy.wait(7000)
        cy.xpath("//button[normalize-space()='Send Forward']").click()

    }
    
    pendingApplications(){
        
        cy.xpath("//span[contains(text(),'EIIN Applications')]").click()
        cy.wait(3000)
        cy.xpath("//span[contains(text(),'My Pending Applications')]").invoke('show')
        cy.contains('My Pending Applications').click({force: true})
        cy.xpath("//span[contains(text(),'My Pending Applications')]").click({force:true})
        cy.wait(3000)
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[10]/td[6]/a[1]/button[1]").click()
    }




}