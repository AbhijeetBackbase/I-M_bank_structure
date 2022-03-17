import { test, expect } from '@playwright/test'
import{LoginPage} from '../../page-objects/LoginPage'

test.describe('login flow',()=>{
    let loginPage: LoginPage
    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page)
        await loginPage.visit()
    })
    test('Login page wrong credentials',async ({page})=>{
        await loginPage.wait(3000)
        await loginPage.loginForm('wrongcred','wrongpassword')
        await loginPage.clickloginButton
        await loginPage.assertWrongCred
    })
    test('Perform Login',async ({page})=>{
        await loginPage.wait(3000)
        await loginPage.loginForm('jondoe2021','Password1*')
        await loginPage.clickloginButton
    })
})