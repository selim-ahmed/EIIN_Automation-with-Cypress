
export class userRegister{

    navigate(){

        cy.visit("http://103.4.145.251:3005/")
        cy.viewport(1024, 1080)

    }
       
    applyForEIIN(){
        cy.contains('APPLY FOR EIIN/REVIEW').click()
        cy.wait(2000)
        
    }

    register(){
        cy.xpath("//a[@class='thembo ml-2']").click()
        cy.wait(3000) 
    }

    createAccount(name, nameBN, DOB, dobValue, mobile, email, address, instituteName, instituteNameBN, designation, username, pass)
    {

        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Full Name']").type(name)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Full Name (Bn)']").type(nameBN)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Date Of Birth']").type(DOB).should("have.value", dobValue)
        //cy.xpath("//input[@placeholder='Enter Phone Number']").type(phone)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Mobile Number']").type(mobile)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Email']").type(email)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Designation']").type(designation)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Institute Name']").type(instituteName)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Institute Name (Bn)']").type(instituteNameBN)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter address']").type(address)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter User Name']").type(username)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Enter Password']").type(pass)
        cy.xpath("//div[@class='col-md-6']//input[@placeholder='Confirm Password']").type(pass)
        
        
        //fileUpload
        const imagePath = "images1.jpg"
        cy.xpath("//div[@class='col-md-6']//input[@id='photoUrl']").attachFile(imagePath)
        
        
        
        //cy.xpath("//div[@class='col-md-6']//img[@id='preview-image']").contains("picture")
        //cy.xpath("//div[@class='web-version row']//button[@type='submit'][normalize-space()='Register']").click()
  
          
        
        //cy.get('div.dropdown', {timeout:10000}).contains('Admin').click()
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text', {timeout:3000}).contains('Apply For EIIN').should('be.visible')
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click({ force: true })
        //cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').contains('Apply For EIIN').click({ force: true })

    }

   
    
    
}