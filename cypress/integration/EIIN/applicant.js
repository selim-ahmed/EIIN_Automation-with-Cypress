/// <reference types="cypress" />

import {applicantUser} from "./pageobjects"

const applicantuser = new applicantUser()


    it('EIIN_app', ()=> {

        applicantuser.navigate()


    })