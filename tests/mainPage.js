import { Page,expect, test } from '@playwright/test';

export class MainPage {
    constructor(page) {
      this.page = page;
    }

    async navigateToCareersPage(page) {
      await page.goto('https://iodinesoftware.com/');
      const companyNavItem = await page.waitForSelector('[id="menu-item-4050"]');
      await companyNavItem.hover();
      await page.click('text=Careers');
    }

    async switchToNewTab(page) {
      return new Promise(resolve => {
        page.context().on('page', newPage => {
          resolve(newPage);
        });
      });
    }

    async getTopFrame(newPage) {
      const topframe = await newPage.frameLocator('[id="gnewtonIframe"]');
      return topframe;
    }

    async continueButton(topframe) {
      const continuebtn = await topframe.locator('button[ns-qa="continueBtn"]');
      await continuebtn.click();
    }

    async applyToSdetRole(topframe) {
      const sdetElement = await topframe.locator('a[ns-qa="Software Development Engineer in Test - SDET"]');
      const applyButton = await topframe.locator('div[ns-qa="applyBtn"]');
      await sdetElement.focus();
      await sdetElement.click();
      await applyButton.click();
      await this.continueButton(topframe)
    }

    async selfIdentify(topframe) {
      await topframe.locator('input[id="male"]').check();
      await topframe.locator('input[id="race-8"]').check();
      await this.continueButton(topframe)
    }

    async veteranStatus(topframe) {
      await topframe.locator('input[id="not-identify-identify"]').check();
      await this.continueButton(topframe)
    }

    async disablityForm(topframe) {
      await topframe.locator('input[id="not_disability"]').check();
      const myName = await topframe.locator('#your-name');
      await myName.fill('Usman');
      const dates = await topframe.locator('label[for="today-date"]');
      await dates.type('31/08/2023');
      await this.continueButton(topframe)
    }

    async submitForm(topframe) {
      await topframe.getByLabel('Choose a File').setInputFiles('/Users/dev/Desktop/withplaywright/tests/Resume.pdf');
      await topframe.locator('input[id="email"]').fill('test');
      await topframe.locator('button[type="submit"]').click();
    }

    async emailVerification(page) {
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Please include an ‘@’ in the email address');

      });
    }

    async firstAndLastName(topframe) {
      const firstNameInput = await topframe.locator('input[id="firstName"]');
      const lastNameInput = await topframe.locator('input[id="lastName"]');
      await firstNameInput.fill('Usman');
      await lastNameInput.fill('Asif');
    }

    async email(topframe, email) {
      const dates = await topframe.locator('input[id="email"]');
      await dates.type(email);
    }

    async mobileNumber(topframe, mobileNumber) {
      const dates = await topframe.locator('input[id="mobile"]');
      await dates.type(mobileNumber);
    }

    async address(topframe, address) {
      const dates = await topframe.locator('input[id="address1"]');
      await dates.type(address);
    }
    async city(topframe, city) {
      const dates = await topframe.locator('input[id="city"]');
      await dates.type(city);
    }

  }



