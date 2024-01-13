const { test, expect } = require("@playwright/test");

test("Purchase Products", async ({ page }) => {
    //First we go to the page
    await page.goto("https://www.demoblaze.com/index.html");

    // Next, we select the product with the specific heading, and subsequently click the add to cart and cart options to see the item added.
    await page.getByRole("heading", { name: "Samsung galaxy s6" }).click();
    await page.locator('a:has-text("Add to cart")').click();
    await page.click("#cartur");

    // We then click on place order, fill the fields as needed, and click on Purchase. A new modal appears, so we confirm its existence and click on OK.
    await page.getByRole("button", { name: "Place Order" }).click();
    await page.fill("input#name", "Oscar Perez");
    await page.fill("input#country", "Colombia");
    await page.fill("input#city", "Bogota");
    await page.fill("input#card", "4444444444444444");
    await page.fill("input#month", "03");
    await page.fill("input#year", "2026");
    await page.getByRole("button", { name: "Purchase" }).click();
    await page.waitForSelector(".sweet-alert");
    await page.getByRole("button", { name: "OK" }).click();

    // Finally, we close the page
    await page.close();
});
