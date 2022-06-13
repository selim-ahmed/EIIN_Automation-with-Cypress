/// <reference types="cypress-xpath" />


import { adminUser } from "./adminuserPageObject";

const adminuser = new adminUser()

it(' admin user navigate', ()=> {
    
    adminuser.navigate()
})

it('Admin user login', ()=> {
    
    adminuser.adminlogin('admin','1')
})

it('EIIN application navbar', ()=> {
    
    adminuser.EIINApplications()
    
})


// it('EIIN_app', ()=> {
    
    
// })

// it('EIIN_app', ()=> {
    
    
// })