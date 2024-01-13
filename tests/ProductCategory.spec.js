const { test, expect } = require("@playwright/test");

test("Product Categories", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await page.pause();
    const categories = await page.$$eval("#itemc", (elements) =>
        elements.map((element) => element.textContent.trim())
    );
    console.log("Categories:", categories);

    await page.close();
});
