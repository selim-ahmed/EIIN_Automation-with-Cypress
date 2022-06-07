/// <reference types="cypress-xpath" />

import {userRegister} from "./registrationPageObject"

const registration = new userRegister()

it('Navigate', ()=> {

    registration.navigate()

})


it('Apply for EIIN', ()=> {

    registration.applyForEIIN()

})


it('Registration', ()=> {

    registration.register()

})


it('Create Account', ()=> {

    registration.createAccount(
        'Saila Akhter', 
        'সায়লা আক্তার',
        '1999-12-10', 
        '1999-12-10', 
        '01575431922', 
        'mphss08@yahoo.com', 
        '73/C Block# D, Asad Avenue, 1 Iqbal Road, Dhaka 1207', 
        'Mohammadpur Preparatory School & College', 
        'মোহাম্মদপুর প্রিপারেটরী স্কুল এন্ড কলেজ', 
        'Mrs. Mursheda Shaheen Islam', 
        'Shaheen', 
        '123456')

})