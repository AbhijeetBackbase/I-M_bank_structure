import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class LoginPage extends AbstractPage {
    readonly usernameInput : Locator
    readonly passwordInput : Locator
    readonly loginButton: Locator
    readonly errorMessage:Locator

    constructor(page:Page){
        super(page)
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#kc-submit')
        this.errorMessage = page.locator("span[class='kc-feedback-text ml-2']")

    }
    async visit() {
        await this.page.goto('https://test-dxp.imbank.com/inm-retail/login')
      }
    async loginForm(name:string,password:string){
        await this.usernameInput.type(name)
        await this.passwordInput.type(password)
    }
    async clickloginButton(){
        await this.loginButton.click();
    }
    async assertWrongCred(){
        await expect(this.errorMessage).toContain('The Username or Password you entered is not valid. Please enter the correct Username/Password')
    }
}