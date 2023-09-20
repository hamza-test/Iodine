import { test,expect, chromium, Page } from '@playwright/test';
import { MainPage } from './mainPage';

test('Test project', async ({ page }) => {
  const Iodine = new MainPage();
  await Iodine.navigateToCareersPage(page)
  const newPage = await Iodine.switchToNewTab(page);
  const topframe = await Iodine.getTopFrame(newPage);
  await Iodine.applyToSdetRole(topframe);
  await Iodine.selfIdentify(topframe);
  await Iodine.veteranStatus(topframe);
  await Iodine.disablityForm(topframe); 
  await Iodine.submitForm(topframe);
  await Iodine.emailVerification(page);
  //remaning test 
  await Iodine.firstAndLastName(topframe)
  await Iodine.email(topframe,'test@gmail.com')
  await Iodine.mobileNumber(topframe,'12345567');
  await Iodine.address(topframe,'This is my dummy address')
  await Iodine.city(topframe,'seattle')
});

