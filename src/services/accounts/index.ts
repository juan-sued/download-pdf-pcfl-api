import puppeteer, { Browser, Page } from "puppeteer";

async function getLinkPdf(){

  const browser: Browser = await puppeteer.launch({headless: 'new'});
  const page: Page = await browser.newPage();

  // Navegar até o site da CPFL
  await page.goto('https://servicosonline.cpfl.com.br/agencia-webapp/#/home');


  //verifica e realiza o login
  const isNeedLogin: boolean = await page.evaluate(() => {
    return sessionStorage.getItem('userSessionStorage') === null;
});

  if (isNeedLogin) {
  console.log('Não possui login, logando...')
  await page.waitForSelector('button#btnEntrar');
  await page.click('button#btnEntrar');
  //======================


  // Login
  await page.setViewport({ width: 1200, height: 800 });
  await page.waitForTimeout(3000);

  const TEST_EMAIL : string = process.env.TEST_EMAIL

  await page.waitForSelector('input#signInName');
  await page.type('input#signInName', TEST_EMAIL);

  const TEST_PASSWORD : string = process.env.TEST_PASSWORD

  await page.waitForSelector('#password');
  await page.type('#password', TEST_PASSWORD);

  await page.waitForSelector('button#next', { visible: true });
  await page.click('button#next');

  await page.waitForTimeout(7000);

}

  await browser.close();

}


export {getLinkPdf}