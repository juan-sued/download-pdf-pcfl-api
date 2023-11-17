import puppeteer from "puppeteer";

async function getLinkPdf(){





  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navegar até o site da CPFL
  await page.goto('https://servicosonline.cpfl.com.br/agencia-webapp/#/home');

  // vai para o login
  await page.waitForSelector('button#btnEntrar');
  await page.click('button#btnEntrar');
  //======================

  await page.waitForNavigation();

  // Login
  await page.waitForSelector('#signInName');
  await page.type('#signInName', 'antoniorobertoruzza@gmail.com');

  await page.waitForSelector('#password');
  await page.type('#password', 'Rob1959*');

  await page.click('#next');
//=================================

 console.log('chegou aqui')
  await page.waitForNavigation();






  await browser.close();


}


export {getLinkPdf}