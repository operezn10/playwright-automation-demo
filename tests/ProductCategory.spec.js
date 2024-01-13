const { test, expect } = require("@playwright/test");

test("Product Categories", async ({ page }) => {
    //First we go to the page
    await page.goto("https://www.demoblaze.com/index.html");

    // Next, we evaluate the arrow function to all elements with id itemc, in order to retrieve the text content for each, and store it in an array inside the constant 'categories'.
    // This way, we ensure the categories exist and then display them in a console log
    const categories = await page.$$eval("#itemc", (elements) =>
        elements.map((element) => element.textContent.trim())
    );
    console.log("Categories:", categories);

    //Finally, we close the page
    await page.close();
});
