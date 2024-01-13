const { test, expect } = require("@playwright/test");

test("Purchase Products", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await page.pause();
    await page.getByRole("heading", { name: "Samsung galaxy s6" }).click();
    await page.locator('a:has-text("Add to cart")').click();
    await page.click("#cartur");
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

    await page.close();
});
