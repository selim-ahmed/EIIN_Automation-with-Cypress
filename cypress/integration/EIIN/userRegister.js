/// <reference types="cypress-xpath" />

import {userRegister} from "./registrationPageObject"

const registration = new userRegister()

it('EIIN_app', ()=> {

    registration.navigate()

})


it('EIIN_app', ()=> {

    registration.applyForEIIN()

})


it('EIIN_app', ()=> {

    registration.register()

})


it('EIIN_app', ()=> {

    registration.createAccount(
        'Saila Akhter', 
        'সায়লা আক্তার', 
        '12-10-1999', 
        '01575431922', 
        'mphss08@yahoo.com', 
        '73/C Block# D, Asad Avenue, 1 Iqbal Road, Dhaka 1207', 
        'Mohammadpur Preparatory School & College', 
        'মোহাম্মদপুর প্রিপারেটরী স্কুল এন্ড কলেজ', 
        'Mrs. Mursheda Shaheen Islam', 
        'Shaheen', 
        '123456')

})