export class adminUser{

    navigate(){

        cy.visit("http://103.4.145.251:3005/")
        cy.viewport(1024, 1080)
        cy.contains('APPLY FOR EIIN/REVIEW').click()
        cy.wait(2000)

    }

    adminlogin(username, pass){
        cy.get(':nth-child(1) > .form-control').type(username)
        cy.get(':nth-child(2) > .form-control').type(pass)
        cy.get('.btn-md').click()
        cy.wait(3000) 
    }

    EIINApplications(){

        cy.xpath("//span[contains(text(),'EIIN Applications')]").click()
        cy.wait(3000)
        cy.xpath("//a[contains(@href,'/portal/review-institute-application/pending')]//span//span[contains(@class,'sidebar-text')][normalize-space()='Applications Under Review']").invoke('show')
        cy.contains('Applications Under Review').click({force: true})
        cy.xpath("//a[contains(@href,'/portal/review-institute-application/pending')]//span//span[contains(@class,'sidebar-text')][normalize-space()='Applications Under Review']").click({force:true})
        cy.wait(3000)

       
    }

}